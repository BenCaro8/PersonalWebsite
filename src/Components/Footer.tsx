import { FC } from 'react';
import Section from './Section';
import styles from './styles/Footer.scss';

const NavBar: FC = () => {
  const footerHeight = 150;

  return (
    <>
      <Section
        style={styles.footerContainer}
        height={footerHeight}
        zIndex={10}
        backgroundColor="primary-accent-color"
      />
      <div style={{ height: footerHeight, marginTop: '50px' }} />
    </>
  );
};

export default NavBar;
