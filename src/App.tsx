import { FC, Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import NavBar from './Components/NavBar';
import NavBarMobile from './Components/Mobile/NavBarMobile';
import Footer from './Components/Footer';
import { useAppSelector, useAppDispatch } from './store';
import {
  setIsMobile,
  setDefaultColors,
  setInitialTheme,
} from './stores/settings';
import { navOptions } from './Utils/types';
import styles from './styles/App.scss';

const Home = lazy(() => import('./Pages/Home'));
const Resume = lazy(() => import('./Pages/Resume'));
const Themes = lazy(() => import('./Pages/Themes'));
const About = lazy(() => import('./Pages/About'));
const Projects = lazy(() => import('./Pages/Projects'));
const Three = lazy(() => import('./Components/Three'));

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

  const NavBarComponent = isMobile ? (
    <NavBarMobile options={navOptions} />
  ) : (
    <NavBar options={navOptions} />
  );

  return (
    <BrowserRouter basename="/">
      <div className={styles.appContainer}>
        {NavBarComponent}
        <Suspense
          fallback={
            <FormattedMessage
              id="App.pageLoading"
              defaultMessage="Page is Loading..."
            />
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/themes" element={<Themes />} />
            <Route path="/three" element={<Three />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
