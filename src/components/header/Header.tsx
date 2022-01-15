import React from 'react'
import { Link } from 'react-router-dom'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'

export default function Header() {

    return (
        <div className="header">
            <Link to="/" className='lerverket__logo link'>Lerverket</Link>
            <MobileNav/>
            <DesktopNav/>
        </div>
    )
}

