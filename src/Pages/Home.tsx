import { FC } from 'react';
import AnimatedBackground from '../Components/AnimatedBackground';
import Section from '../Components/Section';
import Title from '../Components/Title';
import styles from './styles/Home.scss';

const Home: FC = () => {
  return (
    <>
      <Section backgroundColor="primary-accent-color">
        <Title fontFamily="Gugi" size="large">
          Ben Caro: Software Engineer
        </Title>
        <img src="/public/self.png" className={styles.selfie} />
      </Section>
      <AnimatedBackground />
    </>
  );
};

export default Home;
