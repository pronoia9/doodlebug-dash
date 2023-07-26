'use client';
import Image from 'next/image';
import { CustomButtonProps } from '@types';

const CustomButton = ({ isDisabled, btnType, containerStyles, textStyles, title, rightIcon, handleClick }: CustomButtonProps) => {
  return (
    <button className={`custom-btn ${containerStyles}`} disabled={isDisabled} type={btnType || 'button'} onClick={handleClick}>
      CustomButton
    </button>
  );
};
export default CustomButton;
