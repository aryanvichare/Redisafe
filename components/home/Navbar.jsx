import React, { useState } from "react";
import Router from "next/router";

import { useAuth } from "@/lib/auth";
import SocialSignIn from "./SocialSignIn";

const Navbar = ({ ...props }) => {
  const [open, setOpen] = useState(false);
  const auth = useAuth();

  return (
    <div className='mx-auto max-w-7xl' {...props}>
      <nav className='relative z-50 h-24 select-none'>
        <div className='w-full flex flex-wrap items-center justify-between h-24 overflow-hidden font-medium border-b border-gray-200 sm:px-4 md:px-2'>
          <div className='flex items-center justify-start w-1/4 h-full pr-4'>
            <a href='#_' className='inline-block py-4 md:py-0'>
              <span className='p-1 text-xl font-black leading-none text-gray-900'>
                <span className='text-indigo-600'>health++</span>
              </span>
            </a>
          </div>
          <div className='w-full h-full p-4 text-sm md:items-center md:w-3/4 lg:text-base md:p-0 md:relative md:flex '>
            {!auth?.user ? (
              <>
                <div className='flex flex-col items-start justify-end w-full pt-4 md:items-center md:flex-row md:py-0'>
                  <a
                    onClick={() => setOpen(true)}
                    className='cursor-pointer outline-none border-none w-full px-6 py-2 mr-0 text-gray-700 md:px-0 lg:pl-2 md:mr-4 lg:mr-5 md:w-auto'>
                    Sign In
                  </a>
                  <button
                    onClick={() => setOpen(true)}
                    className='inline-flex items-center w-full px-6 py-3 text-sm font-medium leading-4 text-white bg-indigo-600 md:px-3 md:w-auto md:rounded-full lg:px-5 hover:bg-indigo-500 focus:outline-none md:focus:ring-2 focus:ring-0 focus:ring-offset-2 focus:ring-indigo-600'>
                    Sign Up
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className='flex flex-col items-start justify-end w-full pt-4 md:items-center md:flex-row md:py-0'>
                  <a
                    onClick={() => Router.push("/dashboard")}
                    className='cursor-pointer inline-flex items-center w-full px-6 py-3 text-sm font-medium leading-4 text-white bg-indigo-600 md:px-3 md:w-auto md:rounded-full lg:px-5 hover:bg-indigo-500 focus:outline-none md:focus:ring-2 focus:ring-0 focus:ring-offset-2 focus:ring-indigo-600'>
                    Dashboard
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </nav>
      {open && <SocialSignIn setOpen={setOpen} />}
    </div>
  );
};

export default Navbar;
