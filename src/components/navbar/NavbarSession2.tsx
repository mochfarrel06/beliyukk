import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

const NavbarSession2 = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="bg-c6 py-4 px-3 border border-c1">
        <div className="container flex justify-between items-center">
          <div className="w-full flex justify-between items-center">
            <a href="#home" className="text-c1 text-sm font-semibold">
              Beli<span className="text-c4">Yukk</span>
            </a>
            <button onClick={() => setNavbarOpen(!navbarOpen)}>
              <AiOutlineMenu className="text-xl text-c4" />
            </button>
          </div>
          <div className={'lg:flex flex-grow items-center' + (navbarOpen ? ' flex' : ' hidden')}>
            <div className="w-[460px] flex justify-between items-center">
              <div>
                <button className="text-base font-normal text-c4">Home</button>
              </div>
              <div>
                <button className="text-base font-normal text-c4">Home</button>
              </div>
              <div>
                <button className="text-base font-normal text-c4">Home</button>
              </div>
              <div>
                <button className="text-base font-normal text-c4">Home</button>
              </div>
            </div>
            <div className="w-36 flex items-center justify-between">
              <button className="text-c4 text-lg font-medium">Login</button>
              <button className="text-c1 text-lg font-medium">Login</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarSession2;
