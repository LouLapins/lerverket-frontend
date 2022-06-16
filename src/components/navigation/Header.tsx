import React from 'react'
import { Link } from 'react-router-dom'
import DesktopMenu from './DesktopMenu'
import MobileMenu from './MobileMenu'

export default function Header() {

    return (
        <div className="header">
            <Link to="/" className='lerverket__logo link'>Lerverket</Link>
            <MobileMenu/>
            <DesktopMenu/>
        </div>
    )
}

