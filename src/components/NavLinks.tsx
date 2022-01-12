import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import { useQuery, gql } from '@apollo/client';
import ICategory from '../interfaces/ICategory';
import IArticle from '../interfaces/IArticle';

const CATEGORIES = gql`
    query GetCategories {
        categories {
            data {
                id
                attributes {
                    name
                    slug
                    articles {
                        data {
                            id
                            attributes {
                                title
                                slug
                            }
                        }
                    }
                }
            }
        }
    }
`

export default function NavLinks() {
    const { loading, error, data } = useQuery(CATEGORIES);

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!</p>

    // const [open, setOpen] = useState(false);

    // const handleClick = () => {
    //     setOpen(!open)
    // } 

    // const categoryLoop =  category.map((article: IArticle) => (
    //     <HashLink to={`${category.attributes.slug}/${article.attributes.slug}`}>{article.attributes.title}</HashLink>
    // ))

    
    return (
            <nav className='nav'>
                {data.categories.data.map((category: ICategory) => (
                    <div key={category.id}>
                    <button className='nav__item link' >
                        {category.attributes.name}
                    </button>
                    
                    {category.attributes.articles.data.map((article: IArticle) => (
                        <HashLink key={article.id} to={`/${category.attributes.slug}#${article.attributes.slug}`}>{article.attributes.title}</HashLink>
                    ))}
                    </div>
                ))}
                <Link className='nav__item link' to="/contact">Kontakt</Link>
                {/* <HashLink to="/kurser#tekniker">Hash Fragment</HashLink> */}
                
            </nav>   
    )
}

