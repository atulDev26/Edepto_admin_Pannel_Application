import { IconLayout2Filled } from '@tabler/icons-react';
import React, { useState } from 'react';
import SideMenu from '../View/SideMenu/SideMenu';

const Layout = ({ children }) => {
    const [isOpen, setIsOpen] = useState(true);

    function handleOpenClose() {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <div className='flex h-dvh w-full bg-background-color'>
                <aside className={`transition-all duration-300 shadow-xl rounded-r-3xl ${isOpen ? 'min-w-64' : 'min-w-0'}  ${isOpen ? 'w-64' : 'w-0'} h-full border bg-white-color`}>
                    <div className=''>
                        <div className={`transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                            <SideMenu />
                        </div>
                    </div>
                </aside>
                <div className='flex flex-col w-full'>
                    <main className='h-full w-full !text-black p-3'>
                        <nav className={`flex justify-start items-center w-full h-10 bg-white-color rounded-2xl px-3 py-6 ease-in-out shadow-xl`}>
                            <div className='cursor-pointer w-fit h-fit' onClick={() => { handleOpenClose() }}>
                                <IconLayout2Filled
                                    fill='#024cc7'
                                    className={`transition-all duration-300 `} />
                            </div>

                        </nav>
                        <div className='p-3'>
                            {children}
                        </div>
                    </main>
                    <footer>
                        <div className={`w-full text-center text-menu-text-color font-normal text-sm`}>
                            <p>© All rights reserved to Edepto / {(new Date().getFullYear())} </p>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    )
}

export default Layout