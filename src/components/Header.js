import React from 'react';
import styled from 'styled-components';
import ReactGA from 'react-ga';

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #f4f4f4;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #333;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #666;
`;

const CTAButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #007BFF;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const handleCTAClick = () => {
  ReactGA.event({
    category: 'Button',
    action: 'Click',
    label: 'Submit Button'
  });

  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const Header = () => (
  <Hero>
    <Title>Obtén el Control de Tus Finanzas Hoy</Title>
    <Subtitle>Asesoría y Planificación Financiera Personalizada</Subtitle>
    <CTAButton  onClick={handleCTAClick}>Agenda tu Consulta Gratuita</CTAButton>
  </Hero>
);

export default Header;
