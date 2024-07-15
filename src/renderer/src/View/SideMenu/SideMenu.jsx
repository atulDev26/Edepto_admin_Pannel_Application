import { IconBrandGrindr, IconHomeFilled } from '@tabler/icons-react';
import React from 'react'
import { NavLink } from 'react-router-dom'

const SideMenu = () => {

    const menuItems = [
        {
            path: '/',
            icon: <IconHomeFilled />,
            text: 'Home'
        },
        {
            path: '/admin-list',
            icon: <IconBrandGrindr />,
            text: 'Admin List'
        }
    ];
    return (
        <nav className='flex flex-col gap-[6px] sm:gap-[6px] md:gap-[6px]'>
            {menuItems?.map((menuItem, index) => (
                <NavLink key={index} to={menuItem?.path} target={menuItem?.text == "Blogs" && "_blank"} className={({ isActive }) =>
                    isActive
                        ? 'relative before:content-[""] before:absolute before:left-0 before:h-full before:w-[10px] before:bg-primary-red bg-primary-blue text-white-color px-4 py-2 flex items-center'
                        : 'relative bg-transparent text-menu-text-color px-4 py-2 flex items-center'
                }>
                    <div className='flex items-center gap-2'>
                        {menuItem.icon}
                        {menuItem.text}
                    </div>
                </NavLink>
            ))}
        </nav>
    )
}

export default SideMenu