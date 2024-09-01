import { FC } from 'react';
import AnimatedBackground from '../Components/AnimatedBackground';
import Section from '../Components/Section';
import Title from '../Components/Title';
import styles from './styles/Projects.scss';

const Projects: FC = () => {
  return (
    <div className="mt-auto mb-auto">
      <Section backgroundColor="primary-accent-color" flexCol>
        <Title fontFamily="Gugi" size="medium" center>
          This Website:
        </Title>
        <div className={styles.content}>
          Checkout the code for this website! It&apos;s public on my Github. You
          can clone it and use it as a base or take something from it you like,
          doesn&apos;t matter to me!
        </div>
        <div className={styles.content}>
          This website uses: React, Typescript, Redux, SCSS and Tailwind
        </div>
        <a
          href="https://github.com/BenCaro8/PersonalWebsite"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center mx-auto my-6 text-white font-bold"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            className="h-4 mr-1"
          />
          My Website&apos;s Github!
        </a>
      </Section>
      <AnimatedBackground />
    </div>
  );
};

export default Projects;
