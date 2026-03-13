import { ProductGallery } from '../components/ProductGallery';
import { ProductInfo } from '../components/ProductInfo';
import { ProductTabs } from '../components/ProductTabs';
import { useOutletContext } from 'react-router';
import productImg1 from 'figma:asset/80fac5a335868fdfb4817413729b287207f7d4e0.png';
import productImg2 from 'figma:asset/68474ac77f44e3d000555b4d21322d7e4571bb38.png';
import productImg3 from 'figma:asset/9e51cd4c33544c6fc6adbb6a92972f642372be05.png';
import productImg4 from 'figma:asset/cd0c9eaae64d8f173e16ec27a854329c80807a9d.png';
import productImg5 from 'figma:asset/c3cb7bad2dd4fffd8d4cbddf6109b8112d06dedc.png';
import productImg6 from 'figma:asset/ebbec8bab01d3525d6442a0350300252ed59b362.png';
import productImg7 from 'figma:asset/f2298bdd985c441af6282c66f7e7767484e41550.png';

interface OutletContext {
  onAddToCart: (quantity: number, color: string) => void;
}

export function ProductPage() {
  const { onAddToCart } = useOutletContext<OutletContext>();

  const productImages = [
    productImg1,
    productImg2,
    productImg3,
    productImg4,
    productImg5,
    productImg6,
    productImg7,
  ];

  return (
    <div className="flex-1">
      {/* Product Section */}
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <ProductGallery images={productImages} />
          <ProductInfo onAddToCart={onAddToCart} />
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