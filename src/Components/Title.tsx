import { FC, ReactNode } from 'react';
import { ThemeColor } from '../Utils/types';
import styles from './styles/Title.scss';

type Props = {
  children?: ReactNode;
  color?: string;
  backgroundColor?: ThemeColor | 'white';
  fontSize?: number;
  fontFamily?: string;
};

const Title: FC<Props> = ({
  children,
  color = 'white',
  backgroundColor,
  fontSize = 60,
  fontFamily = 'Arial, Helvetica, sans-serif',
}) => {
  return (
    <div
      className={styles.title}
      style={{
        fontFamily,
        fontSize: `${fontSize}px`,
        color,
        backgroundColor:
          backgroundColor === 'white'
            ? backgroundColor
            : `var(--${backgroundColor})`,
      }}
    >
      <span>{children}</span>
    </div>
  );
};

export default Title;
