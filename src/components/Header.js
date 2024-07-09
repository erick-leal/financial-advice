import React from 'react';
import ReactGA from 'react-ga';
import { Hero, Title, Subtitle, CTAButton } from '../styles/HeaderStyles';

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

const Header = () => {
  ReactGA.initialize('G-YQCNW7H0HP');  // Reemplaza con tu ID de seguimiento
  ReactGA.pageview(window.location.pathname + window.location.search); // Registra la vista de página
  
  return (
  <Hero>
    <Title>Obtén el Control de Tus Finanzas Hoy</Title>
    <Subtitle>Asesoría y Planificación Financiera Personalizada</Subtitle>
    <CTAButton  onClick={handleCTAClick}>Agenda tu Consulta Gratuita</CTAButton>
  </Hero>
)};

export default Header;
