import React from 'react'
import { Link } from 'react-router-dom'

export default function Landing() {
    return (
        <>
        <div>
            <Link to="/artworks">Se verk</Link>
            <Link to="/contact">Hitta hit</Link>
        </div>
        <div>
            <Link to="/instagram">Instagram</Link>
            <Link to="/facebook">Facebook</Link>
        </div>
        </>
    )
}
