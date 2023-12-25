import { SelectButtonOption } from '@/shared/interfaces';
import React from 'react'

interface InputSelectProps extends Partial<HTMLSelectElement> {
  labelText: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  optionList: SelectButtonOption[];
}

export const InputSelect = ({ labelText, id, name, value, optionList, onChange, ...props }: InputSelectProps) => {
  return (
    <div className="flex flex-col gap-2 w-full md:w-2/4">
      <label htmlFor={name}>Tipo de boton</label>
      <select
        name={name}
        id={id}
        className="text-xl p-2 rounded-lg text-black font-semibold"
        onChange={onChange}
        value={value}
      >
        {
          optionList.map(option => (
            <option key={option.id} value={option.id}>{option.text}</option>
          ))
        }
      </select>
    </div>
  )
}
