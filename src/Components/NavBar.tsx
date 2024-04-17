import { FC } from 'react';
import { Link } from 'react-router-dom';
import Section from './Section';
import styles from './styles/NavBar.scss';

export type Option = {
  label: string;
  url?: string;
};

type Props = {
  options: Option[];
};

const NavBar: FC<Props> = ({ options }) => {
  const navBarHeight = 50;

  return (
    <div>
      <Section style={styles.navContainer} height={navBarHeight} zIndex={10}>
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
