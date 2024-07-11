import React from 'react';
import Slider from 'react-slick';
import { testimonialsData } from '../utils/TestimonialData';
import { TestimonialsSection, Title, TestimonialItem, Quote, Author } from '../styles/TestimonialStyles';

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <TestimonialsSection>
      <Title>Testimonios</Title>
      <Slider {...settings}>
        {testimonialsData.map((testimonial, index) => (
          <TestimonialItem key={index}>
            <Quote>"{testimonial.quote}"</Quote>
            <Author>{testimonial.author}</Author>
          </TestimonialItem>
        ))}
      </Slider>
    </TestimonialsSection>
  );
};

export default Testimonials;
