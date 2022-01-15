import React, { useState } from 'react'
import NavLinks from './NavLinks'
import { AiOutlineMenu } from "react-icons/ai"
import { GrClose } from 'react-icons/gr'

export default function MobileNav() {

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open)
    }

    const menuIcon = <button onClick={handleClick}><AiOutlineMenu/></button>
    const closeIcon = <button onClick={handleClick}><GrClose/></button>

    return (
        <div className='navbar--mobile'>
            {open ? closeIcon : menuIcon}
            {open && <NavLinks/>}
        </div>
    )
}
