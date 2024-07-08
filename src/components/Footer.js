import React from 'react';
import styled from 'styled-components';

const FooterSection = styled.footer`
  padding: 20px;
  background-color: #333;
  color: #fff;
  text-align: center;
`;

const FooterText = styled.p`
  font-size: 1rem;
  margin: 0;
`;

const Footer = () => (
  <FooterSection>
    <FooterText>© 2024 Financial Advice. Todos los derechos reservados.</FooterText>
  </FooterSection>
);

export default Footer;
