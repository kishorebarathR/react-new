"use client"
import React, { useState, useRef, useEffect } from "react"

const VideoPlayer = () => {
  const iframeRef = useRef(null)
  const [currentVideo, setCurrentVideo] = useState({
    url: "https://www.youtube.com/embed/luIuD3xbtSQ",
  })
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentVideoId, setCurrentVideoId] = useState("UCpYogDflbQ")
  const [lastPlayedTime, setLastPlayedTime] = useState(0)

  const videos = [
    {
      url: "https://www.youtube.com/embed/luIuD3xbtSQ",
    },
    {
      url: "https://www.youtube.com/embed/a9K_i_H5UVw",
    },
    {
      url: "https://www.youtube.com/embed/WzchbN_bZZI",
    },
    {
      url: "https://www.youtube.com/embed/nj-OLjaZ8Ws",
    },
    {
      url: "https://www.youtube.com/embed/4k9bDn88XUs",
    },
    {
      url: "https://www.youtube.com/embed/ULmwv-_Ly2M",
    },
    {
      url: "https://www.youtube.com/embed/mZ5Jac2pDXU",
    },
    {
      url: "https://www.youtube.com/embed/lBqFlHEhDP0",
    },
  ]

  // Listen to messages from the iframe to track playback time
  useEffect(() => {
    const handleMessage = (event) => {
      if (
        event.data &&
        typeof event.data === "string" &&
        event.data.includes("infoDelivery")
      ) {
        const data = JSON.parse(event.data.slice(event.data.indexOf("{")))
        if (data && data.info && data.info.currentTime) {
          setLastPlayedTime(data.info.currentTime)
        }
      }
    }

    window.addEventListener("message", handleMessage)
    return () => window.removeEventListener("message", handleMessage)
  }, [])

  const selectVideo = (video) => {
    const videoId = video.url.split("/")[4]

    if (videoId === currentVideoId && isPlaying) {
      iframeRef.current.contentWindow.postMessage(
        '{"event":"command","func":"pauseVideo","args":""}',
        "*"
      )
      setIsPlaying(false)
    } else {
      setCurrentVideo(video)
      setCurrentVideoId(videoId)
      setIsPlaying(true)

      // Resume from last played time
      setTimeout(() => {
        iframeRef.current.contentWindow.postMessage(
          `{"event":"command","func":"seekTo","args":[${lastPlayedTime}, true]}`,
          "*"
        )
      }, 500)
    }
  }

  return (
    <div className="bg-[url('/home_images/about_satheesan_background.png')] w-full h-full pb-10 merriweather-regular">
      <h1 className="text-4xl text-[#035C96] text-center font-semibold pt-10">
        Getting Candid
      </h1>
      <h3 className="text-2xl font-semibold text-center pt-4">
        ‘Dialogue with VDS’ is a series of weekly in-depth interviews with
        experts from various fields
      </h3>

      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Main video player */}
          <div className="w-full lg:w-2/3 mt-7">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                ref={iframeRef}
                width="900"
                height="500"
                src={`${currentVideo.url}?enablejsapi=1&autoplay=${
                  isPlaying ? 1 : 0
                }`}
                title="Main Video Player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="mt-4">
              <p className="text-2xl font-semibold">{currentVideo.title}</p>
              <p className="text-xl mt-2">{currentVideo.description}</p>
            </div>
            <div className="mt-5">
              <a
                href="https://www.youtube.com/c/dialoguewithvds/videos"
                target="_blank"
                className="focus:outline-none text-white bg-[#880505] hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              >
                Subscribe
              </a>
            </div>
          </div>

          {/* Playlist */}
          <div className="w-full lg:w-1/3">
            <div className="flex flex-col h-[85vh] p-3 mt-7 overflow-y-auto bg-[#880505] rounded-lg">
              <h2 className="text-xl bg-[#880505] rounded-lg text-white text-center">
                Playlist
              </h2>
              <div className="flex flex-col gap-2 mt-3">
                {videos.map((video, index) => (
                  <div
                    key={index}
                    className={`cursor-pointer ${
                      currentVideoId === video.url.split("/")[4]
                        ? "bg-gray-700"
                        : ""
                    }`}
                    onClick={() => selectVideo(video)}
                  >
                    <img
                      src={`https://img.youtube.com/vi/${
                        video.url.split("/")[4]
                      }/0.jpg`}
                      alt={`Thumbnail for ${video.title}`}
                      className="w-full h-40 object-cover rounded-lg hover:opacity-80 transition"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoPlayer
