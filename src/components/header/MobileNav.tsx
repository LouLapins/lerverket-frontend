import React, { useEffect, useState } from 'react'
import NavLinks from './NavLinks'
import { CgMenu } from "react-icons/cg"
import { CgClose } from 'react-icons/cg'
import { useLocation } from 'react-router-dom';

export default function MobileNav() {

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open)
    }

    const location = useLocation();

    useEffect(() => {
        setOpen(false);
    }, [location]);

    const menuIcon = <button onClick={handleClick} className='menu-icon'><CgMenu/></button>
    const closeIcon = <button onClick={handleClick} className='menu-icon'><CgClose/></button>

    return (
        <div className='navbar--mobile'>
            {open ? closeIcon : menuIcon}
            {open && <div className='navmenu--mobile'><NavLinks/></div>}
        </div>
    )
}
