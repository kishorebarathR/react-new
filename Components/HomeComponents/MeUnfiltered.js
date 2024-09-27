"use client"
import React, { useEffect, useState, useRef } from "react"
import Image from "next/image"

const LazyIframe = ({ src, title, ...props }) => {
  const [isVisible, setIsVisible] = useState(false)
  const iframeRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect() // Stop observing after iframe loads
        }
      },
      {
        rootMargin: "0px",
        threshold: 0.1,
      }
    )

    if (iframeRef.current) {
      observer.observe(iframeRef.current)
    }

    return () => {
      if (iframeRef.current) {
        observer.unobserve(iframeRef.current)
      }
    }
  }, [])

  return (
    <div ref={iframeRef} {...props}>
      {isVisible ? (
        <iframe
          src={src}
          title={title}
          width="100%"
          height="100%"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      ) : (
        <div style={{ width: "100%", height: "100%" }}>Loading...</div>
      )}
    </div>
  )
}

const MeUnfiltered = () => {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://platform.twitter.com/widgets.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="relative w-100 merriweather-regular">
      <div className="bg-[url('/home_images/gallery-img-07.png')] bg-cover bg-center w-full h-full">
        <span className="absolute inset-0 bg-black opacity-70"></span>
        {/* Overlay */}
        <div className="relative z-10 container mx-auto">
          <h1 className="text-4xl font-bold mb-14 text-center text-white pt-10">
            Me, Unfiltered
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 container mx-auto pb-10 text-white">
            {/* First column (scrollable) */}
            <div className="flex justify-center items-center">
              <a
                className="twitter-timeline"
                data-width="350"
                data-height="500"
                href="https://twitter.com/vdsatheesan?ref_src=twsrc%5Etfw"
              >
                Tweets by vdsatheesan
              </a>
            </div>

            {/* Second column (Instagram logo) */}
            <div className="bg-[#C0C0C0] rounded-lg shadow-md flex items-center justify-center lg:mx-8">
              <Image
                src="/home_images/Instagram-Logo.wine.svg"
                alt="Instagram logo"
                className="w-40 h-40"
                 loading="lazy"
                width={100}
                height={100}
              />
            </div>

            {/* Third column */}
            <div className="flex justify-center items-center">
              <LazyIframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FVDSatheeshanParavur&tabs=timeline&width=350&height=500&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId"
                title="Facebook Page"
                style={{
                  width: "350px",
                  height: "490px",
                  borderRadius: "17px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MeUnfiltered
