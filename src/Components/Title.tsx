import { FC, ReactNode } from 'react';
import { ThemeColor } from '../Utils/types';
import styles from './styles/Title.scss';
import classNames from 'classnames';

type Props = {
  children?: ReactNode;
  color?: string;
  center?: boolean;
  backgroundColor?: ThemeColor | 'white';
  size?: 'large' | 'medium' | 'small';
  fontFamily?: string;
};

const Title: FC<Props> = ({
  children,
  color = 'white',
  center = false,
  backgroundColor,
  size = 'large',
  fontFamily = 'Arial, Helvetica, sans-serif',
}) => {
  return (
    <div
      className={classNames(styles.title, {
        [styles.titleLarge]: size === 'large',
        [styles.titleMedium]: size === 'medium',
        [styles.titleSmall]: size === 'small',
        [styles.center]: center,
      })}
      style={{
        fontFamily,
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
