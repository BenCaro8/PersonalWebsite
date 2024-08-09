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
  colors: Partial<ColorState>;
};

const initialState: State = {
  colors: getInitialColors(),
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setColors: (state, action: PayloadAction<Partial<ColorState>>) => {
      state.colors = { ...state.colors, ...action.payload };
    },
  },
});

export const { setColors } = settingsSlice.actions;

export default settingsSlice.reducer;
