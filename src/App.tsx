import { FC } from 'react';
import styles from './styles/App.scss';

const App: FC = () => {
    return (
        <div>
            <div className={styles.title}>CSS module works!</div>
            <div
                className={
                    'border-[10px] border-solid border-red-800 rounded-full w-[200px] h-[200px] flex items-center justify-center text-center'
                }
            >
                Tailwind works!
            </div>
        </div>
    );
};

export default App;