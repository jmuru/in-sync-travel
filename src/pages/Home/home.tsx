import React, {useState} from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import HoverPhoto from "../../ui-components/HoverPhoto/hoverPhoto";
import "./home.css"
// Import Swiper styles
import 'swiper/css';

const Home = () => {
    SwiperCore.use([Autoplay])
    return (
        <div className="homeWrapper">
            <div className="carouselWrapper">
                <Swiper
                    autoplay={{delay: 3000, disableOnInteraction: true, reverseDirection: true}}
                    speed={500}
                    spaceBetween={0}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <img width="100%" src="https://futuretechnologies.com/wp-content/uploads/2016/05/placeholder.gif"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img width="100%" src="https://designshack.net/wp-content/uploads/placeholder-image.png"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img width="100%" src="https://futuretechnologies.com/wp-content/uploads/2016/05/placeholder.gif"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img width="100%" src="https://designshack.net/wp-content/uploads/placeholder-image.png"/>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="homeContentWrapper">
                <h2>Title</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    A ad aliquam amet assumenda blanditiis, consectetur culpa,
                    dolores doloribus eveniet in ipsum modi nihil nisi placeat
                    porro possimus quo totam voluptatem?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    A ad aliquam amet assumenda blanditiis, consectetur culpa,
                    dolores doloribus eveniet in ipsum modi nihil nisi placeat
                    porro possimus quo totam voluptatem?</p>
                <div className="hoverWrapper">
                    <HoverPhoto
                        url={"https://designshack.net/wp-content/uploads/placeholder-image-368x247.png"}
                        width={200}
                        height={200}
                        title={"Title"}/>
                    <HoverPhoto
                        url={"https://designshack.net/wp-content/uploads/placeholder-image-368x247.png"}
                        width={200}
                        height={200}
                        title={"Title"}/>
                    <HoverPhoto
                        url={"https://designshack.net/wp-content/uploads/placeholder-image-368x247.png"}
                        width={200}
                        height={200}
                        title={"Title"}/>
                </div>
            </div>

        </div>
    )
}

export default Home;