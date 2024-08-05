import { FC, useState } from 'react';
import { ChromePicker, ColorResult } from 'react-color';

type ColorState = {
  [color: string]: string;
};

const Settings: FC = () => {
  const [colors, setColors] = useState<ColorState>({});

  const onColorChange = (color: ColorResult, property: string) => {
    setColors({ ...colors, [property]: color.hex });
    document.documentElement.style.setProperty(property, color.hex);
  };

  return (
    <div className="text-white mt-10 mb-10">
      Background Color:
      <ChromePicker
        color={colors['--primary-bg-color']}
        onChange={(color) => onColorChange(color, '--primary-bg-color')}
      />
      Accent Color:
      <ChromePicker
        color={colors['--primary-accent-color']}
        onChange={(color) => onColorChange(color, '--primary-accent-color')}
      />
    </div>
  );
};

export default Settings;
