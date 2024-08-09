import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { themeColors, ThemeColor } from '../Utils/types';

export type ColorState = {
  [color in `--${ThemeColor}`]: string;
};

const getInitialColors = () => {
  const defaultColors: Partial<ColorState> = {};

  themeColors.map((themeColor) => {
    defaultColors[themeColor] = getComputedStyle(
      document.documentElement,
    ).getPropertyValue(themeColor);
  });

  return defaultColors;
};

type State = {
  isMobile: boolean;
  colors: Partial<ColorState>;
  numShapes: number;
};

const initialState: State = {
  isMobile: window.innerWidth <= 959,
  colors: getInitialColors(),
  numShapes: 15,
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setIsMobile: (state, action: PayloadAction<boolean>) => {
      state.isMobile = action.payload;
    },
    setColors: (state, action: PayloadAction<Partial<ColorState>>) => {
      state.colors = { ...state.colors, ...action.payload };
    },
    setNumShapes: (state, action: PayloadAction<number>) => {
      state.numShapes = action.payload;
    },
  },
});

export const { setIsMobile, setColors, setNumShapes } = settingsSlice.actions;

export default settingsSlice.reducer;
