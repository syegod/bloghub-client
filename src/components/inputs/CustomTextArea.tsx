import clsx from 'clsx';
import React, { useState } from 'react'

interface CustomTextAreaProps {
    size?: number;
    disabled?: boolean;
    onChange?: (e: any) => void;
    textStyles?: string;
    maxLength?: number;
    placeholder?: string;
    id?: string;
    styles?: string;
}

const CustomTextArea = ({ size, disabled, onChange, maxLength, placeholder, textStyles, id, styles }: CustomTextAreaProps) => {
    const [charsLeft, setCharsLeft] = useState(maxLength);

    function handleOnChange(e: any) {
        if (maxLength) {
            const currentLength = e.target.value.length;
            setCharsLeft(maxLength - currentLength);
        }
        if (onChange) {
            onChange(e.target.value);
        }
    }

    return (
        <div className='relative py-5'>
            <textarea className={clsx(
                `border-b-2 focus-within:border-gray-700 border-gray-400 appearance-none outline-none resize-none w-full`,
                disabled && `border-rose-400`,
                textStyles && textStyles,
                styles && styles
            )} maxLength={maxLength} disabled={disabled} onChange={e => handleOnChange(e)}
            placeholder={placeholder} id={id}/>
            {maxLength &&
                <div className='absolute bottom-0 font-thin text-sm w-max inset-x-0'>
                    {charsLeft} characters left
                </div>
            }
        </div>
    )
}

export default CustomTextArea