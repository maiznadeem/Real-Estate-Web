import React, { useState } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

import 'swiper/css'
import './Residencies.css'
import data from '../../utils/slider.json'
import { sliderSettings } from '../../utils/common'

const Residencies = () => {
    return (
        <section className="r-wrapper">
            <div className="paddings innerWidth r-container">
                <div className="r-head flexColStart">
                    <span className='orangeText'>Best Choices</span>
                    <span className='primaryText'>Popular Residencies</span>
                </div>
                <Swiper {...sliderSettings} >
                    <SliderButtons />
                    {data.map((card, i) => (
                            <SwiperSlide key={i}>
                                <div className="flexColStart r-card">
                                    <img src={card.image} alt="Home" />
                                    <span className="secondaryText r-price">
                                        <span style={{ color: 'orange' }} >$</span>
                                        <span>{card.price}</span>
                                    </span>
                                    <span className='primaryText'>{card.name}</span>
                                    <span className='secondaryText'>{card.detail}</span>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default Residencies


const SliderButtons = () => {
    const swiper = useSwiper();
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const handleSlideChange = () => {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    };

    swiper.on('slideChange', handleSlideChange);
  
    return (
        <div className="flexCenter r-buttons">
            <button onClick={() => swiper.slidePrev()} disabled={isBeginning}>
                <FaArrowLeft />
            </button>
            <button onClick={() => swiper.slideNext()} disabled={isEnd}>
                <FaArrowRight />
            </button>
        </div>
    );
};