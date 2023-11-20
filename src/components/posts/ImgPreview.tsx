import React from 'react'
import { IoClose } from 'react-icons/io5';
import { ImgPreviewProps } from '../../types';



const ImgPreview = ({image, handleRemove}:ImgPreviewProps) => {
  return (
    <div className='w-full relative'>
        <img src={image} className='w-full' />
        <div className='absolute text-white inset-y-2 right-2 p-2 cursor-pointer bg-opacity-50 bg-gray-500 h-max w-max rounded-full' onClick={handleRemove}>
            <IoClose size={20}/>
        </div>
    </div>
  )
}

export default ImgPreview