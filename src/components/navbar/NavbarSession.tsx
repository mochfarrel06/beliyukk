import React from 'react';
import NavbarProps from '../interfaces/NavbarProps';

const NavbarSession: React.FC<NavbarProps> = ({ title1, title2, menu1, menu2, menu3, menu4, sesion1, sesion2 }) => {
  return (
    <>
      <nav className="w-full h-[70px]">
        <div className="container flex items-center mx-auto h-full justify-between">
          <div className="">
            <h1 className="text-2xl text-c1 font-semibold">
              {title1}
              <span className="text-c4">{title2}</span>
            </h1>
          </div>
          <div className="w-[460px] flex justify-between items-center">
            <div>
              <button className="text-base font-normal text-c4">{menu1}</button>
            </div>
            <div>
              <button className="text-base font-normal text-c4">{menu2}</button>
            </div>
            <div>
              <button className="text-base font-normal text-c4">{menu3}</button>
            </div>
            <div>
              <button className="text-base font-normal text-c4">{menu4}</button>
            </div>
          </div>
          <div className="w-36 flex items-center justify-between">
            <button className="text-c4 text-lg font-medium">{sesion1}</button>
            <button className="text-c1 text-lg font-medium">{sesion2}</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarSession;
