import Image from 'next/image'
import React from 'react'

export const Header = () => {
  return (
    <header className="flex justify-center md:justify-start items-center w-full container mx-auto p-5">
      <Image
        src={'/assets/Logo-promarketing-transformed.png'}
        height={80}
        width={280}
        alt='Logo promarketing'
        className="bg-white rounded-lg"
      />
    </header>
  )
}
