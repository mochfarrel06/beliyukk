import React, { useState } from 'react';
import Bajuorange from '../../assets/bajuorange.png';
import Bajuputih from '../../assets/bajuputih.png';
import Jakethitam from '../../assets/jakethitam.png';

interface NewsProduct {
  image: string;
  title: string;
  price: number;
}

const INewscard: NewsProduct[] = [
  {
    image: Jakethitam,
    title: 'Jacket Pull',
    price: 30,
  },
  {
    image: Bajuputih,
    title: 'Baju Putih',
    price: 30,
  },
];

const CardNew: React.FC = () => {
  const [newscard, setNewscard] = useState(INewscard);

  return (
    <>
      {/* 21px 37px */}
      {newscard.map((news) => {
        return (
          <div className="overflow-hidden bg-c3 w-[248px] h-[315px] px-[37px] py-[21px] flex flex-col items-center justify-center gap-7 rounded-tr-[100px] rounded-tl-[20px]">
            <div className=" bg-cover w-[174px] h-[149px]" style={{ backgroundImage: `url(${news.image})` }}></div>
            <h4 className="text-c4 font-medium text-xl">{news.title}</h4>
            <p className="text-c4 font-normal text-xl">${news.price}</p>
          </div>
        );
      })}
    </>
  );
};

export default CardNew;
