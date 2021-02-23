import React from 'react';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
    useHistory
} from "react-router-dom"
import './Home.css';
import 'swiper/swiper-bundle.css';
import slide1 from './slide1.png';
import slide2 from './slide2.png';
import sesxi1 from './sesxi1.png';
import sesxi2 from './sesxi2.png';
import barati1 from './barati1.png';
import barati2 from './barati2.png';
import news1 from './news1.png';
import news2 from './news2.png';
import news3 from './news3.png';
import news4 from './news4.png';
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
        // სლაიდერი
        <div>
            <Swiper class="swiper-container"

                slidesPerView={1}>
                <SwiperSlide><img class="swiper-container" src={slide1} /></SwiperSlide>
                <SwiperSlide><img class="swiper-container" src={slide2} /></SwiperSlide>

                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </Swiper>

            {/* იპოთეკური სესხები */}

            <div className="div"><h2 className="title">იპოთეკური სესხები</h2></div>
            <div className="div2"><Link className="title2">იხილეთ ყველა</Link></div>


            <div className="sesxi">
                <Link><img className="sesxi1" src={sesxi1} /></Link>
                <div className="title3"><h2>შეიძინე ბინა ისარგებლე სუბსიდიით</h2></div>
            </div>


            <div className="sesxi">
                <Link><img className="sesxi2" src={sesxi2} /></Link>
                <div className="title4"><h2>იპოთეკური სესხი 12%-დან</h2></div>
            </div>



            {/* პლასტიკური ბარათები */}
            <div className="div"><h2 className="title">პლასტიკური ბარათები</h2> </div>
            <div className="div2"> <Link className="title2">იხილეთ ყველა</Link> </div>

            <div className="sesxi">
                <Link><img className="sesxi1" src={barati2} /></Link>
                <div className="title5"><h2>უნივერსალური ბარათი ყველა შემთხვევისთვის</h2></div>
            </div>

            <div className="sesxi">
                <Link><img className="sesxi2" src={barati1} /></Link>
                <div className="title6"><h2>ვიზა ბარათები გახდი სოლიდური</h2></div>
            </div>



            {/* სიახლეები */}
            
           

        </div>
    )
}

