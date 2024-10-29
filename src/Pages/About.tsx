import { FC } from 'react';
import AnimatedBackground from '../Components/AnimatedBackground';
import Section from '../Components/Section';
import Title from '../Components/Title';
import Card from '../Components/Card';

const About: FC = () => {
  return (
    <>
      <Section
        backgroundColor="primary-gradient-color"
        gradient="secondary-accent-color"
        showAnimatedBackground
        style="py-7"
        flexCol
      >
        <Title fontFamily="Gugi" size="large">
          About Me
        </Title>
        <Section style="py-5" center backgroundColor="none">
          <Card
            imgSrc="https://hips.hearstapps.com/hmg-prod/images/saratoga-springs-new-york-royalty-free-image-1633267021.jpg"
            imgRight
            backgroundColor="primary-accent-color"
            borderWidth={0}
            borderRadius={10}
          >
            <p>I&apos;m originally from Saratoga Springs, NY.</p>
            <p>
              I attended SUNY Oswego and graduated in December 2019 with a BA in
              Computer Science.
            </p>
          </Card>
        </Section>
      </Section>
      <Section showAnimatedBackground style="py-7" flexCol>
        <Section style="py-5" center backgroundColor="none">
          <Card
            imgSrc="https://pngimg.com/d/keyboard_PNG101845.png"
            backgroundColor="secondary-accent-color"
            borderWidth={0}
            borderRadius={10}
          >
            I love programming and dabble in most everything from game
            programming, shader development, all the way to my professional
            skills in the front-end tech stack using Typescript and React!
          </Card>
        </Section>
      </Section>
      <Section
        backgroundColor="secondary-accent-color"
        gradient="primary-gradient-color"
        showAnimatedBackground
        style="py-7"
        flexCol
      >
        <Section style="py-5" center backgroundColor="none">
          <Card
            imgSrc="https://upload.wikimedia.org/wikipedia/commons/e/ea/Docker_%28container_engine%29_logo_%28cropped%29.png"
            imgRight
            backgroundColor="primary-accent-color"
            borderWidth={0}
            borderRadius={10}
          >
            <p>
              I also enjoy all parts of the stack; back-end and dev-ops
              included.
            </p>
            <p>Shout out to AWS, Docker and Kubernetes!</p>
          </Card>
        </Section>
      </Section>
      <AnimatedBackground />
    </>
  );
};

export default About;
