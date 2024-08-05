import { FC, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar, { Option as NavBarOption } from './Components/NavBar';
import Footer from './Components/Footer';
import Section from './Components/Section';
import Home from './Pages/Home';
import AnimatedBackground from './Components/AnimatedBackground';
import styles from './styles/App.scss';

const navBarOptions: NavBarOption[] = [
  {
    label: 'Home',
    url: '/',
  },
  {
    label: 'About',
    url: '/about',
  },
  {
    label: 'Resume',
    url: '/resume',
  },
  {
    label: 'Projects',
    url: '/projects',
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
    <BrowserRouter>
      <div className={styles.appContainer}>
        <NavBar options={navBarOptions} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Section />} />
          <Route
            path="/resume"
            element={
              <Section>
                <AnimatedBackground>
                  <img
                    src={`${
                      process.env.NODE_ENV === 'production' ? './public' : '.'
                    }/Resume.jpg`}
                    className={styles.resume}
                  />
                </AnimatedBackground>
              </Section>
            }
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
