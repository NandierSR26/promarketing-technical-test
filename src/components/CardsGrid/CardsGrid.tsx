'use client';

import { ICardData } from '@/interfaces';
import { getCardsData } from '@/services';
import React, { useEffect, useState } from 'react'
import { CasinoCard } from '..';

export const CardsGrid = () => {

  const [cardsData, setCardsData] = useState<ICardData[]>([]);

  useEffect(() => {
    getCardsData().then(data => setCardsData(data));
  }, [])


  return (
    <div className="flex flex-wrap flex-shrink-0 gap-5">
      {
        cardsData.map(data => (
          <CasinoCard key={data.id} {...data} />
        ))
      }
    </div>
  )
}
