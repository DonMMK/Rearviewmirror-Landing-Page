import React from 'react';
import { featureData } from '../data';
import { AnimatedElement } from './AnimatedElement';
import { SectionHeading } from './SectionHeading';
import { motion } from 'framer-motion';

export const FeatureHighlightsSection: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Feature Highlights" 
          subtitle="Designed to strengthen your relationship in meaningful ways."
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureData.map((feature, index) => (
            <AnimatedElement key={feature.title} delay={index * 0.1}>
              <motion.div 
                className="bg-white p-8 rounded-lg shadow-sm h-full"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                transition={{ duration: 0.2 }}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-primary-700 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            </AnimatedElement>
          ))}
        </div>
        
        <div className="mt-20">
          <AnimatedElement>
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-2xl font-bold text-primary-700 mb-6 text-center">See It In Action</h3>
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center relative">
                {/* Placeholder for YouTube video */}
                <div className="absolute inset-0 bg-primary-900 opacity-10 rounded-lg"></div>
                <motion.div 
                  className="relative z-10 bg-white rounded-full p-5 cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 5V19L19 12L8 5Z" fill="#5E78F0"/>
                  </svg>
                </motion.div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};