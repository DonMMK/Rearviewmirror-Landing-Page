import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface AnimatedElementProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export const AnimatedElement: React.FC<AnimatedElementProps> = ({ 
  children, 
  delay = 0,
  className = ''
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};