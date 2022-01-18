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
          year
          coverImage {
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

interface IArtworksProps {
  baseUrl: string;
}

export default function Artworks(props: IArtworksProps) {
    
  const { loading, error, data } = useQuery(ITEMS);

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  return (
    <section className='page'>
    <h1 className='heading--big'>Konst</h1>
    <div>
    {data.items.data.map((item: IItem) => (
      <div  key={item.id}>
      <Link className='item-card link' to={`/konst/${item.id}`}>
          <img className='item-card__image' src={props.baseUrl + item.attributes.coverImage.data.attributes.formats.small.url} alt={item.attributes.coverImage.data.attributes.alternativeText} />
          <p><strong>{item.attributes.title}</strong>, {item.attributes.artist}, {item.attributes.year}</p>
       </Link>
       </div>
    ))}
  </div>
  </section>
  )
    
}
