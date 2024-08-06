import { FC, useState, useEffect, ReactNode } from 'react';
import styles from './styles/AnimatedBackground.scss';

type Props = {
  children?: ReactNode;
};

const AnimatedBackground: FC<Props> = ({ children }) => {
  const [svgElements, setSvgElements] = useState<ReactNode[]>([]);

  const generateSvgsForAnim = (num: number): ReactNode[] => {
    const svgs = [];
    for (let i = 0; i < num; i++) {
      const animationName = `raise${i}`;
      const scale = Math.floor(Math.random() * 2) - 0.4;
      const left = `${Math.floor(Math.random() * 120) - 20}%`;
      const animation = `${animationName} ${
        6 + Math.floor(Math.random() * 15)
      }s linear infinite`;
      const animationDelay = `${Math.floor(Math.random() * 5) - 5}s`;
      const transform = `scale(${0.3 * (i % 10) - 0.6}) rotate(${Math.floor(
        Math.random() * 360,
      )}deg)`;
      const filter = `blur(${(i % 10) - 6}px)`;
      const keyframes = `
        @keyframes ${animationName} {
          to {
            bottom: 150vh;
            transform: 
            scale(${0.3 * (i % 10) - 0.6}) 
            rotate(${Math.random() * 360}deg);
          }
        }
      `;
      const svg = (
        <svg
          key={i}
          className={styles.svg}
          xmlns="http://www.w3.org/2000/svg"
          style={{
            scale,
            left,
            animation,
            animationDelay,
            transform,
            filter,
          }}
        >
          <path
            d="m2.46177,126.39581c10.12618,-0.06577 20.25237,-0.13151 30.37857,-0.19726c0.06666,-10.3997 0.13333,-20.7994 0.19999,-31.19908c10.07782,0 20.15564,0 30.23346,0c0,-10.46351 0,-20.927 0,-31.39051c10.33589,0 20.67178,0 31.00767,0c0,-10.20827 0,-20.41656 0,-30.62485c10.20829,0 20.41656,0 30.62485,0c0,-10.20829 0,-20.41658 0,-30.62487c15.18483,0 30.36965,0 45.55448,0c0,5.10414 0,10.20829 0,15.31243c-10.08071,0 -20.16136,0 -30.24206,0c0,10.33589 0,20.67178 0,31.00769c-10.20829,0 -20.41656,0 -30.62485,0c0,10.33589 0,20.67178 0,31.00767c-10.20829,0 -20.41656,0 -30.62485,0c0,10.33591 0,20.6718 0,31.00767c-10.33589,0 -20.67178,0 -31.00767,0c0,10.46351 0,20.927 0,31.39049c-15.31243,0 -30.62485,0 -45.93728,0c0.68263,-5.07223 -1.16374,-10.79174 0.43769,-15.68938l0,0z"
            strokeWidth="7"
            fill="none"
          />
        </svg>
      );
      svgs.push(svg);
      const styleSheet = document.styleSheets[0];
      (styleSheet as CSSStyleSheet).insertRule(
        keyframes,
        (styleSheet as CSSStyleSheet).cssRules.length,
      );
    }
    return svgs;
  };

  useEffect(() => {
    setSvgElements(generateSvgsForAnim(15));
  }, []);

  console.log(svgElements);

  return (
    <div className="w-full">
      <div className={styles.childZIndex}>{children}</div>
      <div className={styles.svgWrap}>{svgElements.map((elem) => elem)}</div>
    </div>
  );
};

export default AnimatedBackground;
