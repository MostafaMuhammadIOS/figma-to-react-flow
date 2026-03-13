import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Star } from 'lucide-react';
import { Avatar, AvatarFallback } from './ui/avatar';

export function ProductTabs() {
  const reviews = [
    {
      id: 1,
      name: 'Michael Torres',
      rating: 5,
      date: 'March 8, 2026',
      comment: 'This filter straw saved me on my last hiking trip! I was able to drink directly from mountain streams without any worry. Compact and easy to use!',
      verified: true,
    },
    {
      id: 2,
      name: 'Jessica Liu',
      rating: 5,
      date: 'March 5, 2026',
      comment: 'Essential item for international travel. Used it throughout Southeast Asia and never got sick. The water tasted clean and fresh every time.',
      verified: true,
    },
    {
      id: 3,
      name: 'David Williams',
      rating: 5,
      date: 'February 29, 2026',
      comment: 'Incredibly lightweight and effective. I keep one in my emergency kit and one in my hiking backpack. Great value for the price!',
      verified: true,
    },
  ];

  return (
    <Tabs defaultValue="description" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="description">Description</TabsTrigger>
        <TabsTrigger value="specifications">Specifications</TabsTrigger>
        <TabsTrigger value="reviews">Reviews</TabsTrigger>
      </TabsList>

      <TabsContent value="description" className="mt-6 space-y-4">
        <div className="space-y-8">
          {/* Overview Section */}
          <div className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Overview</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="size-8 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 mt-1">
                  <span className="text-sm font-semibold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Portable Design</h4>
                  <p className="text-gray-700">
                    Compact and lightweight for easy carrying during outdoor activities.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="size-8 rounded-full bg-green-600 text-white flex items-center justify-center shrink-0 mt-1">
                  <span className="text-sm font-semibold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Emergency Purification</h4>
                  <p className="text-gray-700">
                    Provides safe drinking water in survival situations with advanced filtration technology.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="size-8 rounded-full bg-orange-600 text-white flex items-center justify-center shrink-0 mt-1">
                  <span className="text-sm font-semibold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Multi-Scenario Use</h4>
                  <p className="text-gray-700">
                    Suitable for camping, hiking, and emergency preparedness with versatile application.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Advanced Filtration */}
          <div className="border-l-4 border-blue-600 pl-6 py-2">
            <h3 className="text-xl font-semibold mb-4">Advanced Filtration Technology</h3>
            <p className="text-gray-700 leading-relaxed">
              Our portable water filter straw uses advanced UF (Ultrafiltration) carbon fiber 
              technology with 0.01 micron precision to provide you with safe, clean drinking water 
              from various freshwater sources. The Sand Head ultrafiltration combined with KDF carbon 
              fiber removes 99.9999% of bacteria, 99.999% of parasites, heavy metal ions, and 
              suspended impurities including sediment, algae, and insect eggs. With a water flow rate 
              of 200-300ml per minute, you get fast, reliable filtration whenever you need it.
            </p>
          </div>
          
          {/* Outdoor Adventures */}
          <div className="border-l-4 border-green-600 pl-6 py-2">
            <h3 className="text-xl font-semibold mb-4">Perfect for Outdoor Adventures</h3>
            <p className="text-gray-700 leading-relaxed">
              Whether you're hiking through remote trails, camping in the wilderness, or 
              traveling to areas with questionable water quality, this filter straw is your 
              reliable companion. No need to carry heavy water bottles or worry about running 
              out of clean water.
            </p>
          </div>

          {/* Portable */}
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Ultra-Portable & Lightweight</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Weighing only 60 grams and measuring 22cm in length with a 2.5cm diameter, this filter 
              straw fits easily in any backpack, purse, or emergency kit. It's so compact you can 
              take it anywhere without adding bulk or weight to your gear.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="text-center p-3 bg-white rounded-lg">
                <div className="text-2xl font-bold text-blue-600">60g</div>
                <div className="text-xs text-gray-600 mt-1">Weight</div>
              </div>
              <div className="text-center p-3 bg-white rounded-lg">
                <div className="text-2xl font-bold text-green-600">22cm</div>
                <div className="text-xs text-gray-600 mt-1">Length</div>
              </div>
              <div className="text-center p-3 bg-white rounded-lg">
                <div className="text-2xl font-bold text-orange-600">2.5cm</div>
                <div className="text-xs text-gray-600 mt-1">Diameter</div>
              </div>
            </div>
          </div>

          {/* Easy to Use */}
          <div className="border-l-4 border-orange-600 pl-6 py-2">
            <h3 className="text-xl font-semibold mb-4">Easy to Use - No Setup Required</h3>
            <p className="text-gray-700 leading-relaxed">
              Simply place the straw into any freshwater source and drink. No pumping, no 
              batteries, no waiting time, and no chemicals. The straw works immediately through 
              pure physical filtration which is safer than chemical sterilization.
            </p>
          </div>

          {/* What's Included */}
          <div className="bg-blue-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">What's Included</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex items-center gap-3 bg-white p-4 rounded-lg">
                <div className="size-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-medium text-sm">Water Filter × 1</span>
              </div>
              <div className="flex items-center gap-3 bg-white p-4 rounded-lg">
                <div className="size-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-medium text-sm">Extension Tube × 1</span>
              </div>
              <div className="flex items-center gap-3 bg-white p-4 rounded-lg">
                <div className="size-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
                  <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-medium text-sm">Hanging Rope × 1</span>
              </div>
              <div className="flex items-center gap-3 bg-white p-4 rounded-lg">
                <div className="size-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                  <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-medium text-sm">Water Bag × 1</span>
              </div>
            </div>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="specifications" className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-4">Filtration Specifications</h4>
            <dl className="space-y-3">
              <div className="flex justify-between py-2 border-b">
                <dt className="text-gray-600">Specification</dt>
                <dd>UF Carbon Fiber</dd>
              </div>
              <div className="flex justify-between py-2 border-b">
                <dt className="text-gray-600">Model Number</dt>
                <dd>JY-XG-001</dd>
              </div>
              <div className="flex justify-between py-2 border-b">
                <dt className="text-gray-600">Filtering Accuracy</dt>
                <dd>0.01 Micron</dd>
              </div>
              <div className="flex justify-between py-2 border-b">
                <dt className="text-gray-600">Filter Material</dt>
                <dd>Sand Head Ultrafiltration KDF Carbon Fiber</dd>
              </div>
              <div className="flex justify-between py-2 border-b">
                <dt className="text-gray-600">Filtration Life</dt>
                <dd>4000L (with washing)</dd>
              </div>
              <div className="flex justify-between py-2 border-b">
                <dt className="text-gray-600">Water Flow Rate</dt>
                <dd>200-300ml/min</dd>
              </div>
            </dl>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Physical Specifications</h4>
            <dl className="space-y-3">
              <div className="flex justify-between py-2 border-b">
                <dt className="text-gray-600">Size</dt>
                <dd>18 × 6.5 × 4 CM</dd>
              </div>
              <div className="flex justify-between py-2 border-b">
                <dt className="text-gray-600">Shelf Life</dt>
                <dd>5 years (room temperature, dark storage)</dd>
              </div>
              <div className="flex justify-between py-2 border-b">
                <dt className="text-gray-600">Colors Available</dt>
                <dd>Blue, Green, Orange, Black</dd>
              </div>
              <div className="flex justify-between py-2 border-b">
                <dt className="text-gray-600">Portability</dt>
                <dd>Compact & Lightweight</dd>
              </div>
              <div className="flex justify-between py-2 border-b">
                <dt className="text-gray-600">Storage</dt>
                <dd>Room Temperature, Dark Place</dd>
              </div>
            </dl>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Performance & Standards</h4>
            <dl className="space-y-3">
              <div className="flex justify-between py-2 border-b">
                <dt className="text-gray-600">Bacteria Removal</dt>
                <dd>99.9999%</dd>
              </div>
              <div className="flex justify-between py-2 border-b">
                <dt className="text-gray-600">Parasite Removal</dt>
                <dd>99.999%</dd>
              </div>
              <div className="flex justify-between py-2 border-b">
                <dt className="text-gray-600">CE Certified</dt>
                <dd>Yes</dd>
              </div>
              <div className="flex justify-between py-2 border-b">
                <dt className="text-gray-600">Use Cases</dt>
                <dd>Camping, Hiking, Travel, Emergency</dd>
              </div>
            </dl>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Package Contents</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="size-1.5 bg-black rounded-full"></span>
                Water Filter × 1
              </li>
              <li className="flex items-center gap-2">
                <span className="size-1.5 bg-black rounded-full"></span>
                Extension Tube × 1
              </li>
              <li className="flex items-center gap-2">
                <span className="size-1.5 bg-black rounded-full"></span>
                Hanging Rope × 1
              </li>
              <li className="flex items-center gap-2">
                <span className="size-1.5 bg-black rounded-full"></span>
                Water Bag × 1
              </li>
            </ul>
            <p className="text-xs text-gray-500 mt-4">
              * Once opened and used, the product cannot be returned or exchanged unless there is a quality problem.
            </p>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="reviews" className="mt-6">
        <div className="space-y-6">
          {/* Rating Summary */}
          <div className="flex items-start gap-8 pb-6 border-b">
            <div className="text-center">
              <div className="text-5xl font-semibold mb-2">4.9</div>
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="size-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <div className="text-sm text-gray-600">5,247 reviews</div>
            </div>

            <div className="flex-1 space-y-2">
              {[5, 4, 3, 2, 1].map((stars) => (
                <div key={stars} className="flex items-center gap-3">
                  <span className="text-sm w-12">{stars} star</span>
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-yellow-400"
                      style={{
                        width: stars === 5 ? '85%' : stars === 4 ? '12%' : '3%',
                      }}
                    />
                  </div>
                  <span className="text-sm text-gray-600 w-12">
                    {stars === 5 ? '85%' : stars === 4 ? '12%' : '3%'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Individual Reviews */}
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="pb-6 border-b last:border-0">
                <div className="flex items-start gap-4">
                  <Avatar>
                    <AvatarFallback>
                      {review.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold">{review.name}</h4>
                      {review.verified && (
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">
                          Verified Purchase
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`size-3 ${
                              i < review.rating
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}