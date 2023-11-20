import { WhoToFollowItemProps } from '../../types';
import CustomBtn from '../inputs/CustomBtn';
import UserAvatar from '../user/UserAvatar'



const WhoToFollowItem = ({ username, userAvatar, userEmail }: WhoToFollowItemProps) => {
    return (
        <div className='w-full flex flex-row cursor-pointer justify-between items-center hover:bg-gray-200 py-2 px-2 '>
            <div className='w-full transition flex flex-row gap-2 items-center'>
                <UserAvatar src={userAvatar} size='medium' />
                <div className='flex flex-col justify-center text-sm'>
                    <span className='font-semibold break-all line-clamp-1 max-w-[15ch]'>
                        {username}
                    </span>
                    {/* <span className='text-gray-500 break-all line-clamp-1 max-w-[20ch]'> */}
                        {/* {userEmail} */}
                    {/* </span> */}
                </div>
            </div>
            <div className=''>
                <CustomBtn text='Follow' fullRounded type='button' />
            </div>
        </div>
    )
}

export default WhoToFollowItem