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
          <div className="relative h-[100vh] w-full">
            <Image
              src="/home_images/home_banner.png"
              alt="Banner"
              className="w-full h-[100vh] cursor-pointer bg-no-repeat object-cover"
              width={1000}
              height={1000}
              onClick={handleImageClick}
            />
            <div className="absolute inset-0 flex items-center justify-center ">
              <Image
                src="/home_images/play_button.svg"
                alt="Play Button"
                className="w-16 h-16 cursor-pointer bg-white rounded-full"
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
            className="h-[100vh]"
          ></iframe>
          
        )}
      </div>
    </>
  )
}

export default MyConstituencyBanner
