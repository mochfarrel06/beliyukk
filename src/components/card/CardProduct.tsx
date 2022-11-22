import React, { useState } from 'react';
import Threesecond from '../../assets/threesecond.png';
import BajuHitam from '../../assets/bajuhitam.png';
import Clothespink from '../../assets/clothespink.png';
import Blackclothes from '../../assets/blackclothes.png';
import Dressblue from '../../assets/dressblue.png';
import Dresspurple from '../../assets/dresspurple.png';
import Handm from '../../assets/handm.png';
import Pullandbear from '../../assets/pullandbear.png';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai/index';

interface CardProps {
  title: string;
  desc: string;
  price: number;
  image: string;
}

const ICard: CardProps[] = [
  {
    title: 'Threesecond',
    image: Threesecond,
    desc: 'Baju keren untuk remaja hingga dewasacocok digunakan dengan desain yang menarik',
    price: 50,
  },
  {
    title: 'Pull & Bear',
    image: Pullandbear,
    desc: 'Baju keren untuk remaja hingga dewasacocok digunakan dengan desain yang menarik',
    price: 50,
  },
  {
    title: 'Dress Purple',
    image: Dresspurple,
    desc: 'Baju keren untuk remaja hingga dewasacocok digunakan dengan desain yang menarik',
    price: 50,
  },
  {
    title: 'Greenlight',
    image: Clothespink,
    desc: 'Baju keren untuk remaja hingga dewasacocok digunakan dengan desain yang menarik',
    price: 50,
  },
  {
    title: 'Blackpanter',
    image: Blackclothes,
    desc: 'Baju keren untuk remaja hingga dewasacocok digunakan dengan desain yang menarik',
    price: 50,
  },
  {
    title: 'H & M',
    image: Handm,
    desc: 'Baju keren untuk remaja hingga dewasacocok digunakan dengan desain yang menarik',
    price: 50,
  },
  {
    title: 'Dress Biru',
    image: Dressblue,
    desc: 'Baju keren untuk remaja hingga dewasacocok digunakan dengan desain yang menarik',
    price: 50,
  },
  {
    title: 'Threesecond Black',
    image: BajuHitam,
    desc: 'Baju keren untuk remaja hingga dewasacocok digunakan dengan desain yang menarik',
    price: 50,
  },
];

const CardProduct: React.FC = () => {
  const [card, setCard] = useState(ICard);
  return (
    <>
      {card.map((cards) => {
        return (
          <div className="px-[40px] py-[18px] border border-c7 w-[254px] rounded-md">
            <div className="w-full flex flex-col items-center justify-center gap-[26px]">
              <div className=" bg-cover w-[97px] h-[127px]" style={{ backgroundImage: `url(${cards.image})` }}></div>
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
    </>
  );
};

export default CardProduct;
