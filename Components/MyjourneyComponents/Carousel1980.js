"use client"
import React from "react"
import Image from "next/image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function SimpleSlider() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
   
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
       
          
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className="bg-[#F2EBCD]  p-10">
      <div className="bg-white shadow-2xl rounded-3xl p-5">
        <Slider {...settings} className="mx-auto container mb-10 pt-10">
          <div className="carousel-slide ">
            <div className="block w-full rounded-2xl h-96 ">
              <Image
                width={500}
                height={550}
                src="/my-journey/carousel-img-1.png"
                alt="Video thumbnail"
                className="w-full h-full rounded-3xl"
              />
            </div>
          </div>

          <div className="carousel-slide">
            <div className="block w-full h-96 rounded-2xl">
              <Image
                width={500}
                height={550}
                src="/my-journey/carousel-img-2.png"
                alt="Video thumbnail"
                className="w-full h-full rounded-3xl"
              />
            </div>
          </div>

          <div className="carousel-slide">
            <div className="block w-full h-96 rounded-2xl">
              <Image
                width={500}
                height={550}
                src="/my-journey/carousel-img-3.png"
                alt="Video thumbnail"
                className="w-full h-full rounded-3xl"
              />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  )
}
