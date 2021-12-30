import React from 'react'
import Slider from "react-slick";
import IItemImage from '../interfaces/IItemImage';

interface IImageSliderProps {
  images: IItemImage[];
}

export default function ImageSlider(props: IImageSliderProps) {

  const production = process.env.NODE_ENV === "production";
  const baseUrl = production ? "https://www.yoursite.com" : "http://localhost:1337";

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]}


  return (
    <Slider {...settings}>
      {props.images.map((image: IItemImage) => (
        <div key={image.id}>
          <img src={baseUrl + image.attributes.formats.small.url} alt={image.attributes.alternativeText} />
        </div>
      ))}
    </Slider>
  )
}

