import React from 'react';

const NavLinkHeader = ({text}) => {
  return (
        <a href="#" className='py-8 relative group'>
          <span className='text-gray-500 group-hover:text-gray-600'>{text}</span>
          <span className='block scale-x-0 group-hover:scale-x-100 transition-all duration-300 absolute bottom-0 w-full h-[2px] group-hover:bg-orange-primary'></span>
        </a>
  );
};

export default NavLinkHeader;