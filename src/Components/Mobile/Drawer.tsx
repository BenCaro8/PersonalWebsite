import { FC, ReactNode } from 'react';
import styles from './styles/Drawer.scss';
import classNames from 'classnames';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
};

const Drawer: FC<Props> = ({ isOpen, onClose, children }) => {
  return (
    <div
      className={classNames(styles.drawerWrapper, {
        [styles.hidden]: !isOpen,
      })}
    >
      <div
        className={classNames(styles.drawerOverlay, {
          [styles.activeBackground]: isOpen,
        })}
        onClick={onClose}
      >
        <div
          className={classNames(styles.drawerContainer, {
            [styles.activeLeft]: isOpen,
          })}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Drawer;
