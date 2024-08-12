import { ReactElement, CSSProperties, cloneElement } from 'react';
import { themeColors, ThemeColor } from './types';

export const shapes = ['squiggle', 'square', 'triangle', 'x'] as const;

type Shape = (typeof shapes)[number];

type ShapeMap = {
  [shape in Shape]: { svg: ReactElement; fill: boolean };
};

const shapeMap: ShapeMap = {
  squiggle: {
    svg: (
      <svg>
        <path
          d="m2.46177,126.39581c10.12618,-0.06577 20.25237,-0.13151 30.37857,-0.19726c0.06666,-10.3997 0.13333,-20.7994 0.19999,-31.19908c10.07782,0 20.15564,0 30.23346,0c0,-10.46351 0,-20.927 0,-31.39051c10.33589,0 20.67178,0 31.00767,0c0,-10.20827 0,-20.41656 0,-30.62485c10.20829,0 20.41656,0 30.62485,0c0,-10.20829 0,-20.41658 0,-30.62487c15.18483,0 30.36965,0 45.55448,0c0,5.10414 0,10.20829 0,15.31243c-10.08071,0 -20.16136,0 -30.24206,0c0,10.33589 0,20.67178 0,31.00769c-10.20829,0 -20.41656,0 -30.62485,0c0,10.33589 0,20.67178 0,31.00767c-10.20829,0 -20.41656,0 -30.62485,0c0,10.33591 0,20.6718 0,31.00767c-10.33589,0 -20.67178,0 -31.00767,0c0,10.46351 0,20.927 0,31.39049c-15.31243,0 -30.62485,0 -45.93728,0c0.68263,-5.07223 -1.16374,-10.79174 0.43769,-15.68938l0,0z"
          strokeWidth="7"
          fill="none"
        />
      </svg>
    ),
    fill: false,
  },
  square: {
    svg: (
      <svg
        height="200px"
        width="200px"
        viewBox="-95.7 -95.7 521.40 521.40"
        strokeWidth="15"
      >
        <path
          d="M315,0H15C6.716,0,0,6.716,0,15v300c0,8.284,6.716,15,15,15h300c8.284,0,15-6.716,15-15V15 C330,6.716,323.285,0,315,0z M300,300H30V30h270V300z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    fill: false,
  },
  triangle: {
    svg: (
      <svg height="200px" width="200px" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.0001 5.94363L4.76627 18H19.2339L12.0001 5.94363ZM10.7138 4.20006C11.2964 3.22905 12.7037 3.22905 13.2863 4.20006L21.4032 17.7282C22.0031 18.728 21.2829 20 20.117 20H3.88318C2.71724 20 1.99706 18.728 2.59694 17.7282L10.7138 4.20006Z"
          fill="none"
        />
      </svg>
    ),
    fill: false,
  },
  x: {
    svg: (
      <svg height="100px" width="100px" viewBox="0 0 25 25">
        <g
          stroke="none"
          strokeWidth="1"
          fillRule="evenodd"
          transform="translate(-467.000000, -1039.000000)"
        >
          <path
            d="M489.396,1061.4 C488.614,1062.18 487.347,1062.18 486.564,1061.4 L479.484,1054.32 L472.404,1061.4 C471.622,1062.18 470.354,1062.18 469.572,1061.4 C468.79,1060.61 468.79,1059.35 469.572,1058.56 L476.652,1051.48 L469.572,1044.4 C468.79,1043.62 468.79,1042.35 469.572,1041.57 C470.354,1040.79 471.622,1040.79 472.404,1041.57 L479.484,1048.65 L486.564,1041.57 C487.347,1040.79 488.614,1040.79 489.396,1041.57 C490.179,1042.35 490.179,1043.62 489.396,1044.4 L482.316,1051.48 L489.396,1058.56 C490.179,1059.35 490.179,1060.61 489.396,1061.4 L489.396,1061.4 Z M485.148,1051.48 L490.813,1045.82 C492.376,1044.26 492.376,1041.72 490.813,1040.16 C489.248,1038.59 486.712,1038.59 485.148,1040.16 L479.484,1045.82 L473.82,1040.16 C472.257,1038.59 469.721,1038.59 468.156,1040.16 C466.593,1041.72 466.593,1044.26 468.156,1045.82 L473.82,1051.48 L468.156,1057.15 C466.593,1058.71 466.593,1061.25 468.156,1062.81 C469.721,1064.38 472.257,1064.38 473.82,1062.81 L479.484,1057.15 L485.148,1062.81 C486.712,1064.38 489.248,1064.38 490.813,1062.81 C492.376,1061.25 492.376,1058.71 490.813,1057.15 L485.148,1051.48 L485.148,1051.48 Z"
            id="cross"
          />
        </g>
      </svg>
    ),
    fill: true,
  },
};

export const getSvg = (
  shape: Shape,
  index: number,
  className: string,
  style: CSSProperties,
  color: ThemeColor | string | 'none' = 'primary-accent-color',
): ReactElement => {
  const svgElement = shapeMap[shape].svg;

  color = themeColors.includes(`--${color}` as (typeof themeColors)[number])
    ? `var(--${color})`
    : color;

  const clonedSvg = cloneElement(svgElement, {
    key: index,
    className,
    style: { ...style, stroke: color },
  });

  const clonedPath = cloneElement(svgElement.props.children, {
    fill: shapeMap[shape].fill ? color : 'none',
  });

  return cloneElement(clonedSvg, {}, clonedPath);
};
