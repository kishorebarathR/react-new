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
      <p className=" text-3xl font-semibold p-3 bg-[#398AF5] w-44 text-center  text-white   ">1980-85</p>
      <div className="bg-white  rounded-3xl p-3 mt-5 ">
        <Slider {...settings}>
          <div className="w-full rounded-2xl h-80 ">
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
          <div className="w-full rounded-2xl h-80 ">
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
       
        </Slider>
        <p className="text-black text-xl merriweather-regular text-left p-5 mt-5">
          During this period, VD Satheeshan embarked on his educational journey.
          He successfully passed the SSLC examination from High School in
          Panangad and subsequently enrolled at SH College, Thevara for
          Pre-degree studies. Notably, he was elected as the Arts Club secretary
          to the college union and served as a councillor for both the Kerala
          and MG University unions multiple times. His oratory skills were
          evident as he consistently emerged victorious in inter-university
          debate and speech competitions. In addition to his academic
          achievements, he held leadership positions, serving as the KSU unit
          president and Kanayannur Taluk president. VD Satheeshan also pursued a
          Bachelor&apos;s degree in Sociology from Kerala University during this
          period.
        </p>
      </div>
      </div>
    </div>
  )
}
