'use client';

import Image from 'next/image';

import { CustomButton } from '@components';

const Hero = () => {
  const handleScroll = () => { }
  
  return (
    <div className='hero'>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title'>Find, book, rent a car—quick and super easy!</h1>
        <p className='hero__subtitle'>Streamline your car rental experience with our effortless booking process.</p>
        <CustomButton containerStyles='bg-primary-blue text-white rounded-full mt-10' title='Explore Cars' handleClick={handleScroll} />
      </div>

      <div className='hero__image-container'>
        <div className='hero__image'>
          <Image className='object-contain' src='/hero.png' alt='hero' fill />
        </div>
        <div className='hero__image-overlay' />
      </div>
    </div>
  );
};
export default Hero;
