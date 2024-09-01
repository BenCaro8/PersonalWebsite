import { FC } from 'react';
import AnimatedBackground from '../Components/AnimatedBackground';
import Section from '../Components/Section';
import Card from '../Components/Card';
import Title from '../Components/Title';
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
        <Section style="py-5" center showAnimatedBackground>
          <Card
            center
            borderWidth={1}
            borderRadius={10}
            backgroundColor="primary-bg-color"
            imgSrc="https://cdn-icons-png.flaticon.com/512/8743/8743996.png"
          >
            <Title size="medium" center>
              Explore my website!
            </Title>
            <p>(This is a placeholder)</p>
          </Card>
        </Section>
      </div>
      <AnimatedBackground />
    </>
  );
};

export default Home;
