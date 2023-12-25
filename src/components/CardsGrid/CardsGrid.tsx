'use client';

import { ICardData } from '@/interfaces';
import { getCardsData } from '@/services';
import React, { useEffect, useState } from 'react'
import { CasinoCard, Skeleton } from '..';

export const CardsGrid = () => {

  const [cardsData, setCardsData] = useState<ICardData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getCardsData()
      .then(data => setCardsData(data))
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false)
        }, 1000);
      });
  }, [])

  return (
    <div className="flex flex-wrap justify-center flex-shrink-0 gap-2 lg:gap-5">
      {
        isLoading ? (
          <>
            {
              cardsData.map(data => (
                // <CasinoCard key={data.id} {...data} />
                <Skeleton key={data.id} />
              ))
            }
          </>
        ) : (
          <>
            {
              cardsData.map(data => (
                <CasinoCard key={data.id} {...data} />
              ))
            }
          </>
        )
      }
 
    </div>
  )
}
