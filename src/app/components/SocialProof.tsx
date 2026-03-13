import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, MapPin } from 'lucide-react';

interface RecentPurchase {
  name: string;
  location: string;
  timeAgo: string;
  product: string;
}

const recentPurchases: RecentPurchase[] = [
  { name: 'Sarah M.', location: 'California, USA', timeAgo: '2 minutes ago', product: 'Blue Water Filter Straw' },
  { name: 'James K.', location: 'London, UK', timeAgo: '5 minutes ago', product: 'Green Water Filter Straw' },
  { name: 'Emma L.', location: 'Sydney, Australia', timeAgo: '7 minutes ago', product: 'Orange Water Filter Straw' },
  { name: 'Michael R.', location: 'Toronto, Canada', timeAgo: '12 minutes ago', product: 'Black Water Filter Straw' },
  { name: 'Sophie T.', location: 'Paris, France', timeAgo: '15 minutes ago', product: 'Blue Water Filter Straw' },
  { name: 'David C.', location: 'New York, USA', timeAgo: '18 minutes ago', product: 'Green Water Filter Straw' },
];

export function SocialProof() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % recentPurchases.length);
        setIsVisible(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const current = recentPurchases[currentIndex];

  return (
    <div className="fixed bottom-6 left-6 z-50 max-w-sm hidden lg:block">
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-white shadow-2xl rounded-xl p-4 border border-gray-100"
          >
            <div className="flex items-start gap-3">
              <div className="size-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="size-6 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-sm mb-1">
                  {current.name} just purchased
                </div>
                <div className="text-xs text-gray-600 mb-2">
                  {current.product}
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <MapPin className="size-3" />
                  <span>{current.location}</span>
                  <span>•</span>
                  <span>{current.timeAgo}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ViewingIndicator() {
  const [viewers, setViewers] = useState(27);

  useEffect(() => {
    const interval = setInterval(() => {
      setViewers((prev) => {
        const change = Math.floor(Math.random() * 5) - 2;
        const newValue = prev + change;
        return Math.max(15, Math.min(45, newValue));
      });
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-4 py-2 rounded-lg">
      <div className="flex -space-x-2">
        <div className="size-6 bg-blue-400 rounded-full border-2 border-white"></div>
        <div className="size-6 bg-cyan-400 rounded-full border-2 border-white"></div>
        <div className="size-6 bg-blue-500 rounded-full border-2 border-white"></div>
      </div>
      <span className="text-sm font-semibold">
        {viewers} people are viewing this right now
      </span>
    </div>
  );
}
