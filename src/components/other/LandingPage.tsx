import React, { useState } from 'react';
import Homeimg from '../../assets/homeimg.png';
import IProduct from '../interfaces/IProduct';

const initialProduct: IProduct[] = [
  {
    name: 'Man',
    total: 200,
  },
  {
    name: 'Woman',
    total: 300,
  },
  {
    name: 'Kids',
    total: 100,
  },
];

const LandingPage: React.FC = () => {
  const [products, setProduct] = useState(initialProduct);

  return (
    <>
      {/* <div className="max-w-full bg-c5">
        <div className="container px-4 py-10 sm:px-6 lg:px-8 flex items-center">
          <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-3">
              <h1 className="text-c4 text-3 xl font-semibold font-reemkufi">Happy shopping because our products are very good</h1>
              <p className="text-c4 text-base font-normal">Please see the clothes provided with a variety of interesting choices and something to buy</p>
            </div>
            <button className="w-[191px] bg-gradient-to-t from-c1 to-c3 rounded-[20px] py-4 px-6 text-base font-medium text-c6">Start Shopping</button>
          </div>

          <div className="hidden justify-end">
            <div className="w-[568px] h-[332px]">
              <div className="w-full h-full rounded-tl-[30px] rounded-bl-[30px] relative bg-gradient-to-t from-c1 to-c3">
                <div className="bg-c5 w-[177px] h-[84px] rounded-t-[20px] rounded-bl-[20px] absolute -top-8 -left-20 flex justify-center items-center text-md font-semibold text-c6">Product Origin</div>
                <div className=" bg-cover w-[173px] h-[400px] absolute -top-[69.1px] left-40" style={{ backgroundImage: `url(${Homeimg})` }}></div>
                <div className="absolute flex flex-col gap-6 right-14 top-10">
                  {products.map((product) => {
                    return (
                      <div className="flex flex-col">
                        <h5 className="text-c6 text-2xl font-semibold">{product.total}+</h5>
                        <p className="text-c6 text-lg font-normal">{product.name}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="">
        <div className="container px-4 py-16 flex flex-col gap-24">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <h1 className="text-c4 font-semibold text-2xl">Happy shopping because our products are very good</h1>
              <p className="text-c4 font-medium text-md">Please see the clothes provided with a variety of interesting choices and something to buy</p>
            </div>
            <button className="bg-gradient-to-t from-c1 to-c3 px-5 py-3 rounded-lg font-semibold text-c4 w-44">Start Shopping</button>
          </div>
          <div className="hidden justify-end">
            <div className="w-[568px] h-[332px]">
              <div className="w-full h-full rounded-tl-[30px] rounded-bl-[30px] relative bg-gradient-to-t from-c1 to-c3">
                <div className="bg-c5 w-[177px] h-[84px] rounded-t-[20px] rounded-bl-[20px] absolute -top-8 -left-20 flex justify-center items-center text-md font-semibold text-c6">Product Origin</div>
                <div className=" bg-cover w-[173px] h-[400px] absolute -top-[69.1px] left-40" style={{ backgroundImage: `url(${Homeimg})` }}></div>
                <div className="absolute flex flex-col gap-6 right-14 top-10">
                  {products.map((product) => {
                    return (
                      <div className="flex flex-col">
                        <h5 className="text-c6 text-2xl font-semibold">{product.total}+</h5>
                        <p className="text-c6 text-lg font-normal">{product.name}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
