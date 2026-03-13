import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductGalleryProps {
  images: string[];
}

export function ProductGallery({ images }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
        <ImageWithFallback
          src={images[selectedImage]}
          alt="Product main image"
          className="size-full object-cover"
        />
      </div>

      {/* Thumbnail Images */}
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 transition ${
              selectedImage === index ? 'border-black' : 'border-transparent'
            }`}
          >
            <ImageWithFallback
              src={image}
              alt={`Product thumbnail ${index + 1}`}
              className="size-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
