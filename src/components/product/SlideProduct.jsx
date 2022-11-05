import React, { useState } from 'react';

import imgProduct1 from '@/assets/images/image-product-1.jpg'
import imgProduct2 from '@/assets/images/image-product-2.jpg'
import imgProduct3 from '@/assets/images/image-product-3.jpg'
import imgProduct4 from '@/assets/images/image-product-4.jpg'

import imgProductSmall1 from '@/assets/images/image-product-1-thumbnail.jpg'
import imgProductSmall2 from '@/assets/images/image-product-2-thumbnail.jpg'
import imgProductSmall3 from '@/assets/images/image-product-3-thumbnail.jpg'
import imgProductSmall4 from '@/assets/images/image-product-4-thumbnail.jpg'

import PrevIcon from '@/components/icons/PrevIcon'
import NextIcon from '@/components/icons/NextIcon'


let arrayImgs = [imgProduct1, imgProduct2, imgProduct3, imgProduct4]

const SlideProduct = () => {


  let [imgIndex, setImgIndex] = useState(0)

  const handleClickPrev = () => { 
    imgIndex === 0 ? setImgIndex(arrayImgs.length - 1) : setImgIndex(imgIndex -1)
    // if(imgIndex === 0) return setImgIndex(arrayImgs.length - 1)
    // setImgIndex(imgIndex - 1)
  }
  const handleClickNext = () => { 
    if(imgIndex === arrayImgs.length - 1){
      return setImgIndex(0)
    }
    setImgIndex(imgIndex + 1)
  }

  return (
    <section className='grid md:grid-cols-4 md:gap-4'>
      <div className='col-span-4 relative'>
        <img src={arrayImgs[imgIndex]} alt="" className='aspect-[16/13]'/>
        <div className='md:hidden absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4'>
          <button className='flex justify-center items-center bg-white h-10 w-10 rounded-full' onClick={handleClickPrev}>
            <PrevIcon/>
          </button>
          <button className='flex justify-center items-center bg-white h-10 w-10 rounded-full' onClick={handleClickNext}>
            <NextIcon/>
          </button>
        </div>
      </div>
      <img src={imgProductSmall1} alt="" className='hidden md:block'/>
      <img src={imgProductSmall2} alt="" className='hidden md:block'/>
      <img src={imgProductSmall3} alt="" className='hidden md:block'/>
      <img src={imgProductSmall4} alt="" className='hidden md:block'/>
    </section>
  );
};

export default SlideProduct;