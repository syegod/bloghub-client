import { Menu, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import clsx from 'clsx';
import { PostMenuProps } from '../../types';




const PostMenu = ({ btn, btnClasses, deleteClick, editClick }: PostMenuProps) => {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                {/* <Menu.Button className={clsx(`inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50`), btnClasses}> */}
                <Menu.Button className={btnClasses}>
                    {btn}
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className={clsx("absolute right-0 z-10 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none w-44")}>
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    onClick={() => editClick()}
                                    className={clsx(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm w-full text-left'
                                    )}
                                >
                                    Edit
                                </button>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    onClick={() => deleteClick()}
                                    className={clsx(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm w-full text-left'
                                    )}
                                >
                                    Delete
                                </button>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

export default PostMenu