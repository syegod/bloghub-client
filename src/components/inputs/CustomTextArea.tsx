import clsx from 'clsx';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { CustomTextAreaProps } from '../../types';



const CustomTextArea = ({ size, disabled, border, onChange, maxLength, placeholder, textStyles, id, styles }: CustomTextAreaProps) => {
    const [rows, setRows] = useState(1);
    const [charsLeft, setCharsLeft] = useState(maxLength);

    function handleOnChange(e: ChangeEvent<HTMLTextAreaElement>) {
        if (maxLength) {
            const currentLength = e.target.value.length;
            setCharsLeft(maxLength - currentLength);
        }
        if (onChange) {
            onChange(e.target.value);
        }
    }

    return (
        <div className='relative w-full'>
            <TextareaAutosize className={clsx(
                `appearance-none outline-none resize-none h-max w-full ring-0 py-1 text-lg`,
                disabled && `border-rose-400 opacity-50`,
                border && `border-b-2 focus-within:border-gray-700 border-gray-200`,
                textStyles && textStyles,
                styles && styles
            )} maxLength={maxLength} disabled={disabled} onChange={e => handleOnChange(e)}
                placeholder={placeholder} id={id} />
        </div>
    )
}

export default CustomTextArea