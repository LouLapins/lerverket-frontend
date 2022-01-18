import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client';
import ImageSwiper from '../components/ImageSwiper';

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
                year
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

interface IArtworkDetailsProps {
    baseUrl: string;
  }

export default function ArtworkDetails(props: IArtworkDetailsProps) {

    const { id } = useParams();

    const { loading, error, data } = useQuery(ITEM, {
        variables: { id : id }
    });

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!</p>

    return (
        <section className='artworks-detail-page'>
        <div className='details__wrapper'>
        <ImageSwiper baseUrl={props.baseUrl} images={data.item.data.attributes.images.data}></ImageSwiper>
        <span>{data.item.data.attributes.artist}</span>
        <p>{data.item.data.attributes.title}, {data.item.data.attributes.year}</p>
        <p>{data.item.data.attributes.description}</p>
        {data.item.data.attributes.price ? <p>{data.item.data.attributes.price}</p> : <p>Pris vid förfrågan.</p>}
        {data.item.data.attributes.forSale === false && <p>SÅLD</p>}
        </div>
        </section>
    )
    
}
