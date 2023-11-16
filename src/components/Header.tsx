import { Link } from "react-router-dom";
import Modal from "./modals/Modal";
import { useState } from "react";
import Auth from "./modals/Auth";
import UserHeadLinks from "./user/UserHeadLinks";

export default function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <>
            <header className="py-3 w-full bg-white opacity-90 dark:bg-gray-800 h-16 fixed top-0 
            left-0 border-b z-10">
                <div className="px-1 md:container xl:px-[7%] mx-auto h-full">
                    <nav className="flex flex-row justify-between items-center h-full">
                        <Link className="font-bold text-xl" to={'/'}>BlogHub</Link>
                        <UserHeadLinks setIsModalOpen={setIsModalOpen} />
                    </nav>
                </div>
            </header>
            <Modal isOpen={isModalOpen} changeState={setIsModalOpen}>
                <Auth />
            </Modal>
        </>
    )
}