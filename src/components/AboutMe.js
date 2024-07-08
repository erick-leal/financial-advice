import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 60px 20px;
  background-color: #f9f9f9;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const Bio = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 20px;
`;

const AboutMe = () => (
  <AboutSection>
    <Title>Sobre Mí</Title>
    <Bio>
      <Paragraph>
        Ingeniero Informático de profesión, apasionado con mundo de las finanzas y con muchas ganas de ayudar a personas y familias a alcanzar sus metas financieras. Mi misión es proporcionar asesoramiento personalizado y herramientas prácticas para gestionar y crecer tu patrimonio.
      </Paragraph>
      <Paragraph>
        Mi enfoque está en la educación financiera y en la creación de estrategias personalizadas que se adapten a las necesidades y objetivos específicos de cada cliente. Ya sea que estés buscando ahorrar para la educación de tus hijos, planificar tu jubilación o simplemente gestionar mejor tus ingresos y gastos, estoy aquí para ayudarte en cada paso del camino.
      </Paragraph>
    </Bio>
  </AboutSection>
);

export default AboutMe;
