import React, {useEffect, useState} from 'react'
import axios from 'axios';

// Animations
import { StyleSheet, css } from 'aphrodite';
import { fadeInUp } from "react-animations"

// Images
import TwoOfClubs from "../GFX/TwoOfClubs.png";
import ThreeOfClubs from "../GFX/ThreeOfClubs.png";
import FourOfClubs from "../GFX/FourOfClubs.png";
import FiveOfClubs from "../GFX/FiveOfClubs.png";
import SixOfClubs from "../GFX/SixOfClubs.png";

import QueenOfClubs from "../GFX/QueenOfClubs.png";
import JackOfClubs from "../GFX/JackOfClubs.png";

// Components
import Master from './Master';

export default function Deck() {

  const [_cards, SetCards] = useState([
    TwoOfClubs,
    ThreeOfClubs,
    FourOfClubs,
    FiveOfClubs,
    SixOfClubs,
    QueenOfClubs,
    JackOfClubs
  ]);

  const [activeCard, setActiveCard] = useState(0);

  const Card = () =>
  {
    const ret = _cards.map((i,k) =>
      <img key={k} src={i} className="drop-shadow-md w-[150px] hover:drop-shadow-xl" onClick={()=>{setActiveCard(k)}} />
    )
    return(
      ret
    )
  }

  return (
    <Master light={true}>
      <div className='flex w-full h-screen items-center justify-evenly pt-[70px] bg-gradient-to-t to-[#151425b4] from-[#09080F]'>
        <div className='bg-white flex flex-col items-center shadow-md w-3/6 rounded-lg'>
          <p className='text-2xl'>Suit</p>
          <div className='flex flex-wrap w-full justify-evenly gap-2 py-8'>
            {Card()}
          </div>
        </div>

        <div className='bg-white flex flex-col items-center justify-center shadow-md w-2/6 py-8 rounded-lg'>
          <img src={_cards[activeCard]} className="drop-shadow-md" />
        </div>

      </div>
    </Master>
  )
}
