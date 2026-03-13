import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'How does the water filter straw work?',
    answer: 'Our advanced UF (Ultrafiltration) carbon fiber system uses Sand Head ultrafiltration combined with KDF carbon fiber technology with 0.01-micron precision to physically remove 99.9999% of bacteria, 99.999% of parasites, heavy metals, and suspended impurities. The multi-layer filtration provides safe drinking water at 200-300ml/min flow rate from any freshwater source.',
  },
  {
    question: 'What contaminants does it remove?',
    answer: 'The filter removes bacteria (E. coli, Salmonella, etc.), parasites (Giardia, Cryptosporidium), heavy metal ions, sediment, algae, insect eggs, microplastics, dirt, sand, and cloudiness. The 0.01 micron precision ensures comprehensive filtration for safe drinking water.',
  },
  {
    question: 'How long does the filter last?',
    answer: 'Each filter straw can purify up to 4,000 liters of water with proper washing and maintenance. The filter has a 5-year shelf life when stored at room temperature in a dark place, making it perfect for long-term emergency preparedness.',
  },
  {
    question: 'Is it safe for international travel?',
    answer: 'Yes! The filter straw is perfect for international travel, especially to areas where tap water quality is questionable. It provides safe drinking water from most freshwater sources worldwide.',
  },
  {
    question: 'How do I clean and maintain it?',
    answer: 'After each use, blow air back through the filter to clear it. For deeper cleaning, backwash with clean water to extend the filter life up to 4000L. Store dry in a dark place at room temperature when not in use. No batteries or replacement parts needed.',
  },
  {
    question: 'What is your return policy?',
    answer: 'We offer a 30-day money-back guarantee. If you\'re not completely satisfied with your purchase, return it within 30 days for a full refund, no questions asked. Note: Once opened and used, the product cannot be returned unless there is a quality problem.',
  },
  {
    question: 'Do you ship internationally?',
    answer: 'Yes! We offer free worldwide shipping on all orders. Delivery typically takes 5-14 business days depending on your location.',
  },
  {
    question: 'What comes in the package?',
    answer: 'Each package includes: Water Filter Straw × 1, Extension Tube × 1, Hanging Rope × 1, and Water Bag × 1. Everything you need for immediate use in outdoor adventures or emergency situations.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about our water filter straw
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden hover:border-blue-300 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-lg pr-8">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="size-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <Plus className="size-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="mailto:support@filterwellkit.com"
            className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-2"
          >
            Contact our support team
            <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}