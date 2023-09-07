import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const Banner = () => {
    const image =[
        "https://res.cloudinary.com/dugcmkito/image/upload/v1671218589/Ecommerce_Landing_Page_copy_5e5c96146b.png",
        "https://res.cloudinary.com/dugcmkito/image/upload/v1671218589/Ecommerce_Landing_Page_copy_5e5c96146b.png",
        "https://res.cloudinary.com/dugcmkito/image/upload/v1671218589/Ecommerce_Landing_Page_copy_5e5c96146b.png",
        "https://res.cloudinary.com/dugcmkito/image/upload/v1671218589/Ecommerce_Landing_Page_copy_5e5c96146b.png",
        "https://res.cloudinary.com/dugcmkito/image/upload/v1671218589/Ecommerce_Landing_Page_copy_5e5c96146b.png",
        "https://res.cloudinary.com/dugcmkito/image/upload/v1671218589/Ecommerce_Landing_Page_copy_5e5c96146b.png",
        "https://res.cloudinary.com/dugcmkito/image/upload/v1671218589/Ecommerce_Landing_Page_copy_5e5c96146b.png",
        "https://res.cloudinary.com/dugcmkito/image/upload/v1671218589/Ecommerce_Landing_Page_copy_5e5c96146b.png",
        "https://res.cloudinary.com/dugcmkito/image/upload/v1671218589/Ecommerce_Landing_Page_copy_5e5c96146b.png",
        "https://res.cloudinary.com/dugcmkito/image/upload/v1671218589/Ecommerce_Landing_Page_copy_5e5c96146b.png",
        "https://res.cloudinary.com/dugcmkito/image/upload/v1671218589/Ecommerce_Landing_Page_copy_5e5c96146b.png",
      ]
  return (
    <div>  <Swiper
    navigation={true}
    // modules={[Navigation]}
    spaceBetween={50}
    slidesPerView={1}
    autoplay={{
        delay: 3000,
    }}
    loop={true}
    onSlideChange={() => console.log("slide change")}
    onSwiper={(swiper) => console.log(swiper)}
>
  {
    image?.map((data,index)=>{
      return(
        <SwiperSlide>
        <div className="relative h-500" key={index}>
            <img src={data} alt='img'/>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                <p className="text-lg">Yoga for everybody</p>
                <h1 className="text-6xl mt-4 font-bold">Welcome to Serenity</h1>
            </div>
        </div>
    </SwiperSlide>
      )
    })
  }
</Swiper></div>
  )
}

export default Banner