import { FC, ReactNode } from 'react';
import { ThemeColor } from '../Utils/types';
import styles from './styles/Card.scss';
import classNames from 'classnames';

type Props = {
  children?: ReactNode;
  imgSrc?: string;
  imgRight?: boolean;
  center?: boolean;
  color?: string;
  backgroundColor?: ThemeColor | 'white' | 'none';
  borderColor?: ThemeColor | 'white';
  borderWidth?: number;
  borderRadius?: number;
};

const Card: FC<Props> = ({
  children,
  imgSrc,
  center = false,
  imgRight = false,
  color = 'white',
  backgroundColor = 'none',
  borderColor,
  borderWidth = 3,
  borderRadius = 0,
}) => {
  return (
    <>
      {!imgRight && imgSrc && (
        <img src={imgSrc} className={classNames(styles.pic, '-mr-5')} />
      )}
      <div
        className={styles.cardWrapper}
        style={{
          color,
          backgroundColor:
            backgroundColor === 'white'
              ? backgroundColor
              : `var(--${backgroundColor})`,
          borderColor:
            borderColor === 'white' ? borderColor : `var(--${borderColor})`,
          borderWidth: `${borderWidth}px`,
          borderRadius: `${borderRadius}px`,
        }}
      >
        <div
          className={classNames(styles.paragraph, {
            [styles.center]: center,
          })}
        >
          {children}
        </div>
      </div>
      {imgRight && imgSrc && (
        <img src={imgSrc} className={classNames(styles.pic, '-ml-5')} />
      )}
    </>
  );
};

export default Card;
