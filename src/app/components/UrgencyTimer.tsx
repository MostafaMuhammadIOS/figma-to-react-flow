import { useEffect, useState } from 'react';
import { Clock, Flame } from 'lucide-react';

interface UrgencyTimerProps {
  variant?: 'inline' | 'banner';
  initialHours?: number;
}

export function UrgencyTimer({ variant = 'inline', initialHours = 24 }: UrgencyTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    hours: initialHours,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (variant === 'banner') {
    return (
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-4 text-center">
        <div className="container mx-auto flex items-center justify-center gap-3 flex-wrap">
          <Flame className="size-5 animate-pulse" />
          <span className="font-semibold">LIMITED TIME OFFER!</span>
          <span className="hidden sm:inline">Sale ends in:</span>
          <div className="flex items-center gap-2 font-mono font-bold">
            <span className="bg-white/20 px-2 py-1 rounded">{String(timeLeft.hours).padStart(2, '0')}</span>
            <span>:</span>
            <span className="bg-white/20 px-2 py-1 rounded">{String(timeLeft.minutes).padStart(2, '0')}</span>
            <span>:</span>
            <span className="bg-white/20 px-2 py-1 rounded">{String(timeLeft.seconds).padStart(2, '0')}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 px-4 py-2 rounded-lg">
      <Clock className="size-4" />
      <span className="text-sm font-semibold">
        Offer ends in: {String(timeLeft.hours).padStart(2, '0')}:
        {String(timeLeft.minutes).padStart(2, '0')}:
        {String(timeLeft.seconds).padStart(2, '0')}
      </span>
    </div>
  );
}

export function StockIndicator({ stock = 47 }: { stock?: number }) {
  return (
    <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-700 px-4 py-2 rounded-lg">
      <div className="size-2 bg-orange-500 rounded-full animate-pulse"></div>
      <span className="text-sm font-semibold">
        Only {stock} left in stock - Order now!
      </span>
    </div>
  );
}
