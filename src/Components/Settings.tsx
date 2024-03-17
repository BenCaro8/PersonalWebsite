import { FC, useState } from 'react';
import { SketchPicker, ColorChangeHandler } from 'react-color';

const NavBar: FC = () => {
  const [backgroundColor, setBackgroundColor] = useState('#181a1b');

  const onColorChange: ColorChangeHandler = (color) => {
    setBackgroundColor(color.hex);
  };

  return <SketchPicker color={backgroundColor} onChange={onColorChange} />;
};

export default NavBar;
