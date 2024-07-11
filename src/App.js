import React from 'react';
import Header from './components/Header';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import ContactForm from './components/ContactForm';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsApp';
import styled, { createGlobalStyle } from 'styled-components';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    overflow-x: hidden;
  }
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100vw;
`;

const App = () => (
  <>
    <GlobalStyle />
    <AppContainer>
      <Header />
      <Services />
      <Testimonials />
      <Process />
      <ContactForm />
      <AboutMe />
      <Footer />
      <WhatsAppButton />
    </AppContainer>
  </>
);

export default App;
