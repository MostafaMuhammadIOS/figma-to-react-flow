import { ArrowRight, Droplets, Filter, ShieldCheck, Zap, ChevronDown } from 'lucide-react';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { ReviewsSection } from './ReviewsSection';
import { SEO } from '../components/SEO';
import { StructuredData, createProductSchema, createOrganizationSchema, createWebsiteSchema } from '../components/StructuredData';
import { TrustBadges, PaymentMethods } from '../components/TrustBadges';
import { UrgencyTimer, StockIndicator } from '../components/UrgencyTimer';
import { SocialProof, ViewingIndicator } from '../components/SocialProof';
import { FAQ } from '../components/FAQ';
import heroImage from 'figma:asset/c62dddb032717eca2c8f84e3ff6015aa0a61c515.png';
import useImage from 'figma:asset/88bc88340ed3b1554d157cb4466c388a82a9c53d.png';
import comparisonImage from 'figma:asset/f2298bdd985c441af6282c66f7e7767484e41550.png';

export function Home() {
  const navigate = useNavigate();

  const howItWorks = [
    {
      step: '1',
      title: 'Find Water Source',
      description: 'Locate any freshwater source - stream, lake, or river',
    },
    {
      step: '2',
      title: 'Insert & Drink',
      description: 'Simply place the straw in water and drink directly',
    },
    {
      step: '3',
      title: 'Stay Hydrated',
      description: 'Enjoy clean, safe water instantly - no waiting',
    },
  ];

  return (
    <div className="flex-1">
      {/* SEO Meta Tags */}
      <SEO
        title="Portable Water Filter Straw - 99.9% Bacteria Removal | filterwellkit"
        description="Premium portable water filter straw with 5-level filtration. Removes 99.9% bacteria & parasites. Perfect for hiking, camping, travel & emergencies. Free shipping worldwide!"
        keywords="water filter straw, portable water filter, hiking water filter, camping water purifier, emergency water filter, travel water filter, bacteria removal, outdoor gear"
        image={heroImage}
        type="product"
        price="15.67"
        currency="USD"
        availability="InStock"
      />

      {/* Structured Data for SEO */}
      <StructuredData
        type="product"
        data={createProductSchema({
          name: 'Portable Water Filter Straw',
          description: 'Advanced 5-level filtration removes 99.9% of bacteria and parasites. Compact, portable, and essential for every adventure.',
          image: heroImage,
          price: '15.67',
          currency: 'USD',
          availability: 'InStock',
          rating: 4.7,
          reviewCount: 42000,
          brand: 'filterwellkit',
        })}
      />
      <StructuredData type="organization" data={createOrganizationSchema()} />
      <StructuredData type="website" data={createWebsiteSchema()} />

      {/* Social Proof Notification */}
      <SocialProof />

      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1665861705109-b4a838c9207f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMHdhdGVyJTIwc3RyZWFtJTIwbmF0dXJlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NzMyNjUwNDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Water background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)]">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 text-center lg:text-left"
            >
              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
                  Pure Water.<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600">
                    Anywhere. Anytime.
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                  Advanced 5-level filtration removes 99.9% of bacteria and parasites. 
                  Compact, portable, and essential for every adventure.
                </p>
              </motion.div>

              {/* Feature Highlights */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="flex flex-wrap gap-4 justify-center lg:justify-start"
              >
                <div className="flex items-center gap-2 bg-white shadow-md px-4 py-3 rounded-lg">
                  <ShieldCheck className="size-5 text-blue-600" />
                  <span className="text-sm font-medium">0.01 Micron Filter</span>
                </div>
                <div className="flex items-center gap-2 bg-white shadow-md px-4 py-3 rounded-lg">
                  <Droplets className="size-5 text-cyan-600" />
                  <span className="text-sm font-medium">4000L Capacity</span>
                </div>
                <div className="flex items-center gap-2 bg-white shadow-md px-4 py-3 rounded-lg">
                  <Zap className="size-5 text-yellow-500" />
                  <span className="text-sm font-medium">Instant Use</span>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="flex justify-center lg:justify-start"
              >
                <Button
                  size="lg"
                  className="text-xl px-20 py-8 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1 w-full sm:w-auto min-w-[280px]"
                  onClick={() => navigate('/product')}
                >
                  <span className="font-semibold">Buy Now</span>
                  <ArrowRight className="ml-3 size-7" />
                </Button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="flex flex-wrap gap-6 items-center text-sm text-gray-600 justify-center lg:justify-start"
              >
                <div className="flex items-center gap-2">
                  <svg className="size-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Free Shipping</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="size-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>30-Day Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="size-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>CE Certified</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Product Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1, type: "spring", bounce: 0.3 }}
              className="relative"
            >
              {/* Decorative Circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-blue-200/40 to-cyan-200/40 rounded-full blur-3xl"></div>
              
              {/* Product Image */}
              <div className="relative z-10">
                <ImageWithFallback
                  src={heroImage}
                  alt="Portable Water Filter Straw - filterwellkit"
                  className="w-full h-auto drop-shadow-2xl rounded-3xl"
                />
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute top-8 right-8 bg-white shadow-2xl px-6 py-4 rounded-2xl border border-gray-100"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">$15.67</div>
                  <div className="text-sm text-gray-600">Limited Offer</div>
                </div>
              </motion.div>

              {/* Floating Feature */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4, duration: 0.8 }}
                className="absolute bottom-12 left-0 bg-white shadow-2xl px-5 py-3 rounded-xl border border-gray-100 flex items-center gap-3"
              >
                <div className="size-10 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="size-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold">99.9% Effective</div>
                  <div className="text-xs text-gray-600">Bacteria Removal</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          onClick={() => {
            document.querySelector('#how-it-works')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-gray-500 text-sm">Scroll to explore</span>
            <ChevronDown className="size-8 text-gray-400 hover:text-blue-600 transition-colors" />
          </motion.div>
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple, fast, and reliable - clean water in seconds
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {howItWorks.map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center size-20 bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-full text-3xl font-bold mb-6 shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-xl mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                {index < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full">
                    <ArrowRight className="size-6 text-gray-300 mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product in Action - Built for the Outdoors */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <ImageWithFallback
                src={useImage}
                alt="Person using water filter outdoors"
                className="rounded-2xl w-full shadow-xl"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl">
                Built for the Outdoors
              </h2>
              <p className="text-lg text-gray-600">
                Whether you're hiking through mountains, camping in the wilderness, 
                or traveling abroad, our water filter straw is your reliable companion 
                for safe hydration.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold mb-1">60g</div>
                  <div className="text-sm text-gray-600">Ultra Lightweight</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold mb-1">22cm</div>
                  <div className="text-sm text-gray-600">Compact Size</div>
                </div>
              </div>
              <Button 
                size="lg" 
                className="w-full sm:w-auto"
                onClick={() => navigate('/product')}
              >
                View Full Details
                <ArrowRight className="ml-2 size-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section - Perfect For Every Adventure */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl mb-4">Perfect For Every Adventure</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-xl text-center shadow-md hover:shadow-xl transition">
              <div className="text-4xl mb-3">🏔</div>
              <h3 className="text-xl mb-2">Hiking & Camping</h3>
              <p className="text-sm text-gray-600">Stay hydrated on long trails</p>
            </div>
            <div className="bg-white p-8 rounded-xl text-center shadow-md hover:shadow-xl transition">
              <div className="text-4xl mb-3">✈️</div>
              <h3 className="text-xl mb-2">International Travel</h3>
              <p className="text-sm text-gray-600">Drink safely anywhere</p>
            </div>
            <div className="bg-white p-8 rounded-xl text-center shadow-md hover:shadow-xl transition">
              <div className="text-4xl mb-3">🚨</div>
              <h3 className="text-xl mb-2">Emergency Kit</h3>
              <p className="text-sm text-gray-600">Essential preparedness item</p>
            </div>
            <div className="bg-white p-8 rounded-xl text-center shadow-md hover:shadow-xl transition">
              <div className="text-4xl mb-3">🎒</div>
              <h3 className="text-xl mb-2">Backpacking</h3>
              <p className="text-sm text-gray-600">Lightweight survival gear</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <ReviewsSection />

      {/* Trust Badges */}
      <TrustBadges />

      {/* FAQ Section */}
      <FAQ />

      {/* Payment Methods */}
      <PaymentMethods />

      {/* Final CTA Section - Ready for Your Next Adventure */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-5xl mb-6">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of outdoor enthusiasts who never worry about water safety. 
            Get your filterwellkit water filter straw today.
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="text-lg px-12 py-7"
            onClick={() => navigate('/product')}
          >
            Shop Now
            <ArrowRight className="ml-2 size-5" />
          </Button>
          <p className="text-sm text-blue-200 mt-6">
            Free shipping • 30-day money-back guarantee • CE certified
          </p>
        </div>
      </section>
    </div>
  );
}