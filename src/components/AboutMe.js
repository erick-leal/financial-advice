import React from 'react';
import { aboutMe } from '../utils/AboutMeData';
import { AboutSection, Title, Bio, Paragraph } from '../styles/AboutMeStyles';

const AboutMe = () => (
  <AboutSection>
    <Title>Sobre Mí</Title>
        <Bio>
            {aboutMe.map((text, index) => (
            <Paragraph>{text.description}</Paragraph>
            ))}
        </Bio>
  </AboutSection>
);

export default AboutMe;
