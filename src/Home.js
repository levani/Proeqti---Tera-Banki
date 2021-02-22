import React from 'react';
import axios from 'axios';
import './Home.css';
import 'swiper/swiper-bundle.css';
import slide1 from './slide1.png';
import slide2 from './slide2.png';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

// SwiperCore.use([Navigation, Pagination]);
// const swiper = new Swiper('.swiper-container', {
//         navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     }
// });

export default function Home() {

    return (
        <Swiper class="swiper-container"
      
            slidesPerView={1}>
            <SwiperSlide><img class="swiper-container" src={slide1} /></SwiperSlide>
            <SwiperSlide><img class="swiper-container" src={slide2} /></SwiperSlide>

            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </Swiper>
    )
}