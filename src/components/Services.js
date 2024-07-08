import React from 'react';
import styled from 'styled-components';

const ServicesSection = styled.section`
  padding: 60px 20px;
  background-color: #f9f9f9;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const ServiceList = styled.ul`
  list-style: none;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const ServiceItem = styled.li`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;

const Services = () => (
  <ServicesSection>
    <Title>Servicios</Title>
    <ServiceList>
      <ServiceItem>
        <ServiceTitle>Planificación Financiera</ServiceTitle>
        <ServiceDescription>Te ayudamos a planificar tus finanzas personales y a alcanzar tus metas.</ServiceDescription>
      </ServiceItem>
      <ServiceItem>
        <ServiceTitle>Análisis de Flujos de Caja</ServiceTitle>
        <ServiceDescription>Analizamos tus ingresos y gastos para una mejor administración de tu dinero.</ServiceDescription>
      </ServiceItem>
      <ServiceItem>
        <ServiceTitle>Asesoramiento en Inversiones</ServiceTitle>
        <ServiceDescription>Recibe consejos sobre las mejores opciones de inversión para tu futuro.</ServiceDescription>
      </ServiceItem>
      <ServiceItem>
        <ServiceTitle>Creación de Plantillas de Excel</ServiceTitle>
        <ServiceDescription>Te proporcionamos plantillas personalizadas para el control de tus finanzas.</ServiceDescription>
      </ServiceItem>
    </ServiceList>
  </ServicesSection>
);

export default Services;
