import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../App.css';
import imga from "../assets/1.png";
import imgas from "../assets/2.png";

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const HomeComp = () => {
    return (
        <section className='grid grid-cols-2 gap-6'>
            <div className='w-[470px] h-[470px] p-3  bg-white rounded-2xl'>
                <Swiper
                    cssMode={true}
                    navigation={true}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper h-[400px] w-[400px] "
                >
                    <SwiperSlide className='w-[350px] h-[350px]'><img src={imga} alt="" /></SwiperSlide>
                    <SwiperSlide className='w-[350px] h-[350px]'><img src={imgas} alt="" /></SwiperSlide>
                    <SwiperSlide className='w-[350px] h-[350px]'><img src={imga} alt="" /></SwiperSlide>
                    
                </Swiper>
            </div>
            <div className='w-[470px] h-[470px] p-3  bg-white rounded-2xl'>
                <Swiper
                    cssMode={true}
                    navigation={true}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper h-[400px] w-[400px] "
                >
                    <SwiperSlide className='w-[350px] h-[350px]'><img src={imga} alt="" /></SwiperSlide>
                    <SwiperSlide className='w-[350px] h-[350px]'><img src={imgas} alt="" /></SwiperSlide>
                    <SwiperSlide className='w-[350px] h-[350px]'><img src={imga} alt="" /></SwiperSlide>
                    
                </Swiper>
            </div>
            <div className='w-[470px] h-[470px] p-3  bg-white rounded-2xl'>
                <Swiper
                    cssMode={true}
                    navigation={true}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper h-[400px] w-[400px] "
                >
                    <SwiperSlide className='w-[350px] h-[350px]'><img src={imga} alt="" /></SwiperSlide>
                    <SwiperSlide className='w-[350px] h-[350px]'><img src={imgas} alt="" /></SwiperSlide>
                    <SwiperSlide className='w-[350px] h-[350px]'><img src={imga} alt="" /></SwiperSlide>
                    
                </Swiper>
            </div>
            <div className='w-[470px] h-[470px] p-3  bg-white rounded-2xl'>
                <Swiper
                    cssMode={true}
                    navigation={true}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper h-[400px] w-[400px] "
                >
                    <SwiperSlide className='w-[350px] h-[350px]'><img src={imga} alt="" /></SwiperSlide>
                    <SwiperSlide className='w-[350px] h-[350px]'><img src={imgas} alt="" /></SwiperSlide>
                    <SwiperSlide className='w-[350px] h-[350px]'><img src={imga} alt="" /></SwiperSlide>
                    
                </Swiper>
            </div>
        </section>
    );
};

export default HomeComp;
