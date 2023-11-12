import clsx from 'clsx';
import React from 'react'

interface CustomBtnProps {
    text: string;
    onClick?: () => void;
    fullWidth?: boolean;
    danger?: boolean;
    secondary?: boolean;
    type?: "submit" | "reset" | "button" | undefined,
    disabled?: boolean;
    fullRounded?: boolean;
}

const CustomBtn = ({ text, onClick, fullWidth, danger, secondary, disabled, type, fullRounded }: CustomBtnProps) => {
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
        disabled && `opacity-50 cursor-not-allowed`)} type={type} disabled={disabled}>{text}</button>
    )
}

export default CustomBtn