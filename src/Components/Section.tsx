import { FC, ReactNode } from 'react';
import { ThemeColor } from '../Utils/types';
import classNames from 'classnames';
import styles from './styles/Section.scss';

type BackgroundColor = ThemeColor | 'white';

type Props = {
  children?: ReactNode;
  backgroundColor?: BackgroundColor;
  height?: number;
  zIndex?: number;
  style?: string;
  center?: boolean;
  flexCol?: boolean;
  showAnimatedBackground?: boolean;
  divisionBar?: boolean;
};

const Section: FC<Props> = ({
  children,
  backgroundColor = 'primary-bg-color',
  height: heightParam,
  zIndex = 10,
  style = '',
  center = false,
  flexCol = false,
  showAnimatedBackground = false,
  divisionBar = false,
}) => {
  const height = heightParam ? `${heightParam}px` : 'fit-content';

  return (
    <>
      <section
        className={classNames({
          [style]: !!style,
          [styles.section]: !style,
        })}
        style={{
          height,
          backgroundColor:
            backgroundColor === 'white'
              ? backgroundColor
              : `var(--${backgroundColor})`,
          zIndex: showAnimatedBackground ? 'auto' : zIndex,
        }}
      >
        <div
          className={classNames(styles.contentWrapper, {
            'place-content-center': center,
            'flex-col': flexCol,
          })}
        >
          {children}
        </div>
      </section>
      {divisionBar && <div className={styles.divisionBar} />}
    </>
  );
};

export default Section;
