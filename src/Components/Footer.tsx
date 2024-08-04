import { FC } from 'react';
import Section from './Section';
import styles from './styles/Footer.scss';

const Footer: FC = () => {
  const footerHeight = 150;

  return (
    <>
      <Section
        style={styles.footerContainer}
        height={footerHeight}
        zIndex={10}
        backgroundColor="primary-accent-color"
      />
      <Section height={footerHeight} />
    </>
  );
};

export default Footer;
