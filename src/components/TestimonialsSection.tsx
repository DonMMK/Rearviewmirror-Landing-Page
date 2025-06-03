import React from 'react';
import { testimonialData } from '../data';
import { AnimatedElement } from './AnimatedElement';
import { SectionHeading } from './SectionHeading';
import { Star, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="community" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-50 rounded-full opacity-70 z-0"></div>
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-accent-50 rounded-full opacity-50 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-center mb-8">
          <Users className="w-12 h-12 text-primary-300 mr-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700">Community</h2>
        </div>
        
        <SectionHeading 
          title="What Couples Are Saying" 
          subtitle="Join thousands of couples already strengthening their relationships."
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonialData.map((testimonial, index) => (
            <AnimatedElement key={index} delay={index * 0.1}>
              <motion.div 
                className="bg-gray-50 p-6 rounded-lg shadow-sm h-full relative"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
              >
                {/* Quotation mark decoration */}
                <div className="absolute top-3 right-3 text-5xl text-primary-100">"</div>
                
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 text-yellow-400"
                      fill={i < Math.floor(testimonial.rating || 5) ? 'currentColor' : 'none'}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic relative z-10">"{testimonial.quote}"</p>
                <p className="text-primary-600 font-semibold">— {testimonial.authors}</p>
              </motion.div>
            </AnimatedElement>
          ))}
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <AnimatedElement delay={0.1}>
            <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    className="w-6 h-6 text-yellow-400"
                    fill="currentColor"
                  />
                ))}
              </div>
              <span className="ml-2 text-gray-800 font-medium">5.0★ on App Store</span>
            </div>
          </AnimatedElement>
          
          <AnimatedElement delay={0.2}>
            <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    className="w-6 h-6 text-yellow-400"
                    fill="currentColor"
                  />
                ))}
              </div>
              <span className="ml-2 text-gray-800 font-medium">5.0★ on Google Play</span>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};