import { FC, ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  backgroundColor?: string;
  height?: number;
  zIndex?: number;
  style?: string;
};

const Section: FC<Props> = ({
  children,
  backgroundColor = 'primary-bg-color',
  height,
  zIndex,
  style = '',
}) => {
  return (
    <section
      className={style ? style : 'w-full flex relative'}
      style={{
        height: height ? `${height}px` : '100%',
        backgroundColor: `var(--${backgroundColor})`,
        zIndex: zIndex || 1,
      }}
    >
      <div className="mx-auto my-auto max-w-screen-2xl w-full px-5 flex">
        {children}
      </div>
    </section>
  );
};

export default Section;
