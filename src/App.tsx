import { FC, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar, { Option as NavBarOption } from './Components/NavBar';
import NavBarMobile from './Components/Mobile/NavBarMobile';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Resume from './Pages/Resume';
import InProgress from './Pages/InProgress';
import styles from './styles/App.scss';
import Settings from './Pages/Settings';

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
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<InProgress />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
        <Footer isMobile={isMobile} />
      </div>
    </BrowserRouter>
  );
};

export default App;
