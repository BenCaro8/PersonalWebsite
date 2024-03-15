import { FC } from 'react';
import styles from './styles/App.scss';

const App: FC = () => {
  return (
    <div>
      <div className={styles.title}>CSS module works!</div>
      <div
        className={
          'border-[10px] border-solid border-red-800 rounded-full w-[400px] h-[400px] flex items-center justify-center text-center text-4xl'
        }
      >
        Tailwind Works!
      </div>
    </div>
  );
};

export default App;
