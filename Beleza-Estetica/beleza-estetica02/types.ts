
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  price?: string;
  tag?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: React.ReactNode;
}