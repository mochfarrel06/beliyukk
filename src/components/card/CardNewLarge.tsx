import React, { useState } from 'react';
import Bajuorange from '../../assets/bajuorange.png';
import Bajuputih from '../../assets/bajuputih.png';
import Jakethitam from '../../assets/jakethitam.png';

interface NewsProduct2 {
  image: string;
  title: string;
  price: number;
}

const INewscard2: NewsProduct2[] = [
  {
    image: Bajuorange,
    title: 'Baju Orange',
    price: 30,
  },
];

const CardNew2: React.FC = () => {
  const [newscard2, setNewscard2] = useState(INewscard2);

  return (
    <>
      {/* 21px 37px */}
      {newscard2.map((news2) => {
        return (
          <div className="overflow-hidden bg-c5 w-[248px] h-[409px] px-[37px] py-[21px] flex flex-col items-center justify-center gap-7 rounded-tr-[100px] rounded-tl-[20px]">
            <div className=" bg-cover w-[174px] h-[149px]" style={{ backgroundImage: `url(${news2.image})` }}></div>
            <h4 className="text-c6 font-medium text-xl">{news2.title}</h4>
            <p className="text-c6 font-normal text-xl">${news2.price}</p>
          </div>
        );
      })}
    </>
  );
};

export default CardNew2;
