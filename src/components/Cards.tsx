import React from 'react';
import CardLogo from '../assets/card-logo.svg';
import { format } from 'date-fns';

type Props = {
  name: string;
  cardNumber: string;
  date: string;
  cvc: string;
};

export default function Cards({ name, cardNumber, date, cvc }: Props) {
  return (
    <div className='mt-10 mx-5 grid grid-cols-1 scale-90 lg:scale-75 lg:mx-40'>
      <article className='bg-cover bg-center bg-no-repeat rounded-md bg-card-front h-[200px] sm:h-[300px] sm:w-[500px] w-[320px] sm:rounded-xl p-5 flex flex-col justify-between absolute lg:relative lg:top-10 -left-5 top-28  z-30'>
        <img className='w-20 lg:w-28' src={CardLogo} alt='' />
        <div className='text-c-white'>
          <h2 className='mb-6 tracking-widest text-lg lg:text-3xl'>
            {cardNumber ? cardNumber : '0000 0000 0000 0000'}
          </h2>
          <ul className='flex items-center justify-between uppercase text-base lg:text-xl tracking-widest'>
            <li className=''>{name ? name : 'Nico Yeldynov'}</li>
            <li>{date ? format(new Date(date), 'MM/yy') : '00/00'}</li>
          </ul>
        </div>
      </article>
      <article className='bg-cover bg-center bg-no-repeat rounded-md bg-card-back h-[200px] sm:h-[300px] sm:w-[500px] w-[320px] sm:rounded-xl absolute lg:relative lg:right-0 -right-4 lg:ml-20'>
        <p className='absolute lg:right-10 right-5 top-[4.7rem] lg:top-[7.3rem] lg:text-xl text-c-white font-bold tracking-widest'>
          {cvc ? cvc : '000'}
        </p>
      </article>
    </div>
  );
}
