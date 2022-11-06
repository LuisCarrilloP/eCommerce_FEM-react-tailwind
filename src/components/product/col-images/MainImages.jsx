import React from 'react';
import SlideProduct from '@/components/product/col-images/SlideProduct';

const MainImages = ({arrayImgs, arrayImgsSmall}) => {
  return (
    <>
      <SlideProduct arrayImgs={arrayImgs} arrayImgsSmall={arrayImgsSmall}/>
      <SlideProduct arrayImgs={arrayImgs} arrayImgsSmall={arrayImgsSmall}/>
    </>
  );
};

export default MainImages;