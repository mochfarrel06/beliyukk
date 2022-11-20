import React from 'react';
import ButtonHomeProps from '../interfaces/ButtonHomeProps';

const ButtonHome: React.FC<ButtonHomeProps> = ({ width, text, color, radius, textColor, border, borderColor, type = 'button' }) => {
  return (
    <button type={type} className={`w-[${width}px] h-[62px] $ ${color} rounded-[20px] py-5 px-[30px] ${textColor} font-semibold border-solid ${border} ${borderColor}`}>
      {text}
    </button>
  );
};

export default ButtonHome;
