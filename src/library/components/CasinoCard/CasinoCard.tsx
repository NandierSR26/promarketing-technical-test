'use client';

import React, { useContext, useEffect, useState } from 'react'
import { ICardData } from '@/shared/interfaces'
import { CasinoCardOverlay } from './CasinoCardOverlay'
import { useScreenWidth } from '@/shared/hooks';
import { selectCardLogo } from '@/shared/helpers';
import Image from 'next/image';
import { NotAvailableOverlay } from './NotAvailableOverlay';

interface CasinoCardsProps extends ICardData { }

export const CasinoCard = ({ ...props }: CasinoCardsProps) => {

  const [isHover, setIsHover] = useState<boolean>(false)
  const [cardLogo, setCardLogo] = useState('')
  const { width } = useScreenWidth()

  useEffect(() => {
    setCardLogo(selectCardLogo(props.supplier, width))
  }, [props.supplier, width])

  return (
    <div
      className="relative w-[200px] h-[150px] lg:w-[350px] lg:h-[250px] rounded-[16px] bg-cover overflow-hidden"
      style={{
        backgroundImage: `url(${props.src})`,
        backgroundPosition: 'center'
      }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {
        (!isHover && !props.disabled) && (
          <div className="w-full h-full flex flex-col justify-between items-center p-2">
            <div className="flex justify-between items-center w-full">
              <Image
                src={cardLogo}
                width={(width >= 1024) ? 110 : (width >= 768 && width < 1024) ? 71 : 24}
                height={30}
                alt="card-logo"
              />

              <Image
                src={'/assets/info-icon.svg'}
                width={24}
                height={24}
                alt='info-icon'
                className="cursor-pointer"
              />
            </div>

            <div className="flex justify-end items-center w-full min-h-[24px]">
              {
                props.info.moodBonus && (
                  <Image
                    src={'/assets/bonus-icon.png'}
                    width={24}
                    height={24}
                    alt='bonus-icon'
                  />
                )
              }
            </div>
          </div>
        )
      }

      {
        (isHover && !props.disabled) && <CasinoCardOverlay isVisible={isHover} {...props} />
      }

      {
        props.disabled && <NotAvailableOverlay isVisible={props.disabled} {...props} />
      }

    </div>
  )
}
