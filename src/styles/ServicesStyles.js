import styled from 'styled-components';

export const ServicesSection = styled.section`
  padding: 60px 20px;
  background-color: #f9f9f9;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

export const ServiceList = styled.ul`
  display: contents;
  list-style: none;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

export const ServiceItem = styled.li`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
`;

export const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

export const ServiceDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;
