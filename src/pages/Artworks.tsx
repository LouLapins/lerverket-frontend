import React from 'react'
import { Link } from 'react-router-dom';
import IItem from '../interfaces/IItem';
import { useQuery, gql } from '@apollo/client';

const ITEMS = gql`
query GetItems {
    items {
      data {
        id
        attributes {
          title
          artist
          publishedAt
          coverImage {
            data {
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

interface IArtworksProps {
  baseUrl: string;
}

export default function Artworks(props: IArtworksProps) {
    
  const { loading, error, data } = useQuery(ITEMS);

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  return (
    <>
    <h1>Verk</h1>
    <div>
    {data.items.data.map((item: IItem) => (
      <div key={item.id}>
          <h5>{item.attributes.title}</h5>
          <p>{item.attributes.artist}</p>
          <img src={props.baseUrl + item.attributes.coverImage.data.attributes.formats.small.url} alt={item.attributes.coverImage.data.attributes.alternativeText} />
          <Link to={`/artworks/${item.id}`}>Read more</Link>
       </div>
    ))}
  </div>
  </>
  )
    
}
