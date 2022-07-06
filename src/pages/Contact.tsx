import React from "react";
import { useQuery, gql } from "@apollo/client";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import SocialLinks from "../components/SocialLinks";
import PageAnimation from "../components/PageAnimation";
import Loader from "../components/Loader";

const CONTACT = gql`
  query GetContact {
    contact {
      data {
        id
        attributes {
          details
          title
          slug
          image {
            data {
              id
              attributes {
                url
                alternativeText
              }
            }
          }
        }
      }
    }
  }
`;

export default function Contact() {
  const { loading, error, data } = useQuery(CONTACT);

  if (loading) return <Loader />;
  if (error) return <p>Error!</p>;

  return (
    <PageAnimation>
      <section className="article-page contact-page">
        <h1 className="article-page-heading heading--big">
          {data.contact.data.attributes.title}
        </h1>
        <div className="article">
          <div className="article__text">
            <ReactMarkdown>
              {data.contact.data.attributes.details}
            </ReactMarkdown>
            <div className="contact__socials">
              <SocialLinks />
            </div>
          </div>
          <img
            className="contact-image"
            src={
              data.contact.data.attributes.image.data.attributes.url
            }
            alt={
              data.contact.data.attributes.image.data.attributes.alternativeText
            }
          />
        </div>
      </section>
    </PageAnimation>
  );
}
