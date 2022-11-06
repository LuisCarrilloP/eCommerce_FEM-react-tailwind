import React, { useState } from 'react';

import PrevIcon from '@/components/icons/PrevIcon'
import NextIcon from '@/components/icons/NextIcon'



const SlideProduct = ({arrayImgs = [], arrayImgsSmall = [], ...props}) => {

  const [imgIndex, setImgIndex] = useState(0)

  const handleClickPrev = () => { 
    imgIndex === 0 ? setImgIndex(arrayImgs.length - 1) : setImgIndex(imgIndex -1)
  }
  const handleClickNext = () => { 
    if(imgIndex === arrayImgs.length - 1){
      return setImgIndex(0)
    }
    setImgIndex(imgIndex + 1)
  }

  return (
    <section className='grid md:grid-cols-4 md:gap-4' {...props}>
      <div className='col-span-4 relative'>
        <img src={arrayImgs[imgIndex]} alt="" className='aspect-[16/14] w-full md:rounded-xl'/>
        <div className='md:hidden absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4'>
          <button className='flex justify-center items-center bg-white h-10 w-10 rounded-full' onClick={handleClickPrev}>
            <PrevIcon/>
          </button>
          <button className='flex justify-center items-center bg-white h-10 w-10 rounded-full' onClick={handleClickNext}>
            <NextIcon/>
          </button>
        </div>
      </div>
      
      {
        arrayImgsSmall.map(smallImg => (
          <img key={smallImg} src={smallImg} alt="" className='hidden md:block md:rounded-md'/>
        ))
      }
      
    </section>
  );
};

export default SlideProduct;