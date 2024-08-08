import { FC } from 'react';
import AnimatedBackground from '../Components/AnimatedBackground';
import Section from '../Components/Section';
import styles from './styles/Home.scss';

const Home: FC = () => {
  return (
    <>
      <Section backgroundColor="primary-accent-color" zIndex={10}>
        <div className={styles.title}>
          <span>Ben Caro: Software Engineer</span>
        </div>
        <img src="/public/self.png" className={styles.selfie} />
      </Section>

      <Section backgroundColor="primary-bg-color"></Section>
      <AnimatedBackground />
    </>
  );
};

export default Home;
