import { configureStore } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import settingsReducer from './stores/settings';

const store = configureStore({
  reducer: {
    settings: settingsReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export default store;
