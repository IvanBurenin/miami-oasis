'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import SliderData from '../../database/SliderData'

import styles from './Slider.module.css'
import mainStyles from '../../main.module.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './sliderСostumization.css'

export default function Slider(){
    return(
        <Swiper 
                className={styles.sliderItems}
                modules={[Pagination, Navigation]}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation={true}
            >
                {SliderData.map((slider, index) => (
                    <SwiperSlide style={{backgroundImage: `url('${slider.img}')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} key={index}>
                        <div className={`${mainStyles.container} ${styles.swiperContainer}`}>
                            <p className={`${mainStyles.text} ${styles.sliderText}`}>
                                {slider.text}
                            </p>       
                        </div>
                    </SwiperSlide>
                    )
                )}
        </Swiper>
    )
}