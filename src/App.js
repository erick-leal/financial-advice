// src/App.js
import React from 'react';
import Header from './components/Header';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import ContactForm from './components/ContactForm';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';

const App = () => (
  <>
    <Header />
    <Services />
    <Testimonials />
    <Process />
    <ContactForm />
    <AboutMe />
    <Footer />
  </>
);

export default App;
