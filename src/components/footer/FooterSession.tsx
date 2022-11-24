import React from 'react';
import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineWhatsApp } from 'react-icons/ai';

const FooterSession = () => {
  return (
    <>
      <div className="w-full">
        <div className="container w-full mx-auto py-[60px] flex justify-between ">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <h5 className="text-[20px] text-c4 font-semibold">Beliyukk</h5>
              <p className="text-[15px] text-c4 font-normal">This is a place to sell products such as clothes</p>
            </div>
            <div className="flex gap-4">
              <div className="w-[42px] h-[42px] bg-c1 rounded-full flex justify-center items-center">
                <AiOutlineInstagram className="text-[22px] text-c6" />
              </div>
              <div className="w-[42px] h-[42px] bg-c1 rounded-full flex justify-center items-center">
                <AiOutlineTwitter className="text-[22px] text-c6" />
              </div>
              <div className="w-[42px] h-[42px] bg-c1 rounded-full flex justify-center items-center">
                <AiOutlineWhatsApp className="text-[22px] text-c6" />
              </div>
            </div>
          </div>
          <div className="flex gap-36">
            <div className="flex flex-col gap-[26px]">
              <div className="text-c4 font-medium text-[18px]">Menu Links</div>
              <div className="flex flex-col gap-3">
                <p className="text-c4 text-[15px] font-normal">Home</p>
                <p className="text-c4 text-[15px] font-normal">Home</p>
                <p className="text-c4 text-[15px] font-normal">Home</p>
                <p className="text-c4 text-[15px] font-normal">Home</p>
              </div>
            </div>
            <div className="flex flex-col gap-[26px]">
              <div className="text-c4 font-medium text-[18px]">Menu Links</div>
              <div className="flex flex-col gap-3">
                <p className="text-c4 text-[15px] font-normal">Home</p>
                <p className="text-c4 text-[15px] font-normal">Home</p>
                <p className="text-c4 text-[15px] font-normal">Home</p>
                <p className="text-c4 text-[15px] font-normal">Home</p>
              </div>
            </div>
            <div className="flex flex-col gap-[26px]">
              <div className="text-c4 font-medium text-[18px]">Menu Links</div>
              <div className="flex flex-col gap-3">
                <p className="text-c4 text-[15px] font-normal">Home</p>
                <p className="text-c4 text-[15px] font-normal">Home</p>
                <p className="text-c4 text-[15px] font-normal">Home</p>
                <p className="text-c4 text-[15px] font-normal">Home</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterSession;
