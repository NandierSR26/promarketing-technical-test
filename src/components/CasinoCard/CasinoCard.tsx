import { ICardData } from '@/interfaces'
import React from 'react'

interface CasinoCardsProps extends ICardData {}

export const CasinoCard = ({ info, src }: CasinoCardsProps) => {
  return (
    <div 
      className="w-[350px] h-[250px] rounded-[16px] bg-cover"
      style={{
        backgroundImage: `url(${src})`,
        backgroundPosition: 'center'
      }}
    >
    </div>
  )
}
