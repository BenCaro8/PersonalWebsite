import { FC, useState, useEffect } from 'react';
import NavBar, { Option as NavBarOption } from './Components/NavBar';
import AnimatedBackground from './Components/AnimatedBackground';
import Section from './Components/Section';
import Settings from './Components/Settings';
import styles from './styles/App.scss';

const navBarOptions: NavBarOption[] = [
  {
    label: 'Home',
  },
  {
    label: 'About',
  },
  {
    label: 'Resume',
  },
  {
    label: 'Projects',
  },
];

const App: FC = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  // TODO: Add this to context or something better...
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const isMobile = width <= 959;

  return (
    <div className={styles.appContainer}>
      <NavBar options={navBarOptions} />
      <Section backgroundColor="primary-accent-color" zIndex={8}>
        <div className={styles.title}>
          <span>Ben Caro: Software Engineer</span>
        </div>
        <img src="./self.png" className={styles.selfie} />
      </Section>
      <Section backgroundColor="primary-bg-color">
        <Settings />
      </Section>
      <AnimatedBackground />
    </div>
  );
};

export default App;
