import { useEffect } from 'react';

interface StructuredDataProps {
  type: 'product' | 'organization' | 'website';
  data: any;
}

export function StructuredData({ type, data }: StructuredDataProps) {
  useEffect(() => {
    const scriptId = `structured-data-${type}`;
    
    // Remove existing script if present
    const existingScript = document.getElementById(scriptId);
    if (existingScript) {
      existingScript.remove();
    }

    // Create new script
    const script = document.createElement('script');
    script.id = scriptId;
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById(scriptId);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [type, data]);

  return null;
}

// Pre-defined structured data generators
export const createProductSchema = (productData: {
  name: string;
  description: string;
  image: string;
  price: string;
  currency: string;
  availability: string;
  rating: number;
  reviewCount: number;
  brand: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: productData.name,
  description: productData.description,
  image: productData.image,
  brand: {
    '@type': 'Brand',
    name: productData.brand,
  },
  offers: {
    '@type': 'Offer',
    price: productData.price,
    priceCurrency: productData.currency,
    availability: `https://schema.org/${productData.availability}`,
    url: typeof window !== 'undefined' ? window.location.href : '',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: productData.rating,
    reviewCount: productData.reviewCount,
  },
});

export const createOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'filterwellkit',
  url: typeof window !== 'undefined' ? window.location.origin : '',
  logo: 'https://images.unsplash.com/photo-1622260614927-403b0a160c0b?w=400&h=400&fit=crop',
  description: 'Premium portable water filter straws for outdoor adventures, camping, hiking, and emergency preparedness.',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    email: 'support@filterwellkit.com',
  },
  sameAs: [
    'https://facebook.com/filterwellkit',
    'https://instagram.com/filterwellkit',
    'https://twitter.com/filterwellkit',
  ],
});

export const createWebsiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'filterwellkit',
  url: typeof window !== 'undefined' ? window.location.origin : '',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: typeof window !== 'undefined' ? `${window.location.origin}/product?q={search_term_string}` : '',
    },
    'query-input': 'required name=search_term_string',
  },
});
