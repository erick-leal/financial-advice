import React, { useState } from 'react';
import ReactGA from 'react-ga';
import emailjs from 'emailjs-com';
import SnackbarComponent from './SnackbarComponent';
import { ContactSection, Title, Form, Input, Textarea, Button } from '../styles/ContactFormStyles';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    ReactGA.event({
        category: 'Form',
        action: 'Submit',
        label: 'Contact Form'
    });

   
    emailjs.sendForm('service_4kgphze', 'template_9hatw3i', e.target, '3DHa3iwu4MqnzcVp-')
      .then((result) => {
          console.log(result.text);
          setSnackbarMessage('Mensaje enviado correctamente');
          setSnackbarSeverity('success');;
      }, (error) => {
          console.log(error.text);
          setSnackbarMessage('Hubo un error al enviar el mensaje');
          setSnackbarSeverity('error');
    }).finally(() => {
      setSnackbarOpen(true);
      setIsSubmitting(false);
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
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
          disabled={isSubmitting}
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={isSubmitting}
        />
        <Input
          type="tel"
          name="phone"
          placeholder="Teléfono"
          value={formData.phone}
          onChange={handleChange}
          disabled={isSubmitting}
        />
        <Textarea
          name="message"
          placeholder="Mensaje"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
          disabled={isSubmitting}
        />
        <Button type="submit" disabled={isSubmitting}>Enviar</Button>
      </Form>
      <SnackbarComponent
        open={snackbarOpen}
        handleClose={handleSnackbarClose}
        message={snackbarMessage}
        severity={snackbarSeverity}
      />
    </ContactSection>
  );
};

export default ContactForm;
