import React, { useState } from "react";
import Router from "next/router";
import SocialSignIn from "./SocialSignIn";

const Navbar = ({ ...props }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className='container max-w-6xl mx-auto px-8 xl:px-0' {...props}>
      <div className='flex items-center justify-between h-20'>
        <img
          onClick={() => Router.push("/")}
          className='cursor-pointer w-8'
          src='/images/logored.png'
          alt='logo'
        />
        <div className='flex space-x-4 items-center'>
          <a
            onClick={() => Router.push("/about")}
            className='cursor-pointer flex items-center justify-center px-3 py-2 mb-3 text-sm font-bold text-primary hover:text-primary-light rounded-full sm:mb-0 hover:bg-primary-dark transition-colors duration-150 sm:w-auto'>
            About
          </a>
          <a
            onClick={() => setOpen(true)}
            className='cursor-pointer flex items-center justify-center px-3 py-2 mb-3 text-sm text-white bg-primary hover:bg-primary-light rounded-full sm:mb-0 hover:bg-primary-dark transition-colors duration-150 sm:w-auto'>
            Get Started
          </a>
        </div>
      </div>
      {open && <SocialSignIn setOpen={setOpen} />}
    </div>
  );
};

export default Navbar;
