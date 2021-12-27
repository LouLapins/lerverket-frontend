import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

export default function ArtworkDetails() {

    const production = process.env.NODE_ENV === "production";
    const baseUrl = production ? "https://www.yoursite.com" : "http://localhost:1337";

    const { id } = useParams();

    const { data, loading, error } = useFetch('/api/items/' + id + '?populate=*');

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!</p>
    console.log(data);

    return (
        <div>
        <h5>{data.data.attributes.title}</h5>
        <p>{data.data.attributes.artist}</p>
        <img src={baseUrl + data.data.attributes.coverImage.data.attributes.formats.small.url} alt="alt-text" />
        </div>
    )
    
}
