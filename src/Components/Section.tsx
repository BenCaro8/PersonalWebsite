import { FC, ReactNode } from 'react';
import { ThemeColor } from '../Utils/types';
import classNames from 'classnames';

type Props = {
  children?: ReactNode;
  backgroundColor?: ThemeColor;
  height?: number;
  zIndex?: number;
  style?: string;
  center?: boolean;
  flexCol?: boolean;
};

const Section: FC<Props> = ({
  children,
  backgroundColor = 'primary-bg-color',
  height: heightParam,
  zIndex,
  style = '',
  center = false,
  flexCol = false,
}) => {
  const height = heightParam ? `${heightParam}px` : 'fit-content';

  return (
    <section
      className={classNames({
        [style]: !!style,
        'w-full flex relative': !style,
      })}
      style={{
        height,
        backgroundColor: `var(--${backgroundColor})`,
        zIndex: zIndex || undefined,
      }}
    >
      <div
        className={classNames(
          'mx-auto my-auto max-w-screen-2xl w-full px-5 flex',
          { 'place-content-center': center },
          { 'flex-col': flexCol },
        )}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
