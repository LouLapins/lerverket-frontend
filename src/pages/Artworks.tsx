import React from 'react'
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch'

export default function Artworks() {
    const { loading, error, data } = useFetch('http://localhost:1337/api/items');

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!</p>

    return (
        <div>
            {data.map(artwork => (
                <div key={artwork.id}>
                    <h5>{artwork.attributes.artist}</h5>
                    <p>{artwork.attributes.title}</p>
                    <Link to={`/details/${artwork.id}`}>Read more</Link>
                </div>
            ))}
        </div>
    )
}
