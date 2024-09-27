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
      <FaArrowRight />
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
      <FaArrowCircleLeft />
    </div>
  )
}

export default function SimpleSlider() {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
      <div className="text-2xl font-semibold text-center lg:p-10 p-2 pt-10 merriweather-regular">
        {/* <p className="text-2xl">
          Stay updated with the latest announcements and updates on my efforts
          to create positive change in the country.
        </p> */}
      </div>
      <div className="lg:flex container mx-auto ">
        <div className="lg:w-[15%] lg:my-10 bg-[#233876] flex items-center justify-center px-2">
          <p className="text-white text-3xl font-semibold p-4 text-center merriweather-regular ">
            What Drives Me
          </p>
        </div>
        <div className="lg:w-[82%] merriweather-regular">
          <Slider {...settings} className="mx-auto container flex-1 px-2 ">
            <div className="p-2">
              <div className="relative group">
                <Image
                  width={500}
                  height={550}
                  src="/sincere_images/what_drives_me_images/education_img.png"
                  alt="Slide 2"
                  className="w-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xl">Education</p>
                </div>
              </div>
            </div>

            <div className="p-2">
              <div className="relative group ">
                <Image
                  width={500}
                  height={550}
                  src="/sincere_images/what_drives_me_images/secularism_img.png"
                  alt="Slide 2"
                  className="w-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xl">Secularism</p>
                </div>
              </div>
            </div>

            <div className="p-2">
              <div className="relative group ">
                <Image
                  width={500}
                  height={550}
                  src="/sincere_images/what_drives_me_images/women_img.jpg"
                  alt="Slide 2"
                  className="w-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xl">Women&apos;s Rights</p>
                </div>
              </div>
            </div>

            <div className="p-2">
              <div className="relative group ">
                <Image
                  width={500}
                  height={550}
                  src="/sincere_images/what_drives_me_images/pr_img.png"
                  alt="Slide 2"
                  className="w-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xl">Democracy</p>
                </div>
              </div>
            </div>

            <div className="p-2">
              <div className="relative group ">
                <Image
                  width={500}
                  height={550}
                  src="/sincere_images/what_drives_me_images/env_img.png"
                  alt="Slide 2"
                  className="w-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xl">Environment</p>
                </div>
              </div>
            </div>

            <div className="p-2">
              <div className="relative group ">
                <Image
                  width={500}
                  height={550}
                  src="/sincere_images/what_drives_me_images/jail_img.png"
                  alt="Slide 2"
                  className="w-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xl">Personal Freedom</p>
                </div>
              </div>
            </div>

            <div className="p-2">
              <div className="relative group ">
                <Image
                  width={500}
                  height={550}
                  src="/sincere_images/what_drives_me_images/speech-01.jpg"
                  alt="Slide 2"
                  className="w-full  "
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xl">Progressive Ideals</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>

        <div className="w-[3%] lg:my-10 hidden md:block ">
          <div className="w-full h-full bg-[#233876]  flex-1 "></div>
        </div>
      </div>
    </>
  )
}
