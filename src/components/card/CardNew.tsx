import React from 'react';
import Bajuorange from '../../assets/bajuorange.png';
import Bajuputih from '../../assets/bajuputih.png';
import Jakethitam from '../../assets/jakethitam.png';

const CardNew: React.FC = () => {
  return (
    <>
      {/* 21px 37px */}
      <div className="overflow-hidden bg-c3 px-[37px] py-[21px] flex flex-col items-center justify-center gap-7 rounded-tr-[100px] rounded-tl-[20px]">
        <div className=" bg-cover w-[174px] h-[149px]" style={{ backgroundImage: `url(${Jakethitam})` }}></div>
        <h4 className="text-c4 font-medium text-xl">Jacket Pull</h4>
        <p className="text-c4 font-normal text-xl">$30</p>
      </div>
    </>
  );
};

export default CardNew;
