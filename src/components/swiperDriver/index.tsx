'use client'

import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import './swiper.css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import './swiper.css'

// import required modules
import { Pagination, Navigation } from 'swiper'

export default function SwiperDriver() {
  return (
    <Swiper
      pagination={{
        type: 'fraction',
      }}
      navigation
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
    </Swiper>
  )
}