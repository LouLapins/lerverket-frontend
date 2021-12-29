import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client';
import IItemImage from '../interfaces/IItemImage';

const ITEM = gql`
query GetItem($id: ID!) {
    item(id: $id) {
        data {
            id
            attributes {
                title
                artist
                description
                forSale
                publishedAt
                images {
                    data {
                        id
                        attributes {
                            alternativeText
                            formats
                        }
                    }
                }
            }
        }
    }
}
`


export default function ArtworkDetails() {

    const production = process.env.NODE_ENV === "production";
    const baseUrl = production ? "https://www.yoursite.com" : "http://localhost:1337";

    const { id } = useParams();

    const { loading, error, data } = useQuery(ITEM, {
        variables: { id : id }
    });

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!</p>
    console.log(data);

    return (
        <div>
        <h5>{data.item.data.attributes.title}</h5>
        <p>{data.item.data.attributes.artist}</p>
        <div>
            {data.item.data.attributes.images.data.map((image: IItemImage) => (
                <div key={image.id.toString()}>
                    <img src={baseUrl + image.attributes.formats.small.url} alt={image.attributes.alternativeText} />
                </div>
            ))}
        </div>
        </div>
    )
    
}
