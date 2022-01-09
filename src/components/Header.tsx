import React from 'react'
import { Link } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client';
import ICategory from '../interfaces/ICategory';

const CATEGORIES = gql`
    query GetCategories {
        categories {
            data {
                id
                attributes {
                    name
                    slug
                }
            }
        }
    }
`

export default function Header() {

    const { loading, error, data } = useQuery(CATEGORIES);

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!</p>

    console.log(data);

    return (
        <div className="header">
            <Link to="/" className='lerverket__logo link'>Lerverket</Link>
            <nav className='nav'>
                {data.categories.data.map((category: ICategory) => (
                    <Link className='nav__item link' key={category.id} to={`/${category.attributes.slug}`}>
                        {category.attributes.name}
                    </Link>
                ))}
                <Link className='nav__item link' to="/contact">Kontakt</Link>
            </nav>
        </div>
    )
}

