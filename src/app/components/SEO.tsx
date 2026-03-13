import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'product' | 'article';
  price?: string;
  currency?: string;
  availability?: string;
}

export function SEO({
  title,
  description,
  keywords,
  image = 'https://images.unsplash.com/photo-1622260614927-403b0a160c0b?w=1200&h=630&fit=crop',
  url = typeof window !== 'undefined' ? window.location.href : '',
  type = 'website',
  price,
  currency = 'USD',
  availability = 'in stock',
}: SEOProps) {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Set or update meta tags
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Basic Meta Tags
    setMetaTag('description', description);
    if (keywords) {
      setMetaTag('keywords', keywords);
    }

    // Open Graph Tags (Facebook, LinkedIn)
    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:image', image, true);
    setMetaTag('og:url', url, true);
    setMetaTag('og:type', type, true);
    setMetaTag('og:site_name', 'filterwellkit', true);

    // Twitter Card Tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', image);

    // Product-specific tags
    if (type === 'product' && price) {
      setMetaTag('product:price:amount', price, true);
      setMetaTag('product:price:currency', currency, true);
      setMetaTag('product:availability', availability, true);
    }

    // Mobile optimization
    setMetaTag('viewport', 'width=device-width, initial-scale=1, maximum-scale=5');
    setMetaTag('theme-color', '#2563eb');

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;

  }, [title, description, keywords, image, url, type, price, currency, availability]);

  return null;
}
