import React from 'react'
import SwiperCore, { Navigation, Pagination, EffectFade } from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/effect-fade';
import IItemImage from '../interfaces/IItemImage';

SwiperCore.use([Navigation,Pagination,EffectFade]);

interface IImageSwiperProps {
    images: IItemImage[];
    baseUrl: string;
  }
  

export default function ImageSwiper (props: IImageSwiperProps) {

  if (props.images.length > 1) {
    return (
      <Swiper modules={[Navigation, Pagination, EffectFade]}
      spaceBetween={30}
      slidesPerView={1}
      className="my-swiper--multiple-images"
      effect='fade'
      loop={true}
      navigation
      pagination={{ clickable: true }}>
      {props.images.map((image: IItemImage) => (
        <SwiperSlide key={image.id}>
          <img src={props.baseUrl + image.attributes.url} alt={image.attributes.alternativeText} />
        </SwiperSlide>
      ))}  
      </Swiper>
    )
  } else {
    return (
      <Swiper slidesPerView={1} className="my-swiper--single-image">
      {props.images.map((image: IItemImage) => (
        <SwiperSlide key={image.id}>
          <img src={props.baseUrl + image.attributes.url} alt={image.attributes.alternativeText} />
        </SwiperSlide>
      ))}  
      </Swiper>
    )
  }
  
}
