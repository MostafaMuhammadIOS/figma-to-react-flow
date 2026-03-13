import { ProductGallery } from '../components/ProductGallery';
import { ProductInfo } from '../components/ProductInfo';
import { ProductTabs } from '../components/ProductTabs';
import { useOutletContext } from 'react-router';

interface OutletContext {
  addToCart: (product: { id: string; name: string; price: number; image: string }) => void;
}

export function ProductPage() {
  const { addToCart } = useOutletContext<OutletContext>();

  const productImages = [
    "https://images.unsplash.com/photo-1594766117697-8478c612c643?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMGZpbHRlciUyMHN0cmF3JTIwcHJvZHVjdHxlbnwxfHx8fDE3NzMzNjU4NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1615387086527-80c771c31384?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0YWJsZSUyMHdhdGVyJTIwZmlsdGVyJTIwZ2VhcnxlbnwxfHx8fDE3NzMzNjU4NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1760134703597-b1af11ecd019?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWtpbmclMjBnZWFyJTIwd2F0ZXIlMjBmaWx0cmF0aW9ufGVufDF8fHx8MTc3MzM2NTg1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1665512987872-4a4c06a8aab2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwd2F0ZXIlMjBwdXJpZmllciUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NzMzNjU4NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1556200225-fc2499ba3a74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1waW5nJTIwZHJpbmtpbmclMjB3YXRlcnxlbnwxfHx8fDE3NzMzNjU4NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1622988238512-bb5ac2a726f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1waW5nJTIwd2F0ZXIlMjBib3R0bGUlMjBmaWx0ZXJ8ZW58MXx8fHwxNzczMzY1ODUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1667761873085-72f218a4a3ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwaGlraW5nJTIwd2F0ZXIlMjBwdXJpZmljYXRpb258ZW58MXx8fHwxNzczMzY1ODUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  ];

  return (
    <div className="flex-1">
      {/* Product Section */}
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <ProductGallery images={productImages} />
          <ProductInfo onAddToCart={addToCart} />
        </div>
      </div>

      {/* Product Details */}
      <div className="container mx-auto px-4 py-8">
        <ProductTabs />
      </div>

      {/* Trust Badges */}
      <div className="bg-gray-50 py-12 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-semibold mb-2">500K+</div>
              <div className="text-sm text-gray-600">Satisfied Customers</div>
            </div>
            <div>
              <div className="text-3xl font-semibold mb-2">99.99%</div>
              <div className="text-sm text-gray-600">Filtration Rate</div>
            </div>
            <div>
              <div className="text-3xl font-semibold mb-2">4000L</div>
              <div className="text-sm text-gray-600">Filter Capacity</div>
            </div>
            <div>
              <div className="text-3xl font-semibold mb-2">4.9/5</div>
              <div className="text-sm text-gray-600">Customer Rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}