"use client"
import React from "react"
import Image from "next/image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { FaArrowCircleLeft, FaArrowRight } from "react-icons/fa"

const NextArrow = (props) => {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        zIndex: 1,
        backgroundColor: "black",
        borderRadius: "50%",
      }}
      onClick={onClick}
    >
      {/* <FaArrowRight /> */}
    </div>
  )
}

const PrevArrow = (props) => {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        zIndex: 1,
        backgroundColor: "black",
        borderRadius: "50%",
      }}
      onClick={onClick}
    >
      {/* <FaArrowCircleLeft /> */}
    </div>
  )
}

export default function SimpleSlider() {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
    <>
      <div className="bg-[#D3EBE4] p-14">
        <div className="bg-white shadow-2xl rounded-3xl  p-5 ">
          <Slider {...settings} className="mx-auto container mb-10 pt-10">
            <div className="">
              <div className="block w-full rounded-2xl h-96  ">
                <Image
                  width={500}
                  height={550}
                  src="/my-journey/carousel-img-4.png "
                  alt="Video thumbnail"
                  className="w-full h-full rounded-3xl "
                />
              </div>
            </div>

            <div className="">
              <div className="block w-full rounded-2xl h-96  ">
                <Image
                  width={500}
                  height={550}
                  src="/my-journey/carousel-img-5.png"
                  alt="Video thumbnail"
                  className="w-full h-full  rounded-3xl"
                />
              </div>
            </div>

            <div className="">
              <div className="block w-full rounded-2xl h-96  ">
                <Image
                  width={500}
                  height={550}
                  src="/my-journey/carousel-img-6.png"
                  alt="Video thumbnail"
                  className="w-full h-full rounded-3xl"
                /> 
                
              </div>
            </div>
          </Slider>
          <p className="container mx-auto text-xl">
            Continuing his commitment to education and leadership, VD Satheeshan
            joined the postgraduate diploma course in social service at Rajagiri
            College of Social Science, Kalamassery. His dedication to student
            politics continued, and he was elected as a councillor to the MG
            University union. Notably, he rose to prominence by being elected as
            the chairman of the MG University union. In parallel, he pursued an
            LLB degree from Kerala Law Academy Law College.
          </p>
        </div>
      </div>
    </>
  )
}
