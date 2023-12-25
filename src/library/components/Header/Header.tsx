import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Header = () => {
  return (
    <header className="flex justify-center md:justify-start items-center w-full max-w-7xl mx-auto py-5 mb-20 md:mb-0">
      <Link href={'/'}>
        <Image
          src={'/assets/Logo-promarketing-transformed.png'}
          width={280}
          height={80}
          alt='Logo promarketing'
          className="bg-white rounded-lg"
        />
      </Link>
    </header>
  )
}
