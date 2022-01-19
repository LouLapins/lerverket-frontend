import React from 'react'
import { Link } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
import ICategory from '../../interfaces/ICategory'
import NavItem from './NavItem'
import SocialLinks from '../SocialLinks'


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
    
    return (
        <div className='navmenu--mobile'>
            {data.categories.data.map((category: ICategory) => (
                <NavItem key={category.id} category={category}/>
            ))}
            <Link className='nav__item link' to="/kontakt">Kontakt</Link>
            <div className='socials__wrapper--mobile'>
            <SocialLinks/>
            </div>
        </div>   
    )
}

