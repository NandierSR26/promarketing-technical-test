'use client';

import React, { useContext, useEffect, useRef, useState } from 'react'
import Image from 'next/image';
import { ICardData } from '@/interfaces'
import { useScreenWidth } from '@/hooks';
import { selectCardLogo } from '@/helpers';
import style from './CasinoCard.module.css';


interface CasinoCardOverlayProps extends ICardData {
  isVisible: boolean
}

export const CasinoCardOverlay = ({ isVisible, ...props }: CasinoCardOverlayProps) => {

  const [mainOverlayIsVisible, setMainOverlayIsVisible] = useState<boolean>(isVisible);
  const [infoOverlayIsVisible, setInfoOverlayIsVisible] = useState<boolean>(false)
  const [cardLogo, setCardLogo] = useState('');
  const playButton = useRef<HTMLButtonElement | null>(null);
  const gameNameP = useRef<HTMLParagraphElement | null>(null);
  const bonusIcon = useRef<HTMLImageElement | null>(null);
  const infoIcon = useRef<HTMLImageElement | null>(null);
  const { width } = useScreenWidth();

  useEffect(() => {
    setCardLogo(selectCardLogo(props.supplier, width));
  }, [props.supplier, width])

  const handleMouseDown = () => {
    playButton.current?.classList.remove('opacity-60');
    playButton.current?.classList.add('opacity-1');
    gameNameP.current?.classList.add('hidden');
    bonusIcon.current?.classList.add('hidden');
    infoIcon.current?.classList.add('hidden');
  }

  const handleMouseUp = () => {
    playButton.current?.classList.remove('opacity-1');
    playButton.current?.classList.add('opacity-60');
    gameNameP.current?.classList.remove('hidden');
    bonusIcon.current?.classList.remove('hidden');
    infoIcon.current?.classList.remove('hidden');
  }

  return (
    <>
      {
        mainOverlayIsVisible && (
          <div className={`${style['card-overlay']} ${mainOverlayIsVisible ? 'flex' : 'hidden'} `}>
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
                ref={infoIcon}
                onClick={() => {
                  setInfoOverlayIsVisible(true)
                  setMainOverlayIsVisible(false)
                }}
              />
            </div>

            <button
              className={`${style['btn-play-now']} opacity-60`}
              ref={playButton}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              <span className="opacity-1">JUGAR AHORA</span>
            </button>

            <div className="flex justify-between items-center w-full min-h-[24px]">
              <p className="text-base font-bold" ref={gameNameP}>{props.name}</p>

              {
                props.info.moodBonus && (
                  <Image
                    src={'/assets/bonus-icon-hover.png'}
                    width={24}
                    height={24}
                    alt='bonus-icon'
                    ref={bonusIcon}
                  />
                )
              }
            </div>
          </div>
        )
      }

      {
        infoOverlayIsVisible && (
          <div className={`${style['card-overlay']} ${infoOverlayIsVisible ? 'flex' : 'hidden'} `}>

            <div className="flex justify-between items-center w-full min-h-[24px]">
              <Image
                src={cardLogo}
                width={(width >= 1024) ? 110 : (width >= 768 && width < 1024) ? 71 : 24}
                height={30}
                alt="card-logo"
              />
            </div>

            <div className="flex justify-between items-center w-full min-h-[24px] gap-2">
              <div>
                <p className="text-base font-bold mb-2">{props.name}</p>
                <div className="flex flex-wrap gap-1">
                  <p className="rounded-2xl bg-[rgba(251,190,36,0.1)] p-2 text-[10px] font-bold">
                    VERSION: {props.info.version}
                  </p>

                  <p className="rounded-2xl bg-[rgba(251,190,36,0.1)] p-2 text-[10px] font-bold">
                    RTP: {props.info.rtp}
                  </p>

                  <p className="rounded-2xl bg-[rgba(251,190,36,0.1)] p-2 text-[10px] font-bold">
                    VOTALIDAD: {props.info.moodBonus ? 'ALTA' : 'BAJA'}
                  </p>
                </div>

              </div>

              <Image
                src={'/assets/close-info.png'}
                width={24}
                height={24}
                alt='bonus-icon'
                className="self-end cursor-pointer"
                onClick={() => {
                  setInfoOverlayIsVisible(false)
                  setMainOverlayIsVisible(true)
                }}
              />
            </div>
          </div>
        )
      }

    </>
  )
}
