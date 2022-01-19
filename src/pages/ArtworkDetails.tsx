import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client';
import ImageSwiper from '../components/ImageSwiper';
import { FaFacebookF } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { IoArrowBack } from 'react-icons/io5'

const ITEM = gql`
query GetItem($id: ID!) {
    item(id: $id) {
        data {
            id
            attributes {
                title
                artist
                description
                forSale
                year
                images {
                    data {
                        id
                        attributes {
                            alternativeText
                            url
                        }
                    }
                }
            }
        }
    }
}
`

interface IArtworkDetailsProps {
    baseUrl: string;
  }

export default function ArtworkDetails(props: IArtworkDetailsProps) {

    const { id } = useParams();

    const { loading, error, data } = useQuery(ITEM, {
        variables: { id : id }
    });

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!</p>

    return (
        <section className='artwork-details-page'>
        <div className='details__wrapper'>
        <Link className='details__back__button link' to='/konst'><IoArrowBack className='details__back__icon'/>Tillbaka</Link>
        <ImageSwiper baseUrl={props.baseUrl} images={data.item.data.attributes.images.data}></ImageSwiper>
        <div className='details__text'>
        <span>{data.item.data.attributes.artist}</span>
        <p>{data.item.data.attributes.title}, {data.item.data.attributes.year}</p>
        <p>{data.item.data.attributes.description}</p>
        {data.item.data.attributes.price ? <p>{data.item.data.attributes.price}</p> : <p>Pris vid förfrågan.</p>}
        {data.item.data.attributes.forSale === false && <p>SÅLD</p>}
        </div>
        <div className='details__contacts__wrapper'>
        <div className='details__socials__wrapper'>
            <a className='details__socials link' href='https://www.facebook.com/emmaknowlesceramics'><FaFacebookF/></a>
            <a className='details__socials link' href='https://www.instagram.com/emmaknowles_ceramics'><BsInstagram/></a>
        </div>
        <Link className='details__contact__button link' to="/kontakt">Kontakt</Link>
        </div>
        </div>
        </section>
    )
    
}
