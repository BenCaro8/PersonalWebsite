import { FC } from 'react';
import AnimatedBackground, {
  ZIndexWrap,
} from '../Components/AnimatedBackground';
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
      <Section center>
        <ZIndexWrap>
          <img src="/public/Resume.jpg" className={styles.resume} />
        </ZIndexWrap>
        <AnimatedBackground />
      </Section>
    </>
  );
};

export default Resume;
