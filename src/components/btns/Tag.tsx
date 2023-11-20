import React from 'react'
import clsx from 'clsx';
import { TagProps } from '../../types';



const Tag = ({ children, onClick, selected }: TagProps) => {
    function handleOnClick() {
        if (onClick) {
            onClick();
        }
    }
    return (
        <div className={clsx(`w-max px-2 py-0.5 rounded-lg cursor-pointer 
        hover:bg-gray-400 hover:shadow-lg transition select-none`, selected ? `bg-gray-400` : `bg-gray-300`)} onClick={() => handleOnClick()}>
            {children}
        </div>
    )
}

export default Tag