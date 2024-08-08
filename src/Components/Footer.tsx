import { FC } from 'react';
import Section from './Section';
import styles from './styles/Footer.scss';

type Props = {
  isMobile: boolean;
};

const Footer: FC<Props> = ({ isMobile }) => {
  const footerHeight = isMobile ? 100 : 150;

  return (
    <>
      <Section
        style={styles.footerContainer}
        height={footerHeight}
        zIndex={10}
        backgroundColor="primary-accent-color"
        center
      >
        <a
          href="https://github.com/BenCaro8"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center mr-3"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            className="h-4 mr-1"
          />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/benjamin-c-caro/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center mr-3"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
            className="h-4 mr-1"
          />
          LinkedIn
        </a>
        <p>© 2024 Ben Caro</p>
      </Section>
      <Section height={footerHeight} />
    </>
  );
};

export default Footer;
