import React from 'react';
import styled from 'styled-components';

const ProcessSection = styled.section`
  padding: 60px 20px;
  background-color: #f0f0f0;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const ProcessList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const ProcessItem = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
`;

const StepTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const StepDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;

const Process = () => (
  <ProcessSection>
    <Title>Proceso de Trabajo</Title>
    <ProcessList>
      <ProcessItem>
        <StepTitle>Paso 1: Consulta Inicial</StepTitle>
        <StepDescription>Nos reunimos para discutir tus necesidades y objetivos financieros.</StepDescription>
      </ProcessItem>
      <ProcessItem>
        <StepTitle>Paso 2: Análisis y Evaluación</StepTitle>
        <StepDescription>Analizamos tu situación financiera actual y evaluamos posibles estrategias.</StepDescription>
      </ProcessItem>
      <ProcessItem>
        <StepTitle>Paso 3: Plan Personalizado</StepTitle>
        <StepDescription>Desarrollamos un plan financiero personalizado basado en tus metas.</StepDescription>
      </ProcessItem>
      <ProcessItem>
        <StepTitle>Paso 4: Implementación</StepTitle>
        <StepDescription>Te ayudamos a implementar el plan y a hacer ajustes según sea necesario.</StepDescription>
      </ProcessItem>
    </ProcessList>
  </ProcessSection>
);

export default Process;
