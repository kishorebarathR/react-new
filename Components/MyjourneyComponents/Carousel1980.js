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
    <div className="bg-[#F2EBCD] carosel-body  merriweather-regular">
      <div className="container mx-auto p-5">
        <h1 className=" text-3xl font-semibold p-3 bg-[#398AF5] w-44 text-center  text-white merriweather-regular  ">
          1980-85
        </h1>
        <div className="bg-white  rounded-3xl p-3 mt-5 ">
          <Slider {...settings}>
            <div className="w-full rounded-2xl h-80 ">
              <Image
                width={500}
                height={550}
                src="/my-journey/carousel-img-2.png"
                alt="Video thumbnail"
                loading="lazy"
                className="w-full h-full rounded-3xl img-s"
              />
            </div>
            <div className="w-full rounded-2xl h-80">
              <Image
                width={500}
                height={550}
                src="/my-journey/carousel-img-3.png"
                alt="Video thumbnail"
                loading="lazy"
                className="w-full h-full rounded-3xl img-s"
              />
            </div>
            <div className="w-full rounded-2xl h-80">
              <Image
                width={500}
                height={550}
                src="/my-journey/carousel-img-1.png"
                alt="Video thumbnail"
                loading="lazy"
                className="w-full h-full rounded-3xl img-s"
              />
            </div>
            <div className="w-full rounded-2xl h-80 ">
              <Image
                width={500}
                height={550}
                src="/my-journey/carousel-img-2.png"
                alt="Video thumbnail"
                loading="lazy"
                className="w-full h-full rounded-3xl img-s"
              />
            </div>
            <div className="w-full rounded-2xl h-80">
              <Image
                width={500}
                height={550}
                src="/my-journey/carousel-img-3.png"
                alt="Video thumbnail"
                loading="lazy"
                className="w-full h-full rounded-3xl img-s"
              />
            </div>
            <div className="w-full rounded-2xl h-80">
              <Image
                width={500}
                height={550}
                src="/my-journey/carousel-img-1.png"
                alt="Video thumbnail"
                loading="lazy"
                className="w-full h-full rounded-3xl img-s"
              />
            </div>
          </Slider>

          <p className="text-black text-xl merriweather-regular text-left p-5 mt-5">
            During this period, VD Satheeshan embarked on his educational
            journey. He successfully passed the SSLC examination from High
            School in Panangad and subsequently enrolled at SH College, Thevara
            for Pre-degree studies. Notably, he was elected as the Arts Club
            secretary to the college union and served as a councillor for both
            the Kerala and MG University unions multiple times. His oratory
            skills were evident as he consistently emerged victorious in
            inter-university debate and speech competitions. In addition to his
            academic achievements, he held leadership positions, serving as the
            KSU unit president and Kanayannur Taluk president. VD Satheeshan
            also pursued a Bachelor&apos;s degree in Sociology from Kerala
            University during this period.
          </p>
          <div className="flex flex-row px-4 pb-5">
            <div className="flex-col">
              <a
                href="https://www.facebook.com/share_channel/?link=https%3A%2F%2Fvdsatheesan.com%2Fmy-journey%2F&app_id=966242223397117&source_surface=external_reshare&display&hashtag"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="elementor-share-btn__icon">
                  <svg
                    className="e-font-icon-svg e-fab-facebook w-10 fill-current text-[#36528C] hover:text-black transition-colors duration-300"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 44.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                  </svg>
                </span>
              </a>
            </div>
            <div className="flex-col px-2">
              <a
                href="https://x.com/intent/post?text=+https%3A%2F%2Fvdsatheesan.com%2Fmy-journey%2F"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="e-font-icon-svg e-fab-twitter w-10 fill-current text-white hover:bg-black transition-colors duration-300 bg-blue-400 rounded-full p-1"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.897-.957-2.178-1.554-3.594-1.554-2.723 0-4.932 2.207-4.932 4.932 0 .386.045.762.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.423.722-.666 1.561-.666 2.475 0 1.71.87 3.217 2.188 4.099-.807-.026-1.566-.247-2.228-.616v.062c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.624-.03-.923-.086.631 1.953 2.445 3.376 4.6 3.414-1.685 1.32-3.808 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.179 1.396 4.768 2.212 7.548 2.212 9.056 0 14-7.496 14-13.986 0-.209 0-.423-.015-.637.961-.695 1.8-1.562 2.457-2.549z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
