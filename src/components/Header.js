import React from 'react';
import ReactGA from 'react-ga';
import { Hero, Title, Subtitle, CTAButton } from '../styles/HeaderStyles';
import { HeaderData } from '../utils/HeaderData';

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
    <Title>{HeaderData.title}</Title>
    <Subtitle>{HeaderData.subtitle}</Subtitle>
    <CTAButton  onClick={handleCTAClick}>{HeaderData.button}</CTAButton>
  </Hero>
)};

export default Header;
