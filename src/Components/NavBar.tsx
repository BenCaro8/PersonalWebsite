import { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Section from './Section';
import styles from './styles/NavBar.scss';
import classNames from 'classnames';

export type Option = {
  label: string;
  url?: string;
};

type Props = {
  options: Option[];
};

const NavBar: FC<Props> = ({ options }) => {
  const [topOfPage, setTopOfPage] = useState(window.scrollY === 0);
  const navBarHeight = 50;

  useEffect(() => {
    window.onscroll = () => setTopOfPage(window.scrollY === 0);
  }, []);

  return (
    <div>
      <Section
        style={classNames(styles.navContainer, {
          [styles.navBoxShadow]: !topOfPage,
        })}
        height={navBarHeight}
        zIndex={10}
      >
        {options.map((option, index) => {
          return (
            <Link
              key={index}
              className={styles.navLink}
              to={option?.url || '/'}
            >
              {option.label}
            </Link>
          );
        })}
      </Section>
      <Section height={navBarHeight} />
    </div>
  );
};

export default NavBar;
