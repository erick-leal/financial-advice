import React from 'react';
import { servicesData } from '../utils/ServiceData';
import { ServicesSection, Title, ServiceList, ServiceItem, ServiceTitle, ServiceDescription } from '../styles/ServicesStyles';

const Services = () => (
  <ServicesSection>
    <Title>Servicios</Title>
    <ServiceList>
        {servicesData.map((service, index) => (
          <ServiceItem key={index}>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
          </ServiceItem>
        ))}
      </ServiceList>
  </ServicesSection>
);

export default Services;
