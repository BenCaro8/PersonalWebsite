import { FC } from 'react';
import AnimatedBackground from '../Components/AnimatedBackground';
import Section from '../Components/Section';
import styles from './styles/InProgress.scss';

const InProgress: FC = () => {
  return (
    <div className="mt-auto mb-auto">
      <Section backgroundColor="primary-accent-color" center flexCol>
        <div className={styles.title}>
          <span>In Progress</span>
        </div>
      </Section>
      <AnimatedBackground />
    </div>
  );
};

export default InProgress;
