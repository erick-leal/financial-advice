import React from 'react';
import Header from './components/Header';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import ContactForm from './components/ContactForm';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import styled, { createGlobalStyle } from 'styled-components';
import ReactGA from 'react-ga';

ReactGA.initialize('G-YQCNW7H0HP');  // Reemplaza con tu ID de seguimiento

ReactGA.pageview(window.location.pathname + window.location.search); // Registra la vista de página

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
  }
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
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
    </AppContainer>
  </>
);

export default App;
