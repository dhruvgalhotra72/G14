import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

const TrendingProducts = (props) => {

    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >

            {
                props.data.map((ele) => {
                    return (
                        <SwiperSlide key={ele.id}>

                            <img
                                src={ele.thumbnail}
                                alt={ele.title}
                            />

                            <p>{ele.title}</p>
                            <p>{ele.price}</p>

                        </SwiperSlide>
                    )
                })
            }

        </Swiper>
    )
}

export default TrendingProducts
