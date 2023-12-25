'use client';

import { ColorButtons, TypeButtons } from '@/constants';
import { Divider } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Button, InputSelect } from '..';

type TypeColor = "primary" | "secondary";

export const SelectButtonForm = () => {

  const [typeButton, setTypeButton] = useState<string>(TypeButtons[0].id);
  const [colorButton, setColorButton] = useState<TypeColor>('primary');
  const [buttonText, setButtonText] = useState<string>('');

  const handleChangeType = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTypeButton(event.target.value);
  };

  const handleChangeColor = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setColorButton(event.target.value as TypeColor);
  }

  const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setButtonText(event.target.value)
  }

  return (
    <div className="flex flex-col justify-center gap-5 w-full">
      <form className="flex flex-col items-center gap-7 w-full mb-5">

        <InputSelect
          labelText={'Tipo de boton'}
          onChange={handleChangeType}
          optionList={TypeButtons}
        />

        <InputSelect
          labelText={'Color'}
          onChange={handleChangeColor}
          optionList={ColorButtons.map(color => ({
            id: color,
            text: color
          }))}
        />

        {
          typeButton !== '1' && (
            <input 
              type="text" 
              name="button_text" 
              id="button_text"
              placeholder="Texto para el boton"
              onChange={handleChangeText}
              value={buttonText}
              className="text-xl p-2 rounded-lg text-black font-normal w-full md:w-2/4"
            />
          )
        }

      </form>
      <Button type={typeButton} color={colorButton} text={buttonText} />
    </div>
  )
}
