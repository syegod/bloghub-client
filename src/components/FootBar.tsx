import React from 'react'
import {GoHome, GoHomeFill, GoSearch} from 'react-icons/go';
import {IoNotificationsOutline, IoNotifications, IoMailOutline, IoMailSharp} from 'react-icons/io5';


const FootBar = () => {
  return (
    <div className='fixed bottom-0 left-0 block sm:hidden w-full h-10 border-t-2 bg-white z-20'>
        <div className='flex justify-between items-center h-full w-full px-5'>
            <GoHome size={23}/>
            <GoSearch size={23}/>
            <IoNotificationsOutline size={23}/>
            <IoMailOutline size={23}/>
        </div>
    </div>
  )
}

export default FootBar