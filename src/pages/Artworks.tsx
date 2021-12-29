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

export default function Artworks() {

    const production = process.env.NODE_ENV === "production";
    const baseUrl = production ? "https://www.yoursite.com" : "http://localhost:1337";
    
    const { loading, error, data } = useQuery(ITEMS);

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!</p>

    if (data) {
        return (
            <div>
            {data.items.data.map((item: IItem) => (
                <div key={item.id.toString()}>
                    <h5>{item.attributes.title}</h5>
                    <p>{item.attributes.artist}</p>
                    <img src={baseUrl + item.attributes.coverImage.data.attributes.formats.small.url} alt={item.attributes.coverImage.data.attributes.alternativeText} />
                    <Link to={`/artworks/details/${item.id}`}>Read more</Link>
                </div>
            ))}
        </div>
        )
    } else {
        return (
            <div>
                <h2>Error message!</h2>
            </div>
        )
    }


}
