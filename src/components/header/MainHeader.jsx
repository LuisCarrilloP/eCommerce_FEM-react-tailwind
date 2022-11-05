import React from 'react';
import { useState } from 'react'
import LogoSneakers from '@/assets/images/logo.svg'
import AvatarImage from '@/assets/images/image-avatar.png'
import MenuIcon from '@/components/icons/MenuIcon';
import CartIcon from '@/components/icons/CartIcon'
import CloseIcon from '@/components/icons/CloseIcon'
import NavLinkHeader from '@/components/header/NavLinkHeader';

const MainHeader = () => {

  const [navClass, setNavClass] = useState('hidden font-bold md:font-light md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0')

  const handleOpenMenu = () => {
    setNavClass('absolute top-0 left-0 h-full p-8 gap-y-6 font-bold w-3/5 bg-white flex flex-col md:flex-row md:mr-auto md:flex md:gap-4 md:static md:p-0')
  }
  const handleCloseMenu = () => {
    setNavClass('hidden font-bold md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0')
  }

  return (
    <>
      <header className="flex gap-8 items-center container mx-auto p-4 md:p-0">
      <button className="md:hidden" onClick={handleOpenMenu}>
        <MenuIcon/>
      </button>
      <img src={LogoSneakers} alt="logo" className="mr-auto md:mr-0 h-5 mb-1"/>
      <nav className={navClass}>
        <button className="mb-12 md:hidden" onClick={handleCloseMenu}>
          <CloseIcon/>
        </button>
        <NavLinkHeader text="Collections"/>
        <NavLinkHeader text="Men"/>
        <NavLinkHeader text="Women"/>
        <NavLinkHeader text="About"/>
        <NavLinkHeader text="Contact"/>
      </nav>
      <div className="flex gap-4">
        <button>
          <CartIcon/>
        </button>
        <img src={AvatarImage} alt="avatar-image" className="w-10" />
      </div>
      </header>
      <span className="container mx-auto hidden w-full h-[1px] bg-slate-200 md:block"></span>
    </>
  );
};

export default MainHeader;