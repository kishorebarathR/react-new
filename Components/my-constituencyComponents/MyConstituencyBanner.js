"use client"
import React, { useState } from "react"
import Image from "next/image"

const MyConstituencyBanner = () => {
  const [isVideoVisible, setIsVideoVisible] = useState(false)

  const handleImageClick = () => {
    setIsVideoVisible(true)
  }
  return (
    <>
      <div>
        {!isVideoVisible ? (
          <div className="relative lg:h-lvh h-[60vh] w-full">
            <Image
              src="/home_images/home_banner.png"
              alt="Banner"
              className="w-full lg:h-lvh h-[60vh] cursor-pointer bg-no-repeat object-cover"
              width={1000}
              height={1000}
              onClick={handleImageClick}
            />
            <div className="absolute inset-0 flex items-center justify-center ">
              <Image
                src="/play-button1.svg"
                alt="Play Button"
                className="w-24 h-24 cursor-pointer  rounded-full"
                width={1000}
                height={1000}
                onClick={handleImageClick}
              />
            </div>
          </div>
        ) : (
          <iframe
            width="100%"
            height="700"
            src="https://www.youtube.com/embed/tZudcGhRg00"
            title="VDS Hero Banner V2"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="lg:h-lvh h-[60vh]"
          ></iframe>
          
        )}
      </div>
    </>
  )
}

export default MyConstituencyBanner
