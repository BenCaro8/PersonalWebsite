import { FC } from 'react';
import AnimatedBackground from '../Components/AnimatedBackground';
import Section from '../Components/Section';
import Settings from '../Components/Settings';
import styles from './styles/Home.scss';

const App: FC = () => {
  return (
    <>
      <Section backgroundColor="primary-accent-color" zIndex={8}>
        <div className={styles.title}>
          <span>Ben Caro: Software Engineer</span>
        </div>
        <img
          src={`${
            process.env.NODE_ENV === 'production' ? '/public' : ''
          }/self.png`}
          className={styles.selfie}
        />
      </Section>

      <Section backgroundColor="primary-bg-color">
        <AnimatedBackground>
          <Settings />
        </AnimatedBackground>
      </Section>
    </>
  );
};

export default App;
