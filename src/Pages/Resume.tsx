import { FC } from 'react';
import AnimatedBackground from '../Components/AnimatedBackground';
import Section from '../Components/Section';
import Title from '../Components/Title';
import styles from './styles/Resume.scss';

const Resume: FC = () => {
  return (
    <>
      <Section backgroundColor="primary-accent-color" center>
        <a href="/public/Resume.pdf" download>
          <Title fontFamily="Gugi" size="medium" center>
            Download Resume as PDF
          </Title>
        </a>
      </Section>
      <Section center showAnimatedBackground>
        <img src="/public/Resume.jpg" className={styles.resume} />
      </Section>
      <AnimatedBackground />
    </>
  );
};

export default Resume;
