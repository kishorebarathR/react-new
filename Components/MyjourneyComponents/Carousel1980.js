"use client"
import React from "react"
import Image from "next/image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    className: "center",
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <div className="mx-auto container my-10 bg-gray-200 carosel-body">
      <Slider {...settings}>
        <div className="w-full rounded-2xl h-80">
          <Image
            width={500}
            height={550}
            src="/my-journey/carousel-img-1.png"
            alt="Video thumbnail"
            className="w-full h-full rounded-3xl img-s"
          />
        </div>
        <div className="w-full rounded-2xl h-80">
          <Image
            width={500}
            height={550}
            src="/my-journey/carousel-img-2.png"
            alt="Video thumbnail"
            className="w-full h-full rounded-3xl img-s"
          />
        </div>
        <div className="w-full rounded-2xl h-80">
          <Image
            width={500}
            height={550}
            src="/my-journey/carousel-img-3.png"
            alt="Video thumbnail"
            className="w-full h-full rounded-3xl img-s"
          />
        </div>

        <div className="w-full rounded-2xl h-80">
          <Image
            width={500}
            height={550}
            src="/my-journey/carousel-img-1.png"
            alt="Video thumbnail"
            className="w-full h-full rounded-3xl img-s"
          />
        </div>
        <div className="w-full rounded-2xl h-80">
          <Image
            width={500}
            height={550}
            src="/my-journey/carousel-img-2.png"
            alt="Video thumbnail"
            className="w-full h-full rounded-3xl img-s"
          />
        </div>
        <div className="w-full rounded-2xl h-80">
          <Image
            width={500}
            height={550}
            src="/my-journey/carousel-img-3.png"
            alt="Video thumbnail"
            className="w-full h-full rounded-3xl img-s"
          />
        </div>
      </Slider>
    </div>
  )
}
