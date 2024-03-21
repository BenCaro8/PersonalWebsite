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
  return (
    <div className={styles.navContainer}>
      <Section>
        {options.map((option, index) => {
          return (
            <a key={index} className={styles.navLink}>
              {option.label}
            </a>
          );
        })}
      </Section>
    </div>
  );
};

export default NavBar;
