import { useState } from 'react';
import { Button } from './ui/button';
import { Star, Truck, Shield, RotateCcw, Check } from 'lucide-react';
import { Badge } from './ui/badge';

interface ProductInfoProps {
  onAddToCart: (product: { id: string; name: string; price: number; image: string }) => void;
}

export function ProductInfo({ onAddToCart }: ProductInfoProps) {
  const [selectedBundle, setSelectedBundle] = useState(1);

  const bundles = [
    { quantity: 1, price: 15.67, perUnit: 15.67, discount: '' },
    { quantity: 2, price: 28.99, perUnit: 14.495, discount: 'Save 7%' },
    { quantity: 5, price: 68.99, perUnit: 13.798, discount: 'Save 12%', popular: true },
    { quantity: 10, price: 129.99, perUnit: 12.999, discount: 'Save 17%' },
  ];

  const selectedBundleData = bundles.find(b => b.quantity === selectedBundle) || bundles[0];

  const handleAddToCart = () => {
    onAddToCart({
      id: 'water-filter-straw',
      name: 'Portable Water Filter Straw',
      price: selectedBundleData.price,
      image: "https://images.unsplash.com/photo-1594766117697-8478c612c643?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMGZpbHRlciUyMHN0cmF3JTIwcHJvZHVjdHxlbnwxfHx8fDE3NzMzNjU4NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    });
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Title and Rating */}
      <div>
        <Badge className="mb-3">Best Seller</Badge>
        <h1 className="text-3xl lg:text-4xl mb-3">
          Portable Water Filter Straw
        </h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="size-4 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">4.9 (5,247 reviews)</span>
        </div>
      </div>

      {/* Price */}
      <div className="border-b pb-6">
        <div className="flex items-baseline gap-3 mb-1">
          <span className="text-4xl font-bold">${selectedBundleData.price.toFixed(2)}</span>
          {selectedBundleData.quantity > 1 && (
            <span className="text-sm text-gray-500">({selectedBundleData.quantity} units)</span>
          )}
        </div>
        <p className="text-sm text-gray-600">
          ${selectedBundleData.perUnit.toFixed(2)} per unit
        </p>
      </div>

      {/* Bundle Selection */}
      <div>
        <label className="text-sm font-semibold mb-4 block">Select Bundle</label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {bundles.map((bundle) => (
            <button
              key={bundle.quantity}
              onClick={() => setSelectedBundle(bundle.quantity)}
              className={`relative p-4 border-2 rounded-lg transition-all ${
                selectedBundle === bundle.quantity
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              {bundle.popular && (
                <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                  <Badge className="bg-orange-500 text-white text-xs px-2 py-0.5">Most Popular</Badge>
                </div>
              )}
              <div className="text-center">
                <div className="text-lg font-bold mb-1">{bundle.quantity} {bundle.quantity === 1 ? 'Unit' : 'Units'}</div>
                <div className="text-xl font-semibold text-blue-600 mb-1">${bundle.price.toFixed(2)}</div>
                {bundle.discount && (
                  <div className="text-xs text-green-600 font-medium">{bundle.discount}</div>
                )}
              </div>
              {selectedBundle === bundle.quantity && (
                <div className="absolute top-2 right-2">
                  <Check className="size-5 text-blue-600" />
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed">
        Advanced UF carbon fiber filtration system with 0.01 micron precision removes 99.9999% 
        of bacteria, parasites, heavy metals, and suspended impurities. Ultra-portable design 
        perfect for camping, hiking, travel, and emergency preparedness. Filter lifespan up to 
        4000L with proper washing and maintenance.
      </p>

      {/* Key Features */}
      <div className="bg-blue-50 p-4 rounded-lg space-y-2">
        <h4 className="font-semibold text-sm mb-3">Key Features:</h4>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start gap-2">
            <span className="text-blue-600 mt-0.5">✓</span>
            <span>0.01 micron UF carbon fiber precision filtration</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 mt-0.5">✓</span>
            <span>4000L filtration capacity (with washing)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 mt-0.5">✓</span>
            <span>200-300ml/min water flow rate</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 mt-0.5">✓</span>
            <span>5-year shelf life - perfect for emergency kits</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 mt-0.5">✓</span>
            <span>Complete set: filter, extension tube, rope & water bag</span>
          </li>
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-3">
        <Button 
          size="lg" 
          className="w-full text-base"
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>
        <Button size="lg" variant="outline" className="w-full text-base">
          Buy Now
        </Button>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t">
        <div className="flex items-center gap-3">
          <Truck className="size-5 text-gray-600" />
          <div>
            <p className="text-sm font-medium">Free Shipping</p>
            <p className="text-xs text-gray-500">On all orders</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Shield className="size-5 text-gray-600" />
          <div>
            <p className="text-sm font-medium">Quality Tested</p>
            <p className="text-xs text-gray-500">EPA & NSF certified</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <RotateCcw className="size-5 text-gray-600" />
          <div>
            <p className="text-sm font-medium">30-Day Returns</p>
            <p className="text-xs text-gray-500">Money back guarantee</p>
          </div>
        </div>
      </div>
    </div>
  );
}