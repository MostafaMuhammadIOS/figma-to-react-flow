import { ShieldCheck, Truck, CreditCard, RotateCcw, Award, Lock } from 'lucide-react';

export function TrustBadges() {
  const badges = [
    {
      icon: ShieldCheck,
      title: '100% Secure',
      subtitle: 'SSL Encrypted',
    },
    {
      icon: Truck,
      title: 'Free Shipping',
      subtitle: 'Worldwide',
    },
    {
      icon: RotateCcw,
      title: '30-Day Returns',
      subtitle: 'Money Back',
    },
    {
      icon: Award,
      title: 'CE Certified',
      subtitle: 'Quality Assured',
    },
  ];

  return (
    <div className="bg-gray-50 border-y border-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <div key={index} className="flex flex-col items-center text-center gap-2">
              <div className="size-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white shadow-lg">
                <badge.icon className="size-6" />
              </div>
              <div>
                <div className="font-semibold text-sm">{badge.title}</div>
                <div className="text-xs text-gray-600">{badge.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function PaymentMethods() {
  return (
    <div className="flex items-center justify-center gap-3 py-6">
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <Lock className="size-4" />
        <span>Secure Payment:</span>
      </div>
      <div className="flex items-center gap-2">
        {/* Visa */}
        <div className="bg-white border border-gray-200 rounded px-3 py-1.5 text-xs font-semibold">
          VISA
        </div>
        {/* Mastercard */}
        <div className="bg-white border border-gray-200 rounded px-3 py-1.5 text-xs font-semibold">
          MC
        </div>
        {/* PayPal */}
        <div className="bg-white border border-gray-200 rounded px-3 py-1.5 text-xs font-semibold text-blue-600">
          PayPal
        </div>
        {/* Amex */}
        <div className="bg-white border border-gray-200 rounded px-3 py-1.5 text-xs font-semibold">
          AMEX
        </div>
      </div>
    </div>
  );
}
