import { FC, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar, { Option as NavBarOption } from './Components/NavBar';
import NavBarMobile from './Components/Mobile/NavBarMobile';
import Footer from './Components/Footer';
import Section from './Components/Section';
import Home from './Pages/Home';
import InProgress from './Pages/InProgress';
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
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 959);

  const handleWindowSizeChange = () => {
    setIsMobile(window.innerWidth <= 959);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  // TODO: Create and add Mobile Component
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const NavBarComponent = isMobile ? (
    <NavBarMobile options={navBarOptions} />
  ) : (
    <NavBar options={navBarOptions} />
  );

  return (
    <BrowserRouter>
      <div className={styles.appContainer}>
        <NavBar options={navBarOptions} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<InProgress />} />
          <Route
            path="/resume"
            element={
              <Section>
                <AnimatedBackground>
                  <img src="/public/Resume.jpg" className={styles.resume} />
                </AnimatedBackground>
              </Section>
            }
          />
          <Route path="/projects" element={<InProgress />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
