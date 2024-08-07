import { FC } from 'react';
import AnimatedBackground, {
  ZIndexWrap,
} from '../Components/AnimatedBackground';
import Section from '../Components/Section';
import Settings from '../Components/Settings';
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

      <Section backgroundColor="primary-bg-color">
        <ZIndexWrap>
          <Settings />
        </ZIndexWrap>
      </Section>
      <AnimatedBackground />
    </>
  );
};

export default Home;
