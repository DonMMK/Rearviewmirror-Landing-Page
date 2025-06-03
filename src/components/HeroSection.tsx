import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AnimatedElement } from './AnimatedElement';
import { AppStoreButtons } from './AppStoreButtons';
import { Star } from 'lucide-react';

const phoneImages = [
  'https://images.pexels.com/photos/6893918/pexels-photo-6893918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/6893886/pexels-photo-6893886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/6893881/pexels-photo-6893881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
];

export const HeroSection: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Auto-rotate the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % phoneImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="pt-28 pb-20 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <AnimatedElement>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-700 leading-tight mb-6">
                Navigate your relationship like never before.
              </h1>
            </AnimatedElement>
            
            <AnimatedElement delay={0.1}>
              <p className="text-xl text-gray-600 mb-8 max-w-lg">
                The only couples app that helps you reflect, grow, and plan - together.
              </p>
            </AnimatedElement>
            
            <AnimatedElement delay={0.2}>
              <AppStoreButtons className="mb-8" />
            </AnimatedElement>
            
            <AnimatedElement delay={0.3}>
              <div className="flex items-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 text-yellow-400" 
                      fill={i < 4 || i === 4 ? "currentColor" : "none"}
                    />
                  ))}
                  <Star className="w-5 h-5 text-yellow-400" fill="currentColor" strokeWidth={0.5} />
                </div>
                <span className="ml-2 text-gray-600 font-medium">5.0★ from 2,000+ users</span>
              </div>
            </AnimatedElement>
          </div>
          
          <div className="lg:w-1/2 relative">
            <AnimatedElement delay={0.4} className="relative">
              {/* Phone mockup */}
              <div className="relative h-[600px] w-full max-w-[300px] mx-auto">
                {/* Background decoration */}
                <motion.div 
                  className="absolute -right-6 -top-6 w-64 h-64 bg-primary-100 rounded-full opacity-70 z-0"
                  animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                
                <motion.div 
                  className="absolute -left-4 -bottom-4 w-48 h-48 bg-accent-100 rounded-full opacity-70 z-0"
                  animate={{ scale: [1, 1.1, 1], rotate: [0, -5, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
                
                {/* Phone frame */}
                <div className="absolute inset-0 bg-primary-200 rounded-[40px] transform rotate-3 z-10"></div>
                <motion.div 
                  className="absolute inset-0 bg-black rounded-[36px] shadow-lg overflow-hidden z-20"
                  animate={{ rotate: [-2, 2, -2] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="relative h-full">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-xl z-30"></div>
                    
                    {/* Screen content */}
                    <div className="h-full pt-2 bg-white">
                      {phoneImages.map((image, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0 }}
                          animate={{ 
                            opacity: currentImage === index ? 1 : 0,
                          }}
                          transition={{ duration: 0.5 }}
                          className="absolute inset-0 w-full h-full"
                        >
                          <img 
                            src={image} 
                            alt={`App screenshot ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
              
              {/* Carousel indicators */}
              <div className="flex justify-center mt-8 space-x-3">
                {phoneImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      currentImage === index ? 'bg-primary-500 w-6' : 'bg-gray-300'
                    }`}
                    aria-label={`View screenshot ${index + 1}`}
                  />
                ))}
              </div>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </section>
  );
};