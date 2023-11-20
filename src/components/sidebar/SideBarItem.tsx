import React from 'react'
import { IconType } from 'react-icons/lib'
import { Link } from 'react-router-dom';
import { SideBarItemProps } from '../../types';



const SideBarItem = ({Icon, text, href, active, IconActive}: SideBarItemProps) => {
    return (
        <Link to={href} className={`${active ? 'font-bold' : 'font-medium'} rounded-full overflow-hidden cursor-pointer transition hover:bg-gray-100 w-max px-3 py-2 flex flex-row gap-5 items-center`}>
            {active ? <IconActive size={30}/> : <Icon size={30} />}
            <span className='hidden lg:block text-lg'>{text} </span>
        </Link>
    )
}

export default SideBarItem