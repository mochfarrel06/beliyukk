import React, { useState } from 'react';
import ButtonSearch from '../button/ButtonSearch';
import Threesecond from '../../assets/threesecond.png';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai/index';

interface CardProps {
  title: string;
  desc: string;
  price: number;
}

const ICard: CardProps[] = [
  {
    title: 'Threesecond',
    desc: 'Baju keren untuk remaja hingga dewasacocok digunakan dengan desain yang menarik',
    price: 50,
  },
  {
    title: 'Threesecond',
    desc: 'Baju keren untuk remaja hingga dewasacocok digunakan dengan desain yang menarik',
    price: 50,
  },
  {
    title: 'Threesecond',
    desc: 'Baju keren untuk remaja hingga dewasacocok digunakan dengan desain yang menarik',
    price: 50,
  },
  {
    title: 'Threesecond',
    desc: 'Baju keren untuk remaja hingga dewasacocok digunakan dengan desain yang menarik',
    price: 50,
  },
  {
    title: 'Threesecond',
    desc: 'Baju keren untuk remaja hingga dewasacocok digunakan dengan desain yang menarik',
    price: 50,
  },
  {
    title: 'Threesecond',
    desc: 'Baju keren untuk remaja hingga dewasacocok digunakan dengan desain yang menarik',
    price: 50,
  },
  {
    title: 'Threesecond',
    desc: 'Baju keren untuk remaja hingga dewasacocok digunakan dengan desain yang menarik',
    price: 50,
  },
  {
    title: 'Threesecond',
    desc: 'Baju keren untuk remaja hingga dewasacocok digunakan dengan desain yang menarik',
    price: 50,
  },
];

const ProductContainer: React.FC = () => {
  const [card, setCard] = useState(ICard);

  return (
    <>
      <div className="w-full mb-40">
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
            {card.map((cards) => {
              return (
                <div className="px-[40px] py-[24px] border border-c7 w-[254px] rounded-md">
                  <div className="w-full flex flex-col items-center justify-center gap-[26px]">
                    <div className=" bg-cover w-[97px] h-[127px]" style={{ backgroundImage: `url(${Threesecond})` }}></div>
                    <h4 className="text-c4 font-medium text-xl">{cards.title}</h4>
                    <p className="text-center text-sm font-normal">{cards.desc}</p>
                    <div className="text-c4 font-medium text-2xl">${cards.price}</div>
                    <div className="flex gap-[10px]">
                      <AiFillStar className="text-xl text-c8" />
                      <AiFillStar className="text-xl text-c8" />
                      <AiFillStar className="text-xl text-c8" />
                      <AiFillStar className="text-xl text-c8" />
                      <AiOutlineStar className="text-xl text-c8" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductContainer;
