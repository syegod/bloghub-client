import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext';
import UserAvatar from './UserAvatar';
import { UserHeadLinksProps } from '../../types';



const UserHeadLinks = ({ setIsModalOpen }: UserHeadLinksProps) => {
    const { isAuth, state, userData } = useContext(AuthContext);
    if (isAuth || state === 'loading') {
        return (
            <UserAvatar size={'medium'} src={userData?.avatarUrl} activeStatus/>
        )
    } else {
        return (
            <button className="rounded-full px-3 py-1 bg-gray-900 text-white font-semibold hover:bg-gray-700 transition select-none" onClick={() => setIsModalOpen(true)}>Sign in</button>
        )
    }
}

export default UserHeadLinks