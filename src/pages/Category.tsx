import React from 'react'
import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';
import IArticle from '../interfaces/IArticle';
import ImageSlider from '../components/ImageSlider';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

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

interface ICategoryProps {
    baseUrl: string;
  }

export default function Category(props: ICategoryProps) {

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
                    <h2>{article.attributes.title}</h2>
                    <ReactMarkdown>{article.attributes.text}</ReactMarkdown>
                    <ImageSlider baseUrl={props.baseUrl} images={article.attributes.images.data}></ImageSlider>
                </div>
            ))}
        </div>
        </>
    )
}
