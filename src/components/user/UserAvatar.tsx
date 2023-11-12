import clsx from 'clsx';
import { PiUserCircleLight } from 'react-icons/pi'

interface UserAvatarProps {
    src?: string;
    size: 'large' | 'medium' | 'small';
    activeStatus?: boolean;

}

const UserAvatar = ({ src, size, activeStatus }: UserAvatarProps) => {
    return (
        <div className='cursor-pointer select-none relative w-max h-max'>
            {src ?
                <div className={clsx(`rounded-full overflow-hidden`,
                    size === 'large' && `w-[80px] h-[80px]`,
                    size === 'medium' && `w-[40px] h-[40px]`,
                    size === 'small' && `w-[30px] h-[30px]`)}>
                    <img src={src} alt="avatar" className='w-full h-full object-cover' />
                </div>
                :
                <PiUserCircleLight className={clsx(
                    size === 'large' && `w-[80px] h-[80px]`,
                    size === 'medium' && `w-[40px] h-[40px]`,
                    size === 'small' && `w-[30px] h-[30px]`)}
                />}
            {activeStatus && <ActiveStatus size={size} status='online'/>}
        </div>
    )
}

interface ActiveStatusProps{
    size: 'large' | 'medium' | 'small';
    status: 'online' | 'sleeping' | 'offline';
}

const ActiveStatus = ({ size, status }: ActiveStatusProps) => {
    if(status === 'online'){
        return (
            <span className={clsx(`bg-green-500 absolute rounded-full bottom-0.5 right-0.5 border border-white`,
                size === 'large' && `w-[15px] h-[15px]`,
                size === 'medium' && `w-[11px] h-[11px]`,
                size === 'small' && `w-[8px] h-[8px]`)} />
        )
    } else if(status === 'sleeping'){
        return (
            <span className={clsx(`bg-yellow-500 absolute rounded-full bottom-0.5 right-0.5 border border-white`,
                size === 'large' && `w-[15px] h-[15px]`,
                size === 'medium' && `w-[11px] h-[11px]`,
                size === 'small' && `w-[8px] h-[8px]`)} />
        )
    } else {
        return (
            <span className={clsx(`bg-white absolute rounded-full bottom-0.5 right-0.5 border-[3px] border-gray-500`,
                size === 'large' && `w-[15px] h-[15px]`,
                size === 'medium' && `w-[11px] h-[11px]`,
                size === 'small' && `w-[8px] h-[8px]`)} />
        )
    }
}

export default UserAvatar