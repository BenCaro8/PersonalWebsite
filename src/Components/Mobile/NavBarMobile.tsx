import { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Section from '../Section';
import Drawer from './Drawer';
import Title from '../Title';
import styles from './styles/NavBarMobile.scss';
import classNames from 'classnames';

export type NavOption = {
  label: string;
  url: string;
};

type Props = {
  options: NavOption[];
};

const NavBarMobile: FC<Props> = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [topOfPage, setTopOfPage] = useState(window.scrollY === 0);
  const navBarHeight = 50;

  useEffect(() => {
    window.onscroll = () => setTopOfPage(window.scrollY < 20);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Section
        style={classNames(styles.navContainer, 'text-white content-center', {
          [styles.navBoxShadow]: !topOfPage,
        })}
        height={navBarHeight}
        zIndex={100}
      >
        <button className={styles.hamburger} onClick={toggleMenu}>
          ☰
        </button>
        <div className={styles.siteNameWrapper}>
          <Title size="small">Ben-Caro.com</Title>
        </div>
      </Section>
      <Section height={navBarHeight} />
      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {options.map((option, index) => {
          return (
            <Link
              key={index}
              className={styles.drawerOption}
              onClick={() => setIsOpen(false)}
              to={option.url}
            >
              {option.label}
              <svg viewBox="0 0 24 24" height="20px" width="20px">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
                  fill="var(--primary-accent-color)"
                />
              </svg>
            </Link>
          );
        })}
      </Drawer>
    </>
  );
};

export default NavBarMobile;
