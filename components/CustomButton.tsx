'use client';

import Image from 'next/image';

import { CustomButtonProps } from '@types';

const Button = ({ isDisabled, btnType, containerStyles, textStyles, title, rightIcon, handleClick }: CustomButtonProps) => (
  <button className={`custom-btn ${containerStyles}`} type={btnType || 'button'} disabled={isDisabled} onClick={handleClick}>
    <span className={`flex-1 ${textStyles}`}>{title}</span>
    {rightIcon && (
      <div className='relative w-6 h-6'>
        <Image className='object-contain' src={rightIcon} alt='arrow_left' fill />
      </div>
    )}
  </button>
);

export default Button;
