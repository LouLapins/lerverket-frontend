import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client';
import ImageSlider from '../components/ImageSlider';

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

interface ICategoryProps {
    baseUrl: string;
  }

export default function ArtworkDetails(props: ICategoryProps) {

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
        <ImageSlider baseUrl={props.baseUrl} images={data.item.data.attributes.images.data}></ImageSlider>
        </div>
    )
    
}
