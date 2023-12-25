'use client';

import React, { useEffect, useState } from 'react'
import style from './Button.module.css'
import { ColorButtonsEnum } from '@/enums';

interface ButtonProps {
  type: string;
  color: 'primary' | 'secondary'
  text?: string;
}


function getBtnClass(type: string, color: string): string {
  if (type != '5' && color === ColorButtonsEnum.PRIMARY) return 'bg-[#091B50]';
  if (type != '5' && color === ColorButtonsEnum.SECONDARY) return 'bg-[#FBBF24]';
  if (type == '5' && color === ColorButtonsEnum.PRIMARY) return style.outline + ' border-[2px] border-[#091B50] text-[#091B50] bg-[#091b5033]';
  if (type == '5' && color === ColorButtonsEnum.SECONDARY) return style.outline + ' border-[2px] border-[#FBBF24] text-[#FBBF24] bg-[#fbbe2433]';
  return '';
}

export const Button = ({ type, color, text="BUTTON" }: ButtonProps) => {

  const [btnClass, setBtnClass] = useState<string>('')

  useEffect(() => {
    setBtnClass(getBtnClass(type, color));
  }, [type, color])

  if (!btnClass) return null;

  return (
    <div
      className={`${style.button} ${btnClass} `}
    >
      {
        type === '1' && (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        )
      }

      {
        type === '2' && (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>

            <p className="font-bold text-xl">{text}</p>
          </>
        )
      }

      {
        type === '3' && (
          <>
            <p className="font-bold text-xl">{text}</p>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </>
        )
      }

      {
        type === '4' && (
          <>
            <p className="font-bold text-xl">{text}</p>
          </>
        )
      }

      {
        type === '5' && (
          <>
            <p className="font-bold text-xl">{text}</p>
          </>
        )
      }
    </div>
  )
}
