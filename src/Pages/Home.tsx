import { FC } from 'react';
import AnimatedBackground from '../Components/AnimatedBackground';
import Section from '../Components/Section';
import TypingAnimation from '../Components/TypingAnimation';
import styles from './styles/Home.scss';

const Home: FC = () => {
  return (
    <>
      <Section backgroundColor="primary-accent-color">
        <TypingAnimation text="Ben Caro: Software Engineer" />
        <img src="/public/self.png" className={styles.selfie} />
      </Section>
      <AnimatedBackground />
    </>
  );
};

export default Home;
