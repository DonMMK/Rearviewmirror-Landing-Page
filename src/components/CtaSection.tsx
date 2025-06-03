import React from 'react';
import { AnimatedElement } from './AnimatedElement';
import { AppStoreButtons } from './AppStoreButtons';
import { motion } from 'framer-motion';

export const CtaSection: React.FC = () => {
  return (
    <section id="download" className="py-24 relative">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-center bg-cover z-0" 
        style={{ 
          backgroundImage: 'url("https://images.pexels.com/photos/1252500/pexels-photo-1252500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")'
        }}
      >
        <div className="absolute inset-0 bg-primary-700 bg-opacity-80"></div>
      </div>
      
      {/* Car animation - road with moving car */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gray-800 z-10"></div>
      <div className="absolute bottom-4 left-0 right-0 h-1 bg-white z-10">
        <div className="w-full h-full flex">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="w-8 h-1 bg-white mr-8"></div>
          ))}
        </div>
      </div>
      <motion.div
        className="absolute bottom-6 z-20"
        initial={{ left: -80 }}
        animate={{ left: "calc(100% + 80px)" }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "linear"
        }}
      >
        <svg width="60" height="30" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="15" width="50" height="10" rx="2" fill="#5E78F0" />
          <rect x="10" y="5" width="30" height="15" rx="2" fill="#5E78F0" />
          <circle cx="15" cy="25" r="5" fill="#333" />
          <circle cx="45" cy="25" r="5" fill="#333" />
          <rect x="12" y="8" width="8" height="8" rx="1" fill="#D1D5DB" />
          <rect x="30" y="8" width="8" height="8" rx="1" fill="#D1D5DB" />
        </svg>
      </motion.div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl mx-auto text-center text-white">
          <AnimatedElement>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Grab your partner. A journey awaits.</h2>
          </AnimatedElement>
          <AnimatedElement delay={0.1}>
            <p className="text-xl mb-8 opacity-90">Start building a deeper connection today with Rearviewmirror.</p>
          </AnimatedElement>
          <AnimatedElement delay={0.2}>
            <AppStoreButtons className="justify-center" />
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};