import { FC } from 'react';
import AnimatedBackground from '../Components/AnimatedBackground';
import Section from '../Components/Section';
import styles from './styles/Resume.scss';

const Resume: FC = () => {
  return (
    <>
      <Section backgroundColor="primary-accent-color" center>
        <a className={styles.title} href="/public/Resume.pdf" download>
          Download Resume as PDF
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
