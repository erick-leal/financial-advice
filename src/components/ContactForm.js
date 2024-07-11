import React, { useState } from 'react';
import ReactGA from 'react-ga';
import emailjs from 'emailjs-com';
import { ContactSection, Title, Form, Input, Textarea, Button } from '../styles/ContactFormStyles';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    ReactGA.event({
        category: 'Form',
        action: 'Submit',
        label: 'Contact Form'
    });

   
    emailjs.sendForm('service_4kgphze', 'template_z2eq91w', e.target, '3DHa3iwu4MqnzcVp-')
      .then((result) => {
          console.log(result.text);
          alert('Mensaje enviado correctamente');
      }, (error) => {
          console.log(error.text);
          alert('Hubo un error al enviar el mensaje');
    });

    // Restablecer el formulario después de enviarlo
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <ContactSection id="contact">
      <Title>Contacto</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Nombre"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          type="tel"
          name="phone"
          placeholder="Teléfono"
          value={formData.phone}
          onChange={handleChange}
        />
        <Textarea
          name="message"
          placeholder="Mensaje"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <Button type="submit">Enviar</Button>
      </Form>
    </ContactSection>
  );
};

export default ContactForm;
