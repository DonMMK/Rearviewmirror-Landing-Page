import { Feature, FAQ, Testimonial, ValueProp } from './types';
import { Calendar, Car, Gift, Heart, Map, MessageCircle, Users } from 'lucide-react';
import React from 'react';

export const valuePropData: ValueProp[] = [
  {
    title: 'Rearview',
    description: 'Reflect on memories and relationship milestones.',
    icon: <Car className="w-12 h-12 text-primary-500" />,
  },
  {
    title: 'Windshield',
    description: 'Plan your future-shared goals and dreamy date nights.',
    icon: <Map className="w-12 h-12 text-primary-500" />,
  },
  {
    title: 'Maintenance',
    description: 'Communicate better. Resolve conflict. Grow together.',
    icon: <MessageCircle className="w-12 h-12 text-primary-500" />,
  },
  {
    title: 'Community',
    description: 'Learn from and connect with other like-minded couples.',
    icon: <Users className="w-12 h-12 text-primary-500" />,
  },
];

export const featureData: Feature[] = [
  {
    title: 'Guided Conversations',
    description: 'Step-by-step frameworks for resolving conflicts and deepening your connection.',
    icon: <MessageCircle className="w-10 h-10 text-primary-500" />,
  },
  {
    title: 'Date Night Planner',
    description: 'Discover new ideas and plan memorable experiences together.',
    icon: <Calendar className="w-10 h-10 text-primary-500" />,
  },
  {
    title: 'Gift Ideas Tracker',
    description: 'Never forget a special occasion or gift idea again.',
    icon: <Gift className="w-10 h-10 text-primary-500" />,
  },
  {
    title: 'Partner Journal',
    description: 'Record your thoughts and feelings in a private shared space.',
    icon: <Heart className="w-10 h-10 text-primary-500" />,
  },
    {
    title: 'Community Engagement',
    description: 'Share stories and recommendations with other couples',
    icon: <Heart className="w-10 h-10 text-primary-500" />,
  },
];

export const testimonialData: Testimonial[] = [
  {
    quote: 'This app saved our relationship. It gave us a language to reconnect.',
    authors: 'Mia & Jordan',
    rating: 5,
  },
  {
    quote: "Couples counselling was too daunting and Rearviewmirror was a more accessible alternative.",
    authors: 'Sam & Lex',
    rating: 5,
  },
  {
    quote: 'Every long distance couple needs this!',
    authors: 'Priya & Nate',
    rating: 4.5,
  },
];

export const faqData: FAQ[] = [
  {
    question: 'Is this a therapy app?',
    answer: "No, but it's a great alternative. We guide couples through meaningful conversations and activities to improve connection.",
  },
  {
    question: 'Who is this app for?',
    answer: 'Couples at any stage - dating, engaged, or married - who want to grow stronger together.',
  },
  {
    question: 'How is it different from other relationship apps?',
    answer: 'Rearviewmirror is the only app to cover every stage of your journey: past, present, future, and community.',
  },
  {
    question: 'How much does the app cost?',
    answer: 'We offer a free version with basic features, and a premium subscription that unlocks all features for $14.99/month or $59.99/year.',
  },
];