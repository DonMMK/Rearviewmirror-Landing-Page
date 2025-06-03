import React from 'react';
import { valuePropData } from '../data';
import { AnimatedElement } from './AnimatedElement';
import { SectionHeading } from './SectionHeading';
import { motion } from 'framer-motion';

export const ValuePropositionSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="How Rearviewmirror Works" 
          subtitle="Our unique approach uses a car analogy to help you navigate your relationship journey."
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {valuePropData.map((prop, index) => (
            <AnimatedElement key={prop.title} delay={index * 0.1}>
              <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col items-center">
                <motion.div 
                  className="mb-6 p-4 bg-primary-50 rounded-full"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {prop.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-primary-700 mb-3 text-center">{prop.title}</h3>
                <p className="text-gray-600 text-center">{prop.description}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>
        
        {/* Road divider - car dashboard style */}
        <AnimatedElement>
          <div className="w-full max-w-4xl mx-auto h-24 relative">
            <svg width="100%" height="100%" viewBox="0 0 800 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              {/* Dashboard background */}
              <rect width="800" height="80" rx="40" fill="#F0F5FF" />
              
              {/* Road line */}
              <path d="M50 40 H750" stroke="#E0E0E0" strokeWidth="4" strokeDasharray="8 8" />
              
              {/* Speedometer elements */}
              <circle cx="400" cy="40" r="30" fill="#5E78F0" fillOpacity="0.2" />
              <circle cx="400" cy="40" r="26" fill="white" />
              
              {/* Indicator marks */}
              <circle cx="200" cy="40" r="10" fill="#5E78F0" />
              <circle cx="400" cy="40" r="10" fill="#5E78F0" />
              <circle cx="600" cy="40" r="10" fill="#5E78F0" />
              
              {/* Animated needle */}
              <motion.path 
                d="M400 40 L400 15" 
                stroke="#FF6019"
                strokeWidth="4"
                strokeLinecap="round"
                animate={{ 
                  transform: ['rotate(0deg)', 'rotate(120deg)', 'rotate(240deg)', 'rotate(360deg)'],
                  transformOrigin: "400px 40px"
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </svg>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};