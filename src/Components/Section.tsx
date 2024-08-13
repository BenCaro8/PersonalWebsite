import { FC, ReactNode } from 'react';
import { ThemeColor } from '../Utils/types';
import classNames from 'classnames';
import styles from './styles/Section.scss';

type Props = {
  children?: ReactNode;
  backgroundColor?: ThemeColor;
  height?: number;
  zIndex?: number;
  style?: string;
  center?: boolean;
  flexCol?: boolean;
  showAnimatedBackground?: boolean;
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
}) => {
  const height = heightParam ? `${heightParam}px` : 'fit-content';

  return (
    <section
      className={classNames({
        [style]: !!style,
        [styles.section]: !style,
      })}
      style={{
        height,
        backgroundColor: `var(--${backgroundColor})`,
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
  );
};

export default Section;
