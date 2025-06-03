import { ReactNode } from 'react';

export interface Testimonial {
  quote: string;
  authors: string;
  rating?: number;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface ValueProp {
  title: string;
  description: string;
  icon: ReactNode;
}