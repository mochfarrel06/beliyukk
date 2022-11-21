import React from 'react';
import NavbarSession from '../../components/navbar/NavbarSession';
import Homeimg from '../../assets/homeimg.png';

const HomePage = () => {
  return (
    <React.Fragment>
      <NavbarSession title1="Beli" title2="Yukk" menu1="Home" menu2="Product" menu3="News" menu4="Contact" sesion1="Sign In" sesion2="Sign Up" />
      <div className="w-full">
        <div className="container w-full mx-auto py-[154px] h-[650px] flex items-center">
          <div className="w-1/2 flex flex-col gap-16">
            <div className="flex flex-col gap-3">
              <h1 className="text-c4 text-[40px] font-semibold font-reemkufi">Happy shopping because our products are very good</h1>
              <p className="text-c4 text-base font-normal">Please see the clothes provided with a variety of interesting choices and something to buy</p>
            </div>
            <button className="w-[191px] bg-gradient-to-t from-c1 to-c3 rounded-[20px] py-4 px-6 text-base font-medium text-c6">Start Shopping</button>
          </div>
          <div className="w-1/2 flex justify-end">
            <div className="w-[568px] h-[332px]">
              <div className="w-full h-full rounded-tl-[30px] rounded-bl-[30px] relative bg-gradient-to-t from-c1 to-c3">
                <div className="bg-c5 w-[177px] h-[84px] rounded-t-[20px] rounded-bl-[20px] absolute -top-8 -left-20 flex justify-center items-center text-md font-semibold text-c6">Product Origin</div>
                <div className=" bg-cover w-[173px] h-[400px] absolute -top-[69.1px] left-40" style={{ backgroundImage: `url(${Homeimg})` }}></div>
                <div className="absolute flex flex-col gap-6 right-14 top-10">
                  <div className="flex flex-col">
                    <h5 className="text-c6 text-2xl font-semibold">200+</h5>
                    <p className="text-c6 text-lg font-normal">Product</p>
                  </div>
                  <div className="flex flex-col">
                    <h5 className="text-c6 text-2xl font-semibold">200+</h5>
                    <p className="text-c6 text-lg font-normal">Product</p>
                  </div>
                  <div className="flex flex-col">
                    <h5 className="text-c6 text-2xl font-semibold">200+</h5>
                    <p className="text-c6 text-lg font-normal">Product</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
