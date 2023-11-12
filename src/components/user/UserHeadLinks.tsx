import React, { useContext } from 'react'
import { AuthContext } from '../../context';
import UserAvatar from './UserAvatar';

interface UserHeadLinksProps {
    setIsModalOpen: (state: boolean) => void;
}

const UserHeadLinks = ({ setIsModalOpen }: UserHeadLinksProps) => {
    const { isAuth, state, userData } = useContext(AuthContext);
    if (isAuth || state === 'loading') {
        return (
            <UserAvatar size={'medium'} src={userData?.avatarUrl} activeStatus/>
        )
    } else {
        return (
            <button className="rounded-full px-3 py-1 bg-purple-600 text-white font-semibold hover:bg-purple-500 transition select-none" onClick={() => setIsModalOpen(true)}>Sign in</button>
        )
    }
}

export default UserHeadLinks