import React from 'react';
import { processSteps } from '../utils/ProcessSteps';
import { ProcessSection, Title, ProcessList, ProcessItem, StepTitle, StepDescription, Step } from '../styles/ProcessStyles';

const Process = () => (
  <ProcessSection>
    <Title>Proceso de Trabajo</Title>
      <ProcessList>
        {processSteps.map((step, index) => (
          <ProcessItem key={index}>
            <Step>{step.number}</Step>
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </ProcessItem>
        ))}
      </ProcessList>
  </ProcessSection>
);

export default Process;
