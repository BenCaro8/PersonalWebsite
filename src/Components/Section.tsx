import { FC, ReactNode } from 'react';
import classNames from 'classnames';

type Props = {
  children?: ReactNode;
  backgroundColor?: string;
  height?: number;
  zIndex?: number;
  style?: string;
  fitContent?: boolean;
};

const Section: FC<Props> = ({
  children,
  backgroundColor = 'primary-bg-color',
  height: heightParam,
  zIndex,
  style = '',
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
      <div className="mx-auto my-auto max-w-screen-2xl w-full px-5 flex">
        {children}
      </div>
    </section>
  );
};

export default Section;
