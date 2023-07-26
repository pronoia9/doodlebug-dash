import { CarCard, ShowMore, Searchbar, CustomFilter, Hero } from '@components';
import { fuels, yearsOfProduction } from '@constants';
import { HomeProps } from '@types';
import { fetchCars } from '@utils';

export default function Home() {
  return (
    <main className='overflow-hidden'>
      <Hero />

      <div id='discover' className='mt-12 padding-x padding-y max-width'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>

        <div className='home__filters'>
          <Searchbar />

          <div className='home__filter-container'>
            <CustomFilter title='fuel' options={fuels} />
            <CustomFilter title='year' options={yearsOfProduction} />
          </div>
        </div>
      </div>
    </main>
  );
}
