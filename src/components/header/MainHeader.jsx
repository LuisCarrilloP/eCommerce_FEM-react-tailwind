import React from 'react';
import { useState } from 'react'
import LogoSneakers from '@/assets/images/logo.svg'
import AvatarImage from '@/assets/images/image-avatar.png'
import MenuIcon from '../icons/MenuIcon';
import CartIcon from '../icons/CartIcon'
import CloseIcon from '../icons/CloseIcon'

const MainHeader = () => {

  const [navClass, setNavClass] = useState('hidden font-bold md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0')

  const handleOpenMenu = () => {
    setNavClass('absolute top-0 left-0 h-full p-8 gap-y-6 font-bold w-3/5 bg-white flex flex-col md:flex-row md:mr-auto md:flex md:gap-4 md:static md:p-0')
  }
  const handleCloseMenu = () => {
    setNavClass('hidden font-bold md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0')
  }

  return (
    <header className="flex gap-8 bg-gray-200 py-8 items-center container mx-auto px-4">
      <button className="md:hidden" onClick={handleOpenMenu}>
        <MenuIcon/>
      </button>
      <img src={LogoSneakers} alt="logo" className="mr-auto md:mr-0 h-5 mb-1"/>
      <nav className={navClass}>
        <button className="mb-12 md:hidden" onClick={handleCloseMenu}>
          <CloseIcon/>
        </button>
        <a href="#">Collections</a>
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
      <div className="flex gap-4">
        <button>
          <CartIcon/>
        </button>
        <img src={AvatarImage} alt="avatar-image" className="w-10" />
      </div>
    </header>
  );
};

export default MainHeader;