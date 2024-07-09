import styled from 'styled-components';

export const Hero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #f4f4f4;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: #333;
`;

export const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #666;
`;

export const CTAButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #007BFF;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
