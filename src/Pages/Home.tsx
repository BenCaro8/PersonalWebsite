import { FC } from 'react';
import AnimatedBackground from '../Components/AnimatedBackground';
import Section from '../Components/Section';
import styles from './styles/Home.scss';

const Home: FC = () => {
  return (
    <>
      <Section backgroundColor="primary-accent-color">
        <div className={styles.title}>
          <span>Ben Caro: Software Engineer</span>
        </div>
        <img src="/public/self.png" className={styles.selfie} />
      </Section>
      <AnimatedBackground />
    </>
  );
};

export default Home;
