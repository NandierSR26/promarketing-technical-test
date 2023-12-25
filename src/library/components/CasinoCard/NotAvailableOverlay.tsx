'use client'

import React, { useEffect, useState } from 'react'
import style from './CasinoCard.module.css'
import { ICardData } from '@/shared/interfaces';
import Image from 'next/image';
import { selectCardLogo } from '@/shared/helpers';
import { useScreenWidth } from '@/shared/hooks';

interface NotAvailableOverlayProps extends ICardData {
  isVisible: boolean;
}

export const NotAvailableOverlay = ({ isVisible, ...props }: NotAvailableOverlayProps) => {

  const [cardLogo, setCardLogo] = useState('');
  const { width } = useScreenWidth();

  useEffect(() => {
    setCardLogo(selectCardLogo(props.supplier, width));
  }, [props.supplier, width])

  return (
    <div
      className={`${style['card-overlay']}`}
      style={{
        background: 'linear-gradient(0deg, #000000 4.5%, rgba(0, 0, 0, 0) 100%);'
      }}
    >
      <div className="flex w-full justify-between">
        <Image
          src={cardLogo}
          width={(width >= 1024) ? 110 : (width >= 768 && width < 1024) ? 71 : 24}
          height={30}
          alt="card-logo"
          className="self-start"
        />
      </div>

      <div className="flex-1 flex justify-center items-center">
        <div className="bg-[#E8E8E8] py-4 px-5 rounded-lg text-[#909090] font-bold">
          NO DISPONIBLE
        </div>
      </div>
      
    </div>
  )
}
