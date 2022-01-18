import React from 'react'
import { useQuery, gql } from '@apollo/client';
import { Link, useParams } from 'react-router-dom';
import IArticle from '../interfaces/IArticle';
import ImageSwiper from '../components/ImageSwiper';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { MdOutlineArrowForwardIos } from 'react-icons/md';

const CATEGORY = gql`
    query GetCategories($slug: StringFilterInput!) {
        categories(filters: {slug: $slug}) {
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
                                text
                                slug
                                buttonText
                                buttonRoute
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

    const { slug } = useParams();

    const { loading, error, data } = useQuery(CATEGORY, {
        variables: { "slug": {"eq": slug} }
    })

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!</p>

    return (
        <section className='page'>
        <h1 className='heading--big'>{data.categories.data[0].attributes.name}</h1>
        <div>
            {data.categories.data[0].attributes.articles.data.map((article: IArticle) => (
                <div key={article.id} id={article.attributes.slug}>
                    <h2 className='heading--medium'>{article.attributes.title}</h2>
                    <ReactMarkdown>{article.attributes.text}</ReactMarkdown>
                    {article.attributes.buttonRoute && <Link className='action-button link' to={article.attributes.buttonRoute}>
                        <MdOutlineArrowForwardIos className='action-button__arrow'/>{article.attributes.buttonText}</Link>}
                    {article.attributes.images.data.length >= 1 && 
                    <ImageSwiper baseUrl={props.baseUrl} images={article.attributes.images.data}></ImageSwiper>}
                </div>
            ))}
        </div>
        </section>
    )
}
