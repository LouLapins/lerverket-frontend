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
            <Link to="/"><h1>Lerverket</h1></Link>
            <nav>
                {data.categories.data.map((category: ICategory) => (
                    <Link key={category.id} to={`/category/${category.id}`}>
                        {category.attributes.name}
                    </Link>
                ))}
            </nav>
        </div>
    )
}

