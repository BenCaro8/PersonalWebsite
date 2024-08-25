import { FC, useState, useEffect } from 'react';
import Title from '../Components/Title';
import styles from './styles/TypingAnimation.scss';

type Props = {
  text: string;
  delay?: number;
};

const TypingAnimation: FC<Props> = ({ text, delay = 150 }) => {
  const [currIndex, setCurrIndex] = useState(0);
  const [displayCursor, setDisplayCursor] = useState(true);

  const getDelay = () => {
    const addition = Math.floor(Math.random() * 2) === 0;
    const deviation = Math.floor(Math.random() * Math.floor(delay * 0.7));
    console.log(deviation);
    return addition ? delay + deviation : delay - deviation;
  };

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (currIndex <= text.length) {
      timeout = setTimeout(() => {
        setCurrIndex((prevIndex) => prevIndex + 1);
      }, getDelay());
    } else {
      timeout = setTimeout(() => {
        setDisplayCursor(false);
      }, 2500);
    }

    return () => clearTimeout(timeout);
  }, [currIndex]);

  return (
    <>
      <Title fontFamily="Gugi" size="large">
        {text.slice(0, currIndex)}
        {displayCursor && <div className={styles.typingCursor} />}
      </Title>
    </>
  );
};

export default TypingAnimation;
