import React from 'react';
import CartIcon from '@/components/icons/CartIcon'

const DetailsProduct = () => {
  return (
    <section className='container mx-auto px-4 md:px-0'>
      <p className='tracking-wide uppercase mb-2 text-orange-primary font-bold'>Sneaker Company</p>
      <h2 className='mb-4 font-bold text-3xl'>Fall Limited Edition Sneakers</h2>
      <p className='text-dark-grayish-blue mb-5'>
        These low-profile sneakers are your perfect casual wear companion. Featuring a 
        durable rubber outer sole, they’ll withstand everything the weather can offer.
      </p>

      <div className='grid grid-cols-3 font-bold items-center mb-5 md:grid-cols-[1fr_3fr]'>
        <span className='text-2xl'>$125.00</span>
        <span className='bg-pale-orange rounded-md mr-auto py-1 px-2 text-orange-primary'>50%</span>
        <span className='text-right text-grayish-blue text-lg line-through md:col-span-3 md:text-left'>$250.00</span>
      </div>

      <div className='grid grid-cols-3 gap-4 font-bold md:grid-cols-[1fr_1.5fr]'>
        <div className='bg-light-grayish-blue rounded-md p-3 mb-3 flex justify-between col-span-3 md:col-span-1 items-baseline'>
          <button className='text-orange-primary text-3xl'>-</button>
          <span className='text-xl'>0</span>
          <button className='text-orange-primary text-3xl'>+</button>
        </div>
        <button className='w-full rounded-md bg-orange-primary py-3 text-white transition-all hover:bg-orange-600 col-span-3 md:col-span-1 mb-4 flex items-center justify-center gap-4'>
          <CartIcon fill="#fff"/>
          Add to cart
        </button>
      </div>

    </section>
  );
};

export default DetailsProduct;