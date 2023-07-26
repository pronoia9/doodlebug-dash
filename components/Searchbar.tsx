'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import { SearchButton, SearchManufacturer } from '.';

const Searchbar = () => {
  const [manufacturer, setManuFacturer] = useState('');
  const [model, setModel] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (manufacturer.trim() === '' && model.trim() === '') return alert('Please provide some input');
    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
  };

  const updateSearchParams = (model: string, manufacturer: string) => {
    // Create a new URLSearchParams object using the current URL search parameters
    const searchParams = new URLSearchParams(window.location.search);
    // Update or delete the 'model' search parameter based on the 'model' value
    if (model) searchParams.set('model', model);
    else searchParams.delete('model');
    // Update or delete the 'manufacturer' search parameter based on the 'manufacturer' value
    if (manufacturer) searchParams.set('manufacturer', manufacturer);
    else searchParams.delete('manufacturer');
    // Generate the new pathname with the updated search parameters
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
    router.push(newPathname, { scroll: false });
  };

  useEffect(() => {
    const search = setTimeout(() => { updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase()); }, 100);
    return () => { clearTimeout(search); };
  }, [manufacturer]);
  
  useEffect(() => {
    const search = setTimeout(() => { updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase()); }, 500);
    return () => { clearTimeout(search); };
  }, [model]);

  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className='searchbar__item'>
        <SearchManufacturer manufacturer={manufacturer} setManuFacturer={setManuFacturer} />
        <SearchButton otherClasses='sm:hidden' />
      </div>
      <div className='searchbar__item'>
        <Image src='/model-icon.png' width={25} height={25} className='absolute w-[20px] h-[20px] ml-4' alt='car model' />
        <input
          type='text'
          name='model'
          value={model}
          onChange={(e) => { setModel(e.target.value); }}
          placeholder='Tiguan...'
          className='searchbar__input'
        />
        <SearchButton otherClasses='sm:hidden' />
      </div>
      <SearchButton otherClasses='max-sm:hidden' />
    </form>
  );
};
export default Searchbar;
