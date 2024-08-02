"use client"
import React, { useState } from "react"
import Image from "next/image"

const MyConstituencyBanner = () => {
  const [isVideoVisible, setIsVideoVisible] = useState(false)

  const handleImageClick = () => {
    setIsVideoVisible(true)
  }
  return (
    <div>
      <div>
        {!isVideoVisible ? (
          <div className="relative h-[100vh] w-full">
            <Image
              src="/my_constituency/group.png "
              width={1000}
              height={1000}
              alt="Banner"
              className="w-full h-auto cursor-pointer bg-no-repeat "
              onClick={handleImageClick}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/home_images/play_button.svg"
                width={1000}
                height={1000}
                alt="Play Button"
                className="w-16 h-16 cursor-pointer bg-white rounded-full"
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
    </div>
  )
}

export default MyConstituencyBanner
