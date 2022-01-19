import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'

export default function SocialLinks() {
    return (
        <div>
            <Link className='socials link' to='/facebook'><FaFacebookF/></Link>
            <Link className='socials link' to='/instagram'><BsInstagram/></Link>
        </div>
    )
}
