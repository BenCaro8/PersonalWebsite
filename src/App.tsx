import { FC, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar, { Option as NavBarOption } from './Components/NavBar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import styles from './styles/App.scss';
import Section from './Components/Section';

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
                <embed
                  src={`${
                    process.env.NODE_ENV === 'production' ? './public' : '.'
                  }/Resume.pdf`}
                  type="application/pdf"
                  height="100%"
                  width="100%"
                />
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
