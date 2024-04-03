import { FC } from 'react';
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
      <Section
        customStyle={styles.navContainer}
        height={navBarHeight}
        zIndex={10}
      >
        {options.map((option, index) => {
          return (
            <a key={index} className={styles.navLink}>
              {option.label}
            </a>
          );
        })}
      </Section>
      <Section height={navBarHeight} />
    </div>
  );
};

export default NavBar;
