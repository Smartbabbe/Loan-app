'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import NavLink from './NavLink';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isNavOpen) {
        setIsNavOpen(false);
      }
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isNavOpen]);

  return (
    <div
      className={`fixed top-0 left-0 py-3 px-6 right-0 z-50 transition-all duration-300 ease-in-out
      ${isScrolled ? 'bg-white/55 backdrop-blur-md shadow-md' : 'bg-white'}`}
    >
      <div className="flex justify-between max-w-[73.5rem] items-center mx-auto w-full">
        <div className="logo">
          <Image
            alt="logo-image"
            width={100}
            height={100}
            className="w-16 md:w-[100px] aspect-[2.22]"
            src={'/Logo.png'}
          />
        </div>

        <div
          className="md:hidden space-y-1.5 ml-auto mr-0"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          <span className="block w-6 h-0.5 bg-gray-950 animate-pulse"></span>
          <span className="block w-6 h-0.5 bg-gray-950 animate-pulse"></span>
          <span className="block w-6 h-0.5 bg-gray-950 animate-pulse"></span>
        </div>

        <div className="hidden md:flex gap-x-5 items-center">
          <ul className="flex m-0 gap-x-5 text-xs md:text-sm">
            <li>
              <NavLink className="font-heading no-underline" href={'/'}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="font-heading no-underline" href={'/browse'}>
                Browse
              </NavLink>
            </li>
            <li>
              <NavLink
                className="font-heading no-underline"
                href={'/developer'}
              >
                For Developers
              </NavLink>
            </li>
            <li>
              <NavLink
                className="font-heading no-underline"
                href={'/how-it-works'}
              >
                How it works
              </NavLink>
            </li>
            <li>
              <NavLink className="font-heading no-underline" href={'/about'}>
                About Us
              </NavLink>
            </li>
          </ul>

          <div className="flex gap-x-3">
            <div
              className="text-sm leading-none lg:w-[7rem] w-[6rem] h-9 rounded-full grid place-items-center cursor-pointer capitalize"
              role="button"
            >
              Sign In
            </div>
            <div
              className="text-sm leading-none lg:w-[7rem] w-[6rem] h-9 border rounded-full grid place-items-center cursor-pointer capitalize border-[#064749]"
              role="button"
            >
              Join Now
            </div>
          </div>
        </div>
      </div>

      {/* side menu */}
      {/* side menu */}
      <div
        className={`fixed top-[3.2rem] right-0 h-fit rounded-bl-lg w-56 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isNavOpen ? 'translate-x-0' : 'translate-x-full'
        } md:!hidden bg-primary`}
      >
        <div className="relative h-fit w-full bg-primary">
          <ul className="flex w-full py-8 relative flex-col items-center space-y-4 min-h-max">
            <li className="link">
              <div className="flex flex-col justify-center">
                <button
                  // onClick={() => navigate("/auth/register")}
                  className="bg-white rounded-full py-2 px-3 font-semibold text-black bg"
                >
                  Get Started
                </button>
                <button
                  // onClick={() => navigate("/auth/login")}
                  className="bg-transparent text-black font-semibold rounded-full !border !border-white mt-2 py-2 px-3"
                >
                  Login
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
