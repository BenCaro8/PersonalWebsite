import { FC } from 'react';
import AnimatedBackground from '../Components/AnimatedBackground';
import Section from '../Components/Section';
import Card from '../Components/Card';
import TypingAnimation from '../Components/TypingAnimation';
import styles from './styles/Home.scss';

const Home: FC = () => {
  return (
    <>
      <Section backgroundColor="primary-accent-color">
        <TypingAnimation text="Ben Caro: Software Engineer" />
        <img src="/public/self.png" className={styles.selfie} />
      </Section>
      <div className="mt-auto mb-auto">
        <Section style="py-5" center showAnimatedBackground flexCol>
          <Card
            center
            title="About Me"
            borderWidth={0}
            borderRadius={10}
            backgroundColor="secondary-accent-color"
            gradient="primary-gradient-color"
            link="/about"
          >
            <p>Learn about me, my interests and professional experience!</p>
          </Card>
          <Card
            center
            title="My Résumé"
            borderWidth={0}
            borderRadius={10}
            backgroundColor="secondary-accent-color"
            link="/resume"
          >
            <p>
              My resume for anyone interested in what I&apos;ve done
              professionally in a concise format.
            </p>
          </Card>
          <Card
            center
            title="Projects"
            borderWidth={0}
            borderRadius={10}
            backgroundColor="primary-gradient-color"
            gradient="secondary-accent-color"
            link="/projects"
          >
            <p>
              Take a look at the projects that I&apos;ve done and am currently
              working on.
            </p>
          </Card>
          <Card
            center
            title="Themes"
            borderWidth={0}
            borderRadius={10}
            backgroundColor="primary-accent-color"
            link="/themes"
          >
            <p>
              Change the look of this website by playing around with the themes.
            </p>
          </Card>
        </Section>
      </div>
      <AnimatedBackground />
    </>
  );
};

export default Home;
