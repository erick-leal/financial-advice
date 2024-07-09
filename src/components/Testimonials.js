import React from 'react';
import { testimonialsData } from '../utils/TestimonialData';
import { TestimonialsSection, Title, TestimonialList, TestimonialItem, Quote, Author } from '../styles/TestimonialStyles';

const Testimonials = () => (
  <TestimonialsSection>
    <Title>Testimonios</Title>
    <TestimonialList>
      {testimonialsData.map((testimonial, index) => (
        <TestimonialItem key={index}>
          <Quote>"{testimonial.quote}"</Quote>
          <Author>{testimonial.author}</Author>
        </TestimonialItem>
      ))}
    </TestimonialList>
  </TestimonialsSection>
);

export default Testimonials;
