import Link from 'next/link';
import Image from 'next/image';

import CustomButton from './CustomButton';

const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
      <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
        <Link href='/' className='flex justify-center items-center'>
          <Image className='object-contain' src='/logo.png' alt='logo' width={236} height={36} />
        </Link>
        <CustomButton containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]' title='Sign In' btnType='button' />
      </nav>
    </header>
  );
};
export default Navbar;
