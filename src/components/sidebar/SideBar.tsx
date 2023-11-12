import { GoHome, GoHomeFill, GoHeart, GoHeartFill } from 'react-icons/go';
import { BiSolidSearch, BiSearch } from 'react-icons/bi'
import { IoNotificationsOutline, IoNotifications, IoMailOutline, IoMailSharp, IoSettingsOutline, IoSettingsSharp } from 'react-icons/io5';
import SideBarItem from './SideBarItem';
import { useLocation } from "react-router-dom";


const SideBar = () => {
    const location = useLocation();
    return (
        <div className='fixed hidden sm:block sm:w-16 lg:w-64 overflow-x-hidden h-screen overflow-y-auto'>
            <div className='flex flex-col justify-between h-full w-full'>
                <div className='flex flex-col gap-5 py-5'>
                    <SideBarItem text='Home' href='/' Icon={GoHome}
                        IconActive={GoHomeFill} active={location.pathname === '/'} />
                    <SideBarItem text='Explore' href='/explore' Icon={BiSearch}
                        IconActive={BiSolidSearch} active={location.pathname.includes('explore')} />
                    <SideBarItem text='Notifications' href='/notifications' Icon={IoNotificationsOutline}
                        IconActive={IoNotifications} active={location.pathname.includes('notifications')} />
                    <SideBarItem text='Messages' href='/messages' Icon={IoMailOutline}
                        IconActive={IoMailSharp} active={location.pathname.includes('messages')} />
                    <SideBarItem text='Liked' href='/liked' Icon={GoHeart}
                        IconActive={GoHeartFill} active={location.pathname.includes('liked')} />
                </div>
                <div className='pb-20'>
                    <SideBarItem text='Settings' href='/settings' Icon={IoSettingsOutline}
                        IconActive={IoSettingsSharp} active={location.pathname.includes('settings')} />
                </div>
            </div>
        </div>
    )
}

export default SideBar