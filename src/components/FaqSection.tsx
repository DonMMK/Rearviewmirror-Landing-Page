import React, { useState } from 'react';
import { faqData } from '../data';
import { AnimatedElement } from './AnimatedElement';
import { SectionHeading } from './SectionHeading';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First FAQ open by default

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Frequently Asked Questions" 
          subtitle="Get answers to common questions about Rearviewmirror."
          center
        />
        
        <div className="max-w-3xl mx-auto">
          {faqData.map((faq, index) => (
            <AnimatedElement key={index} delay={index * 0.1}>
              <div className="mb-4 last:mb-0">
                <button
                  className={`flex justify-between items-center w-full p-5 bg-white rounded-lg ${
                    openIndex === index ? 'rounded-b-none shadow-sm' : 'shadow-sm hover:shadow-md'
                  } transition-all duration-300 text-left`}
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openIndex === index}
                >
                  <h3 className="text-lg font-semibold text-primary-700">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-primary-500" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 bg-white rounded-b-lg shadow-sm border-t border-gray-100">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};