import React from 'react';
import ButtonSearch from '../button/ButtonSearch';
import CardNew from '../card/CardNew';
import CardProduct from '../card/CardProduct';

const ProductContainer: React.FC = () => {
  return (
    <>
      <div className="w-full">
        <div className="container w-full mx-auto py-[60px] flex flex-col gap-[60px]">
          <div className="flex justify-center flex-col items-center gap-[30px]">
            <h3 className="text-[30px] font-medium font-reemkufi">find the clothes you will wear</h3>
            <ButtonSearch />
            <div className="flex p-[10px] gap-6">
              <div className="bg-c1 px-[15px] py-[10px] rounded-[10px] text-lg font-medium text-c6">All</div>
              <div className="bg-c4 px-[15px] py-[10px] rounded-[10px] text-lg font-medium text-c6">Man</div>
              <div className="bg-c4 px-[15px] py-[10px] rounded-[10px] text-lg font-medium text-c6">Woman</div>
              <div className="bg-c4 px-[15px] py-[10px] rounded-[10px] text-lg font-medium text-c6">Kids</div>
            </div>
          </div>
          <div className="overflow-hidden flex gap-[88px] flex-wrap">
            <CardProduct />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductContainer;
