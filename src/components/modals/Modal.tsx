import React from 'react'

interface ModalProps {
    children?: React.ReactNode;
    isOpen?: boolean;
    changeState: (state: boolean) => void;
}


const Modal = ({ children, isOpen, changeState }: ModalProps) => {
    if (isOpen) {
        return (
            <>
                <div className='fixed z-50 top-24 w-full'>
                    <div className='flex items-center justify-center w-full'>
                        <div className='bg-white rounded-lg shadow-lg relative p-5
                        w-[90%] sm:w-[50ch]'>
                            {children}
                            <span className='absolute inset-y-0 -right-3 -top-3 h-max w-max py-1 px-3 bg-white rounded-full font-bold cursor-pointer' onClick={() => changeState(false)}>X</span>
                        </div>
                    </div>
                </div>
                <div className='fixed inset-0 w-full h-screen bg-black opacity-25 z-20' onClick={() => changeState(false)} />
            </>
        )
    } else {
        return (
            <></>
        )
    }
}

export default Modal