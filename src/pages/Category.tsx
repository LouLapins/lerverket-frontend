import React from 'react'
import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';
import IArticle from '../interfaces/IArticle';
import IItemImage from '../interfaces/IItemImage';

const CATEGORY = gql`
    query GetCategory($id: ID!) {
        category(id: $id) {
            data {
                id
                attributes {
                    name
                    articles {
                        data {
                            id
                            attributes {
                                title
                                text
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
            }
        }
    }
`


export default function Category() {

    const production = process.env.NODE_ENV === "production";
    const baseUrl = production ? "https://www.yoursite.com" : "http://localhost:1337";

    const { id } = useParams();

    const { loading, error, data } = useQuery(CATEGORY, {
        variables: { id: id }
    })

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!</p>
    console.log(data);

    return (
        <>
        <h1>{data.category.data.attributes.name}</h1>
        <div>
            {data.category.data.attributes.articles.data.map((article: IArticle) => (
                <div key={article.id}>
                    <h5>{article.attributes.title}</h5>
                    <p>{article.attributes.text}</p>
                    {article.attributes.images.data.map((image: IItemImage) => (
                        <div key={image.id}>
                            <img src={baseUrl + image.attributes.formats.small.url} alt={image.attributes.alternativeText} />
                        </div>
                    ))}
                  
                </div>
            ))}
        </div>
        </>
    )
}
