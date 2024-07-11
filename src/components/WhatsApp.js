import React from 'react';
import styled from 'styled-components';
import { FaWhatsapp } from 'react-icons/fa';

const Button = styled.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #25D366;
  color: white;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  z-index: 1000;

  &:hover {
    background-color: #128C7E;
  }
`;

const WhatsAppButton = () => {
  return (
    <Button href="https://wa.me/+56979828103" target="_blank" rel="noopener noreferrer">
      <FaWhatsapp size={32} />
    </Button>
  );
}

export default WhatsAppButton;
