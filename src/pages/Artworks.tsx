import React from 'react'
import { Link } from 'react-router-dom';
import IItem from '../interfaces/IItem';
import { useQuery, gql } from '@apollo/client';
import PageAnimation from "../components/PageAnimation";
import Loader from "../components/Loader";

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

export function Artworks(props: IArtworksProps) {
    
  const { loading, error, data } = useQuery(ITEMS);

  if (loading) return <Loader />
  if (error) return <p>Error!</p>

  return (
    <PageAnimation>
    <section className='page'>
    <h1 className='heading--big'>Konst</h1>
    <div className='artworks-wrapper'>
    {data.items.data.map((item: IItem) => (
      <Link key={item.id} className='item-card link' to={`/konst/${item.id}`}>
          <img className='item-card__image' src={props.baseUrl + item.attributes.coverImage.data.attributes.formats.small.url} alt={item.attributes.coverImage.data.attributes.alternativeText} />
          <p className='item-title'><strong>{item.attributes.title}</strong>, {item.attributes.artist}, {item.attributes.year}</p>
       </Link>
    ))}
  </div>
  </section>
  </PageAnimation>
  )
    
}
