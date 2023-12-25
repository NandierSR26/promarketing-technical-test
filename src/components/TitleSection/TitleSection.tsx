import React from 'react'

interface TitleSectionProps {
  text: string;
}

export const TitleSection = ({text}: TitleSectionProps) => {
  return (
    <h1 className="text-3xl font-bold mb-5 text-center">{text}</h1>
  )
}
