import clsx from 'clsx';
import React from 'react'
import { CustomBtnProps } from '../../types';



const CustomBtn = ({ text, onClick, fullWidth, danger, secondary, disabled, type, fullRounded, containerStyles }: CustomBtnProps) => {
    function handleOnClick(){
        if(onClick){
            onClick();
        }
    }
    return (
        <button onClick={handleOnClick} className={clsx(`px-5 py-1 text-center rounded bg-gray-900 text-white transition font-bold hover:bg-gray-700`,
        fullRounded && `rounded-full`, 
        secondary && `bg-gray-500`, 
        fullWidth ? `w-full` : `w-max`, 
        danger && `bg-rose-500`,
        disabled && `opacity-50 cursor-not-allowed`,
        containerStyles && containerStyles)} type={type} disabled={disabled}>{text}</button>
    )
}

export default CustomBtn