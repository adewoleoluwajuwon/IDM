'use client';

import { Navbar, Button, Dropdown} from 'flowbite-react';
import { NavLink, useLocation } from 'react-router-dom';
import { HiChevronDown, HiMenu, HiX } from 'react-icons/hi';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import idmLogo from "../../assets/logos/idm_logo.png";
import navItems from '../../Constants/navItems';
import NavModal from './NavModal';

const Nav = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Navbar className="fixed left-0 top-0 z-50 w-full bg-white/50 backdrop-blur-md transition-all duration-300"> 
      <nav className="mx-auto flex w-[92%] max-w-6xl items-center justify-between py-1 md:py-1.5 lg:py-2">
        {/* ✅ Import NavModal */}
        <NavModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
        
        {/* Left: Logo (Always Visible) */}
        <Navbar.Brand href="/" className="flex items-center">
          <img src={idmLogo} alt="IDM Logo" className="h-8 transition-transform duration-300 hover:scale-105 md:h-9" />
        </Navbar.Brand>

        {/* Desktop Menu (FIXED - Always Visible on Large Screens) */}
        <div className="hidden gap-x-5 text-black dark:text-white md:flex lg:gap-x-7 xl:gap-x-9">
          {/* Home */}
          <NavLink 
            to="/" 
            className={({ isActive }) => `font-semibold transition-all duration-300 ${
              isActive ? 'text-[#fe0000] border-b-2 border-red-600' : 'hover:text-red-600 hover:border-b-2 hover:border-red-400'
            }`}
          >
            Home
          </NavLink>

          {navItems.map((item) => (
            <Dropdown 
              key={item.path} 
              inline 
              label={item.label} 
              trigger="hover" // Opens on hover!
              renderTrigger={() => (
                <button 
                  className={`flex items-center border-b-2 text-gray-900 transition-all duration-300 dark:text-white ${
                    location.pathname.startsWith(item.path) 
                      ? 'border-red-600 text-[#fe0000]' 
                      : 'border-transparent hover:border-red-400 hover:text-red-600'
                  }`}
                >
                  {item.label} <HiChevronDown className="ml-2 transition-transform duration-300 group-hover:rotate-180" />
                </button>
              )}
            >
              {/* Dropdown Content */}
              <div className="grid w-screen grid-cols-2 gap-4 rounded-lg bg-white p-6 shadow-lg transition-all duration-300 ease-in-out md:grid-cols-3">
                {item.links.map(({ path, label, description, icon }) => (
                  <NavLink 
                    key={path} 
                    to={path} 
                    className={`flex items-start space-x-4 rounded-lg p-3 transition-all duration-300 ${
                      location.pathname === path ? 'border-b-2 border-red-600 text-[#fe0000]' : 'hover:scale-105 hover:bg-gray-100'
                    }`}
                  >
                    {icon && <Icon icon={icon} className="text-3xl text-red-600" />}
                    <div>
                      <h4 className="text-lg font-semibold">{label}</h4>
                      <p className="text-sm text-gray-500">{description}</p>
                    </div>
                  </NavLink>
                ))}
              </div>
            </Dropdown>
          ))}

          {/* About & Contact */}
          <NavLink to="/about" className="font-semibold transition-all duration-300 hover:border-b-2 hover:border-red-400 hover:text-red-600">
            About Us
          </NavLink>
          <NavLink to="/contact" className="font-semibold transition-all duration-300 hover:border-b-2 hover:border-red-400 hover:text-red-600">
            Contact Us
          </NavLink>
        </div>

        {/* Right: Request Demo Button & Mobile Menu Button */}
        <div className="flex items-center md:space-x-4">
          {/* Desktop Button (Hidden at 1023px and below) */}
          {/* ✅ Button that opens the modal */}
                <button 
                  className="hidden rounded-lg border border-[#fe0000] bg-[#fe0000] px-4 py-1.5 text-white transition-all duration-300 hover:bg-white hover:text-[#fe0000] hover:shadow-md md:block"
                  onClick={() => setIsModalOpen(true)} // ✅ Opens modal
                >
                  Request A Demo
                </button>

          {/* Mobile Menu Button */}
          <button 
            className="text-black focus:outline-none dark:text-white md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX size={28} className="transition-all duration-300 hover:scale-110" /> : <HiMenu size={28} className="transition-all duration-300 hover:scale-110" />}
          </button>
        </div>
      </nav>

      {/* Subtle Dark Transparent Overlay (Right Side) */}
      {menuOpen && (
        <div 
          className="fixed left-64 top-0 z-40 h-screen w-[calc(100%-16rem)] bg-black/40 backdrop-blur-md transition-opacity duration-300"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Menu (Slide in from Left) */}
      <div 
        className={`fixed left-0 top-0 z-30 h-screen w-64 bg-white shadow-lg transition-transform duration-500 ease-in-out ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col p-6">
          {/* Logo in Mobile Menu */}
          <Navbar.Brand href="/" className="mb-4 flex items-center">
            <img src={idmLogo} alt="IDM Logo" className="h-8 transition-transform duration-300 hover:scale-105" />
          </Navbar.Brand>

          {/* Close Button */}
          <button 
            className="mb-4 self-end text-black transition-transform duration-300 hover:scale-110"
            onClick={() => setMenuOpen(false)}
          >
            <HiX size={30} />
          </button>

          {/* Mobile Menu Links */}
          <NavLink to="/" className="border-b border-gray-200 py-4 font-semibold hover:text-red-600">Home</NavLink>
          <NavLink to="/about" className="border-b border-gray-200 py-4 font-semibold hover:text-red-600">About Us</NavLink>
          <NavLink to="/contact" className="border-b border-gray-200 py-4 font-semibold hover:text-red-600">Contact Us</NavLink>

          {/* Services, Industries, Solutions */}
          {navItems.map((item) => (
            <details key={item.path} className="group border-b border-gray-200 py-4">
              <summary className="flex cursor-pointer items-center justify-between font-semibold hover:text-red-600">
                {item.label} <HiChevronDown className="ml-2 transition-transform group-open:rotate-180" />
              </summary>
              <div className="mt-2 space-y-2 pl-4">
                {item.links.map(({ path, label }) => (
                  <NavLink 
                    key={path} 
                    to={path} 
                    className="block text-gray-700 hover:text-red-600"
                  >
                    {label}
                  </NavLink>
                ))}
              </div>
            </details>
          ))}

          {/* Mobile "Request a Demo" Button */}
          <Button className="mt-4 w-full rounded-lg bg-[#fe0000] px-6 py-2 text-white 
                             transition-all duration-300 hover:bg-white hover:text-white hover:shadow-md">
            Request A Demo
          </Button>
        </div>
      </div>
    </Navbar>

    
  );
};

export default Nav;
