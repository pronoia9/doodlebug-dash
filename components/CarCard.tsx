'use client';

import { useState } from 'react';
import Image from 'next/image';

import { CustomButton, CarDetails } from '.';
import { calculateCarRent, generateCarImageUrl } from '@utils';
import { CarProps } from '@types';

interface CarCardProps {
  car: CarProps;
}
const CarCard = () => {
  return <div>CarCard</div>;
};
export default CarCard;
