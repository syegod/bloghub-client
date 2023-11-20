import clsx from 'clsx';
import React from 'react'
import { CustomInputProps } from '../../types';



const CustomInput = ({ label, onChange, disabled, id, type, placeholder, autoComplete }: CustomInputProps) => {

    function handleOnChange(e: any) {
        if (onChange) {
            onChange(e.target.value);
        }
    }

    return (
        <div className='flex flex-col w-full'>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} className={clsx(`border-b-2 border-b-gray-300 focus-within:border-b-black outline-none font-normal w-full px-2 py-1`, disabled && `border-b-rose-500 opacity-50`)} autoComplete={autoComplete ? "" : "off"} disabled={disabled} placeholder={placeholder} onChange={e => handleOnChange(e)} />
        </div>
    )
}

export default CustomInput