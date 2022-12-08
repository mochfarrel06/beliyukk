import React from 'react';
import CardNew from '../card/CardNew';
import CardNew2 from '../card/CardNewLarge';
import fire from '../../assets/fire.png';

const NewsCollection = () => {
  return (
    <>
      {/* <div className="w-full">
        <div className="container w-full mx-auto py-[60px] flex flex-col gap-[60px]">
          <div className="text-[30px] font-medium font-reemkufi">New Collections</div>
          <div className="w-full bg-c1 h-[456px] rounded-tl-[20px] overflow-hidden rounded-tr-[70px] rounded-bl-[100px] rounded-br-[20px]">
            <div className="flex h-full gap-[95px] justify-center">
              <div className="flex flex-col items-center justify-center gap-12">
                <div className="w-[108px] h-[108px]" style={{ backgroundImage: `url(${fire})` }}></div>
                <h5 className="text-c7 text-[25px] font-medium">Trending Clothes</h5>
              </div>
              <div className="flex gap-[38px] items-end">
                <CardNew />
                <CardNew2 />
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div>
        <div className="container px-4 py-16">
          <h3 className="font-medium font-reemkufi text-lg mb-5">News Collections</h3>
          <div className="bg-c1 px-10 py-10 rounded-tl-[20px] overflow-hidden rounded-tr-[70px] rounded-bl-[100px] rounded-br-[20px]">
            <div>
              <div className="flex flex-col items-center justify-center gap-12 mb-10">
                <div className="w-[108px] h-[108px]" style={{ backgroundImage: `url(${fire})` }}></div>
                <h5 className="text-c7 text-xl font-medium">Trending Clothes</h5>
              </div>
              <div className="flex justify-center flex-col gap-10">
                <CardNew />
                <CardNew2 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsCollection;
