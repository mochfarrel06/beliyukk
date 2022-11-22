import React from 'react';
import { AiFillFire } from 'react-icons/ai';
import CardNew from '../card/CardNew';

const NewsCollection = () => {
  return (
    <>
      <div className="w-full mb-40">
        <div className="container w-full mx-auto py-[60px] flex flex-col gap-[60px]">
          <div className="text-[30px] font-medium font-reemkufi">New Collections</div>
          <div className="w-full bg-c1 h-[456px] rounded-tl-[20px] overflow-hidden rounded-tr-[70px] rounded-bl-[100px] rounded-br-[20px]">
            <div className="flex h-full gap-[95px] justify-center">
              <div className="flex flex-col items-center justify-center gap-12">
                <AiFillFire className="text-[150px] text-c8" />
                <h5 className="text-c7 text-[25px] font-medium">Trending Clothes</h5>
              </div>
              <div className="flex gap-[38px] items-end">
                <CardNew />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsCollection;
