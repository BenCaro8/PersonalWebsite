import { FC, useState } from 'react';
import styles from './styles/NavBarMobile.scss';

export type Option = {
  label: string;
  url?: string;
};

type Props = {
  options: Option[];
};

const NavBarMobile: FC<Props> = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className={styles.navFloatingButton} onClick={toggleMenu}>
        ☰
      </button>
    </>
  );
};

export default NavBarMobile;
