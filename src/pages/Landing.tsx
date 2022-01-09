import React from 'react'
import { Link } from 'react-router-dom'
import { RiInstagramFill, RiFacebookCircleFill } from 'react-icons/ri';
import { MdOutlineArrowForwardIos } from 'react-icons/md';

export default function Landing() {
    return (
        <section className='landing-page'>
        <div className='action-button__wrapper'>
            <h1 className='landing__headline'>Lär dig keramik &amp; skulptur</h1>
            <div className='direction-row'>
            <Link className='action-button link' to="/artworks"> <MdOutlineArrowForwardIos className='action-button__arrow'/>Se verk  </Link>
            <Link className='action-button link' to="/contact"> <MdOutlineArrowForwardIos className='action-button__arrow'/>Hitta hit</Link>
            </div>
        </div>
        <div className='icon-button__wrapper'>
            <Link className='icon-button link' to="/instagram"><RiInstagramFill/></Link>
            <Link className='icon-button link' to="/facebook"><RiFacebookCircleFill/></Link>
        </div>
        </section>
    )
}
