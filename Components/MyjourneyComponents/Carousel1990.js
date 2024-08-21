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
    arrows: false,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    className: "center",
    centerPadding: "0px", // Ensure there's no padding around the center image
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: true,
          centerPadding: "0px",
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
    <div className="bg-[#F2EBCD] carosel-body  ">
      <div className="container mx-auto p-5">
        <p className=" text-3xl font-semibold p-3 bg-[#398AF5] w-44 text-center  text-white   ">
          1990-95
        </p>
        <div className="bg-white  rounded-3xl p-3 mt-5 ">
          <Slider {...settings}>
            <div className="w-full rounded-2xl h-80 ">
              <Image
                width={500}
                height={550}
                src="/my-journey/carousel-img-8.png"
                alt="Video thumbnail"
                className="w-full h-full rounded-3xl img-s"
              />
            </div>
            <div className="w-full rounded-2xl h-80">
              <Image
                width={500}
                height={550}
                src="/my-journey/carousel-img-9.png"
                alt="Video thumbnail"
                className="w-full h-full rounded-3xl img-s"
              />
            </div>
            <div className="w-full rounded-2xl h-80">
              <Image
                width={500}
                height={550}
                src="/my-journey/carousel-img-7.png"
                alt="Video thumbnail"
                className="w-full h-full rounded-3xl img-s"
              />
            </div>
            <div className="w-full rounded-2xl h-80 ">
              <Image
                width={500}
                height={550}
                src="/my-journey/carousel-img-8.png"
                alt="Video thumbnail"
                className="w-full h-full rounded-3xl img-s"
              />
            </div>
            <div className="w-full rounded-2xl h-80">
              <Image
                width={500}
                height={550}
                src="/my-journey/carousel-img-9.png"
                alt="Video thumbnail"
                className="w-full h-full rounded-3xl img-s"
              />
            </div>
            <div className="w-full rounded-2xl h-80">
              <Image
                width={500}
                height={550}
                src="/my-journey/carousel-img-7.png"
                alt="Video thumbnail"
                className="w-full h-full rounded-3xl img-s"
              />
            </div>
          </Slider>
          <p className="text-black text-xl merriweather-regular text-left p-5 mt-5">
            Building on his educational foundation, VD Satheeshan pursued a
            Master of Laws (LLM) course at Govt. Law College,
            Thiruvananthapuram. His leadership skills extended to a national
            level when he was selected as the All India Secretary of the
            National Students Union of India (NSUI). Concurrently, he started
            his career as a lawyer at the Kerala High Court.
          </p>
        </div>
      </div>
    </div>
  )
}
