import { FC } from 'react';
import NavBar from './Components/NavBar';
import styles from './styles/App.scss';

const App: FC = () => {
  return (
    <div className={styles.appContainer}>
      <NavBar />
      <div>
        <div className={styles.title}>Ben Caro: Software Engineer</div>
        <div
          className={
            'border-[10px] border-solid border-red-800 rounded-full w-[400px] h-[400px] flex items-center justify-center text-center text-4xl'
          }
        >
          Tailwind Works!
        </div>
      </div>
    </div>
  );
};

export default App;
