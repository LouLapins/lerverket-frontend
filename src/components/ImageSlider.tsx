import React from 'react'
import Slider from "react-slick";
import IItemImage from '../interfaces/IItemImage';

interface IImageSliderProps {
  images: IItemImage[];
  baseUrl: string;
}

export default function ImageSlider(props: IImageSliderProps) {

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1
 }

  return (
    <Slider {...settings}>
      {props.images.map((image: IItemImage) => (
        <div key={image.id}>
          <img src={props.baseUrl + image.attributes.formats.small.url} alt={image.attributes.alternativeText} />
        </div>
      ))}
    </Slider>
  )
}

