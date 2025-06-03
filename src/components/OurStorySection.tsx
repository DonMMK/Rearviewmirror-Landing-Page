import React from 'react';
import { AnimatedElement } from './AnimatedElement';
import { SectionHeading } from './SectionHeading';
import { motion } from 'framer-motion';

export const OurStorySection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-center bg-cover z-0 opacity-10" 
        style={{ 
          backgroundImage: 'url("https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1920")'
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading 
          title="Our Story: Built to last, Because forever is just the start" 
          subtitle="It began as a gift… now it's a journey for all of us."
          center
        />
        
        <div className="max-w-3xl mx-auto">
          <AnimatedElement>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg">
              <p className="text-lg leading-relaxed text-primary-dark mb-6">
                Rearviewmirror wasn't built by a startup team or dreamed up in a boardroom. It started as a personal project-a Christmas gift from the app's founder to his girlfriend in 2023. Originally built in Swift, it was a simple app meant just for the two of them-to record their memories, share date ideas, and stay emotionally connected during the ups and downs of life. When friends saw it, they all said the same thing: "Wait... can we have that too?"
              </p>
              <p className="text-lg leading-relaxed text-primary-dark">
                What started as a love letter between two people became something bigger-an app that couples everywhere could use to navigate their relationship's journey together. So he rebuilt it from scratch-for everyone.
              </p>
            </div>
          </AnimatedElement>
          
          <AnimatedElement delay={0.2}>
            <motion.div 
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block rounded-full overflow-hidden mb-4">
                <img 
                  src="https://public-stored-items.s3.ap-southeast-2.amazonaws.com/don_profile.JPG" 
                  alt="Founder" 
                  className="w-24 h-24 object-cover"
                />
              </div>
              <p className="text-primary-dark font-semibold">Don Kaluarachchi</p>
              <p className="text-primary-light">Founder</p>
            </motion.div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};