import React, { useState, useRef, useEffect } from 'react';
import { CiSearch } from 'react-icons/ci'
import UserAvatar from '../user/UserAvatar';

const SearchInput = () => {
    const [isOpen, setIsOpen] = useState(false);
    const componentRef: any = useRef(null);

    const handleClickOutside = (e: any) => {
        if (componentRef.current && !componentRef.current.contains(e.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div ref={componentRef} className={`relative`} onFocus={() => setIsOpen(true)} onBlur={() => setIsOpen(false)}>
            <CiSearch className={`absolute inset-x-0 top-[0.6rem] left-2`} />
            <input type="text" className={`w-full rounded-full bg-gray-100 pl-10 pr-3 py-2 outline-none text-sm`} placeholder='Search for users, hashtags, news...' />
            {isOpen &&
                <div className='w-full inset-x-0 top-10 border rounded-l-xl absolute overflow-x-hidden max-h-44 bg-white'>
                    <div className='w-full h-full flex flex-col cursor-pointer'>
                        <div className='w-full px-2 hover:bg-gray-100 transition flex flex-row gap-1 items-center'>
                            <UserAvatar size='small' />
                            <div className='flex flex-col justify-center text-sm'>
                                <span className='font-semibold'>
                                    Aboba
                                </span>
                                <span className='text-gray-500'>
                                    @abober123
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default SearchInput;
