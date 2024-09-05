import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../img/logo.png';
import HierMePopup from './HierMePopup';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = () => {
  const MyNavigator = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleHomeNavigate = () => {
    MyNavigator("/");
    closeDrawer();
  };

  const handleAboutNavigate = () => {
    MyNavigator("/about");
    closeDrawer();
  };

  const handlePortfolioNavigate = () => {
    MyNavigator("/portfolio");
    closeDrawer();
  };

  const handleContactNavigate = () => {
    MyNavigator("/contact");
    closeDrawer();
  };

  const handleHireMeClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className='sticky top-0 z-50'>
      <nav className='flex justify-between items-center Md:py-5 Md:px-4 p-2 md:red-500 md:bg-myColor-navcolor bg-slate-400'>
        <div className='flex items-center'>
          <img src={Logo} alt="" className='md:h-16 md:w-16 w-10 h-10 rounded-full' />
        </div>
        <div className='md:hidden'>
        <i onClick={openDrawer} class="fa-solid fa-bars cursor-pointer bg-red-500 p-2 rounded text-white h-8 w-8"></i>
        </div>
        <div className='hidden md:flex gap-10 list-none'>
          <li onClick={handleHomeNavigate} className='cursor-pointer hover:text-red-500'>Home</li>
          <li onClick={handleAboutNavigate} className='cursor-pointer hover:text-red-500'>About</li>
          <li onClick={handlePortfolioNavigate} className='cursor-pointer hover:text-red-500'>Portfolio</li>
          <li onClick={handleContactNavigate} className='cursor-pointer hover:text-red-500'>Contact</li>
        </div>
        <div className='hidden md:block'>
          <button
            onClick={handleHireMeClick}
            type="button"
            className='bg-myColor-primary py-2 px-6 text-white rounded-md hover:bg-red-700'
          >
            Hire Me
          </button>
        </div>
      </nav>

      {/* Side Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-myColor-navcolor transform ${
          isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className='flex justify-between items-center p-4 bg-myColor-navcolor'>
          <img src={Logo} alt="Logo" className='h-12 w-12 rounded-full' />
          <i class="fa-solid fa-x  cursor-pointer text-black h-8 w-8" onClick={closeDrawer}></i>
        </div>
        <div className='flex flex-col p-4'>
          <li onClick={handleHomeNavigate} className='list-none cursor-pointer py-2 hover:text-red-500'>Home</li>
          <li onClick={handleAboutNavigate} className='list-none cursor-pointer py-2 hover:text-red-500'>About</li>
          <li onClick={handlePortfolioNavigate} className='list-none cursor-pointer py-2 hover:text-red-500'>Portfolio</li>
          <li onClick={handleContactNavigate} className='list-none cursor-pointer py-2 hover:text-red-500'>Contact</li>
          <button
            onClick={handleHireMeClick}
            type="button"
            className='mt-4 bg-myColor-primary py-2 text-white rounded-md hover:bg-red-700'
          >
            Hire Me
          </button>
        </div>
      </div>

      <HierMePopup isOpen={isPopupOpen} onClose={handleClosePopup} />
    </div>
  );
};

export default Nav;
