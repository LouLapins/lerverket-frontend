import React from 'react'
import { useQuery, gql } from '@apollo/client';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import SocialLinks from '../components/SocialLinks';

const CONTACT = gql`
query GetContact {
    contact {
      data {
        id
        attributes {
          details
          title
          slug
        }
      }
    }
  }`

export default function Contact() {

    const { loading, error, data } = useQuery(CONTACT);

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!</p>

    return (
        <section className='page'>
        <div className='contact__wrapper'>
        <h1 className='heading--big'>{data.contact.data.attributes.title}</h1>
        <ReactMarkdown>{data.contact.data.attributes.details}</ReactMarkdown>
        <div className='contact__socials'>
        <SocialLinks/>
        </div>
        </div>
        </section>
    )
}
