import { FC, useState, useEffect } from 'react';
import { ChromePicker, ColorResult } from 'react-color';
import AnimatedBackground, {
  ZIndexWrap,
} from '../Components/AnimatedBackground';
import Section from '../Components/Section';
import { themeColors } from '../Utils/types';
import styles from './styles/Settings.scss';

type ColorState = {
  [color in (typeof themeColors)[number]]?: string;
};

const Settings: FC = () => {
  const [numShapes, setNumShapes] = useState(15);
  const [colors, setColors] = useState<ColorState>({});
  const [inputValue, setInputValue] = useState(numShapes.toString());

  useEffect(() => {
    const defaultColors: ColorState = {};

    themeColors.map((themeColor) => {
      defaultColors[themeColor] = getComputedStyle(
        document.documentElement,
      ).getPropertyValue(themeColor);
    });

    setColors(defaultColors);
  }, []);

  const onColorChange = (color: ColorResult, property: string) => {
    setColors({ ...colors, [property]: color.hex });
    document.documentElement.style.setProperty(property, color.hex);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (/^\d*$/.test(value) && (parseInt(value) || 1) < 300) {
      setInputValue(value);
    }
  };

  const handleApplyClick = () => {
    const newCount = parseInt(inputValue);
    if (!isNaN(newCount)) {
      setNumShapes(newCount);
    }
  };

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
            Background Color:
            <ChromePicker
              color={colors['--primary-bg-color']}
              onChange={(color) => onColorChange(color, '--primary-bg-color')}
            />
            Accent Color:
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
        </ZIndexWrap>
      </Section>
      <AnimatedBackground numShapes={numShapes} />
    </>
  );
};

export default Settings;
