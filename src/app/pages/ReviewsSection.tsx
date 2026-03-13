import { Star, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router';

export function ReviewsSection() {
  const navigate = useNavigate();

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse [animation-delay:1s]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000,transparent)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full px-6 py-2 mb-6"
          >
            <Star className="size-4 text-amber-400 fill-amber-400" />
            <span className="text-sm font-medium text-blue-100">Trusted by 50,000+ Adventurers</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-6xl mb-6 text-white"
          >
            Real Stories, Real Adventures
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-blue-200 max-w-3xl mx-auto mb-8"
          >
            See why outdoor enthusiasts worldwide trust filterwellkit for their hydration needs
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-32 h-1.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto rounded-full"
          ></motion.div>
        </div>
        
        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
            <div className="text-3xl lg:text-4xl font-bold text-white mb-2">4.7/5</div>
            <div className="text-sm text-blue-200">Average Rating</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
            <div className="text-3xl lg:text-4xl font-bold text-white mb-2">42K+</div>
            <div className="text-sm text-blue-200">Verified Reviews</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
            <div className="text-3xl lg:text-4xl font-bold text-white mb-2">94%</div>
            <div className="text-sm text-blue-200">Recommend Us</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
            <div className="text-3xl lg:text-4xl font-bold text-white mb-2">10+</div>
            <div className="text-sm text-blue-200">Years Trusted</div>
          </div>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-7xl mx-auto">
          {/* Large Featured Review - Left */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 lg:p-10 shadow-2xl hover:shadow-blue-500/20 hover:border-white/30 transition-all duration-500 group relative overflow-hidden"
          >
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-blue-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Quote Mark */}
            <div className="absolute -top-4 -right-4 text-white/5 group-hover:text-white/10 transition-colors duration-500">
              <svg className="size-32" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            
            <div className="relative z-10">
              {/* Profile Section */}
              <div className="flex items-center gap-4 mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1622284742615-2b44d533c7d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBhZHZlbnR1cmVyJTIwcG9ydHJhaXQlMjBjb25maWRlbnR8ZW58MXx8fHwxNzczMzI0Mjk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="T. Farnsworth"
                    className="size-20 rounded-full object-cover ring-4 ring-white/20 relative z-10"
                  />
                  <div className="absolute -bottom-2 -right-2 size-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center ring-4 ring-slate-900 z-20">
                    <svg className="size-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white mb-1">T. Farnsworth</h4>
                  <p className="text-sm text-blue-200 mb-2">Appalachian Trail Hiker</p>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs text-blue-300">• Verified Purchase</span>
                  </div>
                </div>
              </div>

              {/* Review Content */}
              <blockquote className="text-lg lg:text-xl text-white/90 leading-relaxed mb-6 font-light">
                "I've been hiking the Appalachian Trail solo as out-and-back day hikes. The filter is tiny, and if you're using clear water from a moving stream or spring, the flow is pretty fast. After a few trips with this baby, I'm hooked. I love this system - it simply can't be beat."
              </blockquote>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-blue-200">
                <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2">
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>United States</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2">
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>September 2014</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Stacked Reviews */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Review Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-xl hover:shadow-blue-500/20 hover:border-white/30 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute -top-2 -right-2 text-white/5 group-hover:text-white/10 transition-colors">
                <svg className="size-20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1770027611422-a25c0fe9a139?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBvdXRkb29yJTIwZW50aHVzaWFzdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MzMyNDI5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Roger H"
                      className="size-14 rounded-full object-cover ring-4 ring-white/20"
                    />
                    <div className="absolute -bottom-1 -right-1 size-6 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center ring-2 ring-slate-900">
                      <svg className="size-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Roger H</h4>
                    <div className="flex items-center gap-1 mt-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="size-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <p className="text-white/80 leading-relaxed mb-4">
                  "Me and my wife do a lot of back country backpacking for 2 weeks at a time and this filter is a must. By far this has worked the best having good flow. Not once has it given any trouble!"
                </p>
                
                <div className="flex items-center gap-2 text-xs text-blue-200">
                  <span className="bg-white/10 rounded-full px-3 py-1">Backpacker</span>
                  <span>• Nov 2025</span>
                </div>
              </div>
            </motion.div>

            {/* Review Card 2 - Featured */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl p-6 shadow-xl hover:shadow-blue-500/30 transition-all duration-500 group relative overflow-hidden hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute -top-2 -right-2 text-white/10 group-hover:text-white/20 transition-colors">
                <svg className="size-20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1623578204044-1d061c46953c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGhpa2VyJTIwcG9ydHJhaXQlMjBuYXR1cmV8ZW58MXx8fHwxNzczMzI0Mjk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Mary B"
                      className="size-14 rounded-full object-cover ring-4 ring-white/30"
                    />
                    <div className="absolute -bottom-1 -right-1 size-6 bg-white rounded-full flex items-center justify-center ring-2 ring-blue-600">
                      <svg className="size-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Mary B</h4>
                    <div className="flex items-center gap-1 mt-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="size-3.5 fill-white text-white" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <p className="text-white leading-relaxed mb-4 font-medium">
                  "Took these to Peru and filtered all of our drinking water. The filters worked great. We stayed healthy. Clean water is hard to find there!"
                </p>
                
                <div className="flex items-center gap-2 text-xs text-white/80">
                  <span className="bg-white/20 rounded-full px-3 py-1">International Travel</span>
                  <span>• Dec 2025</span>
                </div>
              </div>
            </motion.div>

            {/* Review Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-xl hover:shadow-blue-500/20 hover:border-white/30 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute -top-2 -right-2 text-white/5 group-hover:text-white/10 transition-colors">
                <svg className="size-20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1766412107699-170f1e3f3572?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHNtaWxpbmclMjBvdXRkb29yJTIwcG9ydHJhaXQlMjBoYXBweXxlbnwxfHx8fDE3NzMzMjQyOTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="The Art of Prepping"
                      className="size-14 rounded-full object-cover ring-4 ring-white/20"
                    />
                    <div className="absolute -bottom-1 -right-1 size-6 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center ring-2 ring-slate-900">
                      <svg className="size-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">The Art of Prepping</h4>
                    <div className="flex items-center gap-1 mt-0.5">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="size-3.5 fill-amber-400 text-amber-400" />
                      ))}
                      <Star className="size-3.5 text-amber-400" />
                    </div>
                  </div>
                </div>
                
                <p className="text-white/80 leading-relaxed mb-4">
                  "Excellent for preparedness kits and backup home water filtration needs. Would buy again. Highly recommended!"
                </p>
                
                <div className="flex items-center gap-2 text-xs text-blue-200">
                  <span className="bg-white/10 rounded-full px-3 py-1">Emergency Prep</span>
                  <span>• Dec 2025</span>
                </div>
              </div>
            </motion.div>

            {/* Review Card 4 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-xl hover:shadow-blue-500/20 hover:border-white/30 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute -top-2 -right-2 text-white/5 group-hover:text-white/10 transition-colors">
                <svg className="size-20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1599139497043-042b5c90db45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMG91dGRvb3IlMjBiYWNrcGFja2VyfGVufDF8fHx8MTc3MzMyNDA0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Wade Radcliffe"
                      className="size-14 rounded-full object-cover ring-4 ring-white/20"
                    />
                    <div className="absolute -bottom-1 -right-1 size-6 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center ring-2 ring-slate-900">
                      <svg className="size-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Wade Radcliffe</h4>
                    <div className="flex items-center gap-1 mt-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="size-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <p className="text-white/80 leading-relaxed mb-4">
                  "Lightweight, effective. It has served me for many miles. Great for backpacking!"
                </p>
                
                <div className="flex items-center gap-2 text-xs text-blue-200">
                  <span className="bg-white/10 rounded-full px-3 py-1">Long Distance Hiker</span>
                  <span>• Feb 2026</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-blue-200 mb-6 text-lg">Join 50,000+ satisfied adventurers worldwide</p>
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            onClick={() => navigate('/product')}
          >
            Get Your FilterWellKit Today
            <ArrowRight className="ml-2 size-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}