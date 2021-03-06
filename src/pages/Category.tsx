import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import IArticle from "../interfaces/IArticle";
import ImageSwiper from "../components/ImageSwiper";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import PageAnimation from "../components/PageAnimation";
import Loader from "../components/Loader";

const CATEGORY = gql`
  query GetCategories($slug: StringFilterInput!) {
    categories(filters: { slug: $slug }) {
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
                      url
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
`;

export default function Category() {
  const { slug } = useParams();

  const { loading, error, data } = useQuery(CATEGORY, {
    variables: { slug: { eq: slug } },
  });

  if (loading) return <Loader />;
  if (error) return <p>Error!</p>;

  return (
    <PageAnimation>
      <section className="article-page">
        <h1 className="article-page-heading heading--big">
          {data.categories.data[0].attributes.name}
        </h1>
        <div>
          {data.categories.data[0].attributes.articles.data.map(
            (article: IArticle) => (
              <div
                className="article"
                key={article.id}
                id={article.attributes.slug}
              >
                <div className="article__text">
                  <h2 className="heading--medium">
                    {article.attributes.title}
                  </h2>
                  <ReactMarkdown>{article.attributes.text}</ReactMarkdown>
                  {article.attributes.buttonRoute && (
                    <Link
                      className="article__button link"
                      to={article.attributes.buttonRoute}
                    >
                      <MdOutlineArrowForwardIos className="action-button__arrow" />
                      {article.attributes.buttonText}
                    </Link>
                  )}
                </div>
                {article.attributes.images.data.length >= 1 && (
                  <div className="article__image">
                    <ImageSwiper
                      images={article.attributes.images.data}
                    ></ImageSwiper>
                  </div>
                )}
                <div className="color-block"></div>
              </div>
            )
          )}
        </div>
      </section>
    </PageAnimation>
  );
}
