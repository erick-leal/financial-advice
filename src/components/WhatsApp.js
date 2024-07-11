import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { Button } from '../styles/WhatsAppStyles';

const WhatsAppButton = () => {
  return (
    <Button href="https://wa.me/+56979828103" target="_blank" rel="noopener noreferrer">
      <FaWhatsapp size={32} />
    </Button>
  );
}

export default WhatsAppButton;
