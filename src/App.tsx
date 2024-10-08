import { FC, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar, { NavOption as NavBarOption } from './Components/NavBar';
import NavBarMobile from './Components/Mobile/NavBarMobile';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Resume from './Pages/Resume';
import Themes from './Pages/Themes';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Three from './Components/Three';
import { useAppSelector, useAppDispatch } from './store';
import {
  setIsMobile,
  setDefaultColors,
  setInitialTheme,
} from './stores/settings';
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
  const isMobile = useAppSelector((state) => state.settings.isMobile);
  const dispatch = useAppDispatch();

  const handleWindowSizeChange = () => {
    const newSizeIsMobile = window.innerWidth <= 959;
    if (isMobile != newSizeIsMobile) {
      dispatch(setIsMobile(newSizeIsMobile));
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, [isMobile]);

  useEffect(() => {
    dispatch(setDefaultColors());
    dispatch(setInitialTheme());
  }, []);

  // TODO: Create and add Mobile Component
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const NavBarComponent = isMobile ? (
    <NavBarMobile options={navBarOptions} />
  ) : (
    <NavBar options={navBarOptions} />
  );

  return (
    <BrowserRouter basename="/">
      <div className={styles.appContainer}>
        {NavBarComponent}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/themes" element={<Themes />} />
          <Route path="/three" element={<Three />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
