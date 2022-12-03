import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

const NavbarSession2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="bg-c6 max-w-full">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center w-full justify-between">
              <div className="flex-shrink-0">
                <h1 className="text-xl text-c1 font-semibold">
                  Beli
                  <span className="text-c4">Yukk</span>
                </h1>
              </div>
              <div className="hidden md:block">
                <div className="flex items-baseline space-x-4">
                  <button className="px-3 py-2 text-sm font-medium text-c4">Home</button>
                  <button className="px-3 py-2 text-sm font-medium text-c4">Product</button>
                  <button className="px-3 py-2 text-sm font-medium text-c4">News</button>
                  <button className="px-3 py-2 text-sm font-medium text-c4">Contact</button>
                  <button className="px-3 py-2 text-sm font-medium text-c4">Sign In</button>
                  <button className="px-3 py-2 text-sm font-medium text-c4">Sign Up</button>
                </div>
              </div>
            </div>
            <div className="flex md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} type="button" className="bg-c6 inline-flex items-center justify-center p-2 rounded-md" aria-controls="mobile-menu" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="md:hidden max-w-full" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 container sm:px-3">
              <button className="text-c4 block px-3 py-2 rounded-md text-base font-medium">Home</button>
              <button className="text-c4 block px-3 py-2 rounded-md text-base font-medium">Product</button>
              <button className="text-c4 block px-3 py-2 rounded-md text-base font-medium">News</button>
              <button className="text-c4 block px-3 py-2 rounded-md text-base font-medium">Contact</button>
              <button className="text-c4 block px-3 py-2 rounded-md text-base font-medium">Sign In</button>
              <button className="text-c4 block px-3 py-2 rounded-md text-base font-medium">Sign Up</button>
            </div>
          </div>
        </Transition>
      </nav>
    </>
  );
};

export default NavbarSession2;
