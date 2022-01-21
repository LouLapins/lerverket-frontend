import React from 'react'
import { Link } from 'react-router-dom'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'
import { motion } from 'framer-motion'

export default function Header() {

    const animateFrom = {y: -50}
    const animateTo = {y: 0}

    return (
        <motion.div className="header" initial={animateFrom} animate={animateTo} transition={{delay: 0.10, type: 'tween', duration: .5}}>
            <Link to="/" className='lerverket__logo link'>Lerverket</Link>
            <MobileNav/>
            <DesktopNav/>
        </motion.div>
    )
}

