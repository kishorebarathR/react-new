"use client"
import React, { useState } from "react"
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
  const [popupVideo, setPopupVideo] = useState(null)

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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

  const openPopup = (videoSrc) => {
    setPopupVideo(videoSrc)
  }

  const closePopup = () => {
    setPopupVideo(null)
  }

  return (
    <>
      <div className="lg:flex container mx-auto pb-8 mt-5">
        <div className="lg:w-[15%] bg-[#233876] flex items-center justify-center px-2">
          <p className="text-white text-2xl font-semibold p-4 text-center">
            Catch Up with Me
          </p>
        </div>
        <div className="relative lg:w-[23%] px-5">
          <p className="text-center font-semibold p-2 bg-[#7C1910] text-white">
            Highlights of the Week
          </p>
          <Image
            width={500}
            height={550}
            src="/home_images/vds_video_img_high.png"
            alt="Video thumbnail"
            className="w-full p-2 bg-[#033B5F]"
          />
          <button className="absolute inset-0 m-auto w-12 h-12 flex items-center justify-center"></button>
        </div>
        <div className="lg:w-[57%] flex justify-center items-center">
          <Slider {...settings} className="mx-auto container flex-1  px-2">
            <div className="p-2">
              <div
                className="relative group cursor-pointer"
                onClick={() =>
                  openPopup("https://www.youtube.com/embed/lBqFlHEhDP0?rel=0")
                }
              >
                <iframe
                  width="166"
                  height="160"
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/lBqFlHEhDP0?rel=0"
                  title="vaikkom sathyagraham @100 | വൈക്കം സത്യഗ്രഹത്തിന് 100 വയസ്"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xs p-3">
                    vaikkom sathyagraham @100 | വൈക്കം സത്യഗ്രഹത്തിന് 100 വയസ്
                  </p>
                </div>
              </div>
            </div>
            <div className="p-2">
              <div
                className="relative group cursor-pointer"
                onClick={() =>
                  openPopup("https://www.youtube.com/embed/a9K_i_H5UVw")
                }
              >
                <iframe
                  width="166"
                  height="160"
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/a9K_i_H5UVw"
                  title="സംഘപരിവാർ ഫാസിസത്തിനെതിരെ നിരന്തരം ചോദ്യങ്ങൾ ഉയരും"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xs p-3">
                    സംഘപരിവാർ ഫാസിസത്തിനെതിരെ നിരന്തരം ചോദ്യങ്ങൾ ഉയരും
                  </p>
                </div>
              </div>
            </div>
            <div className="p-2">
              <div
                className="relative group cursor-pointer"
                onClick={() =>
                  openPopup("https://www.youtube.com/embed/WzchbN_bZZI")
                }
              >
                <iframe
                  width="166"
                  height="160"
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/WzchbN_bZZI"
                  title="ഇരിക്കുന്ന സ്ഥാനത്തോടെങ്കിലും മാന്യത കാണിക്കണം മുഖ്യമന്ത്രി"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xs p-3">
                    ഇരിക്കുന്ന സ്ഥാനത്തോടെങ്കിലും മാന്യത കാണിക്കണം മുഖ്യമന്ത്രി
                  </p>
                </div>
              </div>
            </div>
            <div className="p-2">
              <div
                className="relative group cursor-pointer"
                onClick={() =>
                  openPopup("https://www.youtube.com/embed/nj-OLjaZ8Ws")
                }
              >
                <iframe
                  width="166"
                  height="160"
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/nj-OLjaZ8Ws"
                  title="ദൗര്‍ഭാഗ്യകരമായ സംഭവങ്ങളാണ് നിയമസഭയ്ക്കുള്ളിലും സ്പീക്കറുടെ ഓഫീസിന് മുന്നിലും നടന്നത്."
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xs p-3">
                    ദൗര്‍ഭാഗ്യകരമായ സംഭവങ്ങളാണ് നിയമസഭയ്ക്കുള്ളിലും സ്പീക്കറുടെ
                    ഓഫീസിന് മുന്നിലും നടന്നത്.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-2">
              <div
                className="relative group cursor-pointer"
                onClick={() =>
                  openPopup("https://www.youtube.com/embed/4k9bDn88XUs")
                }
              >
                <iframe
                  width="166"
                  height="160"
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/4k9bDn88XUs"
                  title="Walkout Speech Brahmapuram | ബ്രഹ്‌മപുരം നിയമസഭയിൽ"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xs p-3">
                    | ബ്രഹ്‌മപുരം നിയമസഭയിൽ
                  </p>
                </div>
              </div>
            </div>
            <div className="p-2">
              <div
                className="relative group cursor-pointer"
                onClick={() =>
                  openPopup("https://www.youtube.com/embed/ULmwv-_Ly2M")
                }
              >
                <iframe
                  width="166"
                  height="160"
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/ULmwv-_Ly2M"
                  title="Brahmapuram Public Debate | ബ്രഹ്മപുരം ജനപക്ഷ സംവാദം"
                  frameBorder="0"
                  allow="accelerometer; modestbranding=1; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xs p-3">
                    | ബ്രഹ്മപുരം ജനപക്ഷ സംവാദം
                  </p>
                </div>
              </div>
            </div>

            <div className="p-2">
              <div
                className="relative group cursor-pointer"
                onClick={() =>
                  openPopup("https://www.youtube.com/embed/luIuD3xbtSQ")
                }
              >
                <iframe
                  width="166"
                  height="160"
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/luIuD3xbtSQ"
                  title="  കുട്ടനാടൻ നെൽകർഷക സമര സംഗമം ഉദ്ഘാടന പ്രസംഗം"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xs p-3">
                    കുട്ടനാടൻ നെൽകർഷക സമര സംഗമം ഉദ്ഘാടന പ്രസംഗം
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>

        <div className="w-[5%] p-2 flex-1">
          <div className="w-full h-full bg-[#233876]"></div>
        </div>
      </div>

      {popupVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative w-[90%] h-[90%] max-w-5xl">
            <button
              className="absolute top-2 right-2 text-white text-3xl"
              onClick={closePopup}
            >
              &times;
            </button>
            <iframe
              className="w-full h-full"
              src={popupVideo}
              title="Popup Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  )
}