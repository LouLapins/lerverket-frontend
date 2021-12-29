import React from 'react'
import { useParams } from 'react-router-dom'
// import useFetch from '../hooks/useFetch'
import { useQuery, gql } from '@apollo/client';

const ITEM = gql`
    query GetItem($id: ID!) {
    item(id: $id) {
      data {
        id
        attributes {
          title
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

    // const { data, loading, error } = useFetch('/api/items/' + id + '?populate=*');

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!</p>
    console.log(data);

    return (
        <div>
        <h5>{data.item.data.attributes.title}</h5>
        <p>{data.item.data.attributes.artist}</p>
        {/* <img src={baseUrl + data.data.attributes.coverImage.data.attributes.formats.small.url} alt="alt-text" /> */}
        </div>
    )
    
}
