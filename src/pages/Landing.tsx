import React from 'react'
import { Link } from 'react-router-dom'
import { RiInstagramFill, RiFacebookCircleFill } from "react-icons/ri";

export default function Landing() {
    return (
        <>
        <h2>Lär dig keramik &amp; skulptur</h2>
        <div>
            <Link to="/artworks">Se verk</Link>
            <Link to="/contact">Hitta hit</Link>
        </div>
        <div>
            <Link to="/instagram"><RiInstagramFill/></Link>
            <Link to="/facebook"><RiFacebookCircleFill/></Link>
        </div>
        </>
    )
}
