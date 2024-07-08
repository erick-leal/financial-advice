import React from 'react';
import styled from 'styled-components';

const TestimonialsSection = styled.section`
  padding: 60px 20px;
  background-color: #fff;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const TestimonialList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const TestimonialItem = styled.div`
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
`;

const Quote = styled.p`
  font-size: 1rem;
  color: #666;
  font-style: italic;
`;

const Author = styled.p`
  font-size: 1rem;
  color: #333;
  margin-top: 10px;
`;

const Testimonials = () => (
  <TestimonialsSection>
    <Title>Testimonios</Title>
    <TestimonialList>
      <TestimonialItem>
        <Quote>"La asesoría financiera fue excelente. Ahora tengo un mejor control de mis finanzas."</Quote>
        <Author>– Juan Pérez</Author>
      </TestimonialItem>
      <TestimonialItem>
        <Quote>"Gracias a la planificación, pude ahorrar y alcanzar mis metas más rápido."</Quote>
        <Author>– María Gómez</Author>
      </TestimonialItem>
      <TestimonialItem>
        <Quote>"Las plantillas de Excel personalizadas son muy útiles y fáciles de usar."</Quote>
        <Author>– Luis Martínez</Author>
      </TestimonialItem>
    </TestimonialList>
  </TestimonialsSection>
);

export default Testimonials;
