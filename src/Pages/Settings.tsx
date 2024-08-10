import { FC, useState, useEffect } from 'react';
import { ChromePicker, ColorResult } from 'react-color';
import AnimatedBackground, {
  ZIndexWrap,
} from '../Components/AnimatedBackground';
import Section from '../Components/Section';
import { useAppSelector, useAppDispatch } from '../store';
import {
  setColors,
  resetToDefaultTheme,
  setNumShapes,
} from '../stores/settings';
import { ColorState } from '../Utils/helpers';
import styles from './styles/Settings.scss';

const Settings: FC = () => {
  const isMobile = useAppSelector((state) => state.settings.isMobile);
  const colors = useAppSelector((state) => state.settings.colors);
  const numShapes = useAppSelector((state) => state.settings.numShapes);
  const [inputValue, setInputValue] = useState(numShapes.toString());
  const dispatch = useAppDispatch();

  const onColorChange = (color: ColorResult, property: keyof ColorState) => {
    dispatch(setColors({ [property]: color.hex }));
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (
      /^\d*$/.test(value) &&
      (parseInt(value) || 1) <= (isMobile ? 35 : 100)
    ) {
      setInputValue(value);
    }
  };

  const handleApplyClick = () => {
    const newCount = parseInt(inputValue);
    if (!isNaN(newCount)) {
      dispatch(setNumShapes(newCount));
    }
  };

  useEffect(() => {
    setInputValue(numShapes.toString());
  }, [numShapes]);

  return (
    <>
      <Section backgroundColor="primary-accent-color" height={200}>
        <ZIndexWrap>
          <div className={styles.title}>
            <span>Themes:</span>
          </div>
        </ZIndexWrap>
      </Section>
      <Section>
        <ZIndexWrap>
          <div className="text-white mt-10 mb-10">
            <div className="text-white mb-2">Background Color:</div>
            <ChromePicker
              color={colors['--primary-bg-color']}
              onChange={(color) => onColorChange(color, '--primary-bg-color')}
            />
          </div>
          <div className="text-white mt-10 mb-10">
            <div className="text-white mb-2">Accent Color:</div>

            <ChromePicker
              color={colors['--primary-accent-color']}
              onChange={(color) =>
                onColorChange(color, '--primary-accent-color')
              }
            />
          </div>
          <div className="mb-10">
            <div className="text-white flex flex-col mb-2">
              Number of Background Shapes:
            </div>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              className=" pl-2"
            />
            <button onClick={handleApplyClick} className="text-white ml-2">
              Apply
            </button>
          </div>
          <div className="mb-10">
            <button
              onClick={() => dispatch(resetToDefaultTheme())}
              className="text-white ml-2"
            >
              Reset
            </button>
          </div>
        </ZIndexWrap>
      </Section>
      <AnimatedBackground />
    </>
  );
};

export default Settings;
