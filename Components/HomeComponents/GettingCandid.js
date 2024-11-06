"use client"
import React, { useState, useRef, useEffect } from "react"

const VideoPlayer = () => {
  const iframeRef = useRef(null)
  const [currentVideo, setCurrentVideo] = useState({
    url: "https://www.youtube.com/embed/1cmf-VHJys0",
    title: "Episode 36:",
    title2: "Hari Marar, MD And CEO Of Bangalore Airport with V.D.Satheesan",
    description:
      "Hari Marar, MD And CEO Of Bangalore Airport with V.D.Satheesan",
  })
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentVideoId, setCurrentVideoId] = useState("UCpYogDflbQ")
  const [lastPlayedTime, setLastPlayedTime] = useState(0)

  const videos = [
    {
      url: "https://www.youtube.com/embed/1cmf-VHJys0",
      title: "Episode 36:",
      title2: "Hari Marar, MD And CEO Of Bangalore Airport with V.D.Satheesan",
      description:
        "Hari Marar, MD And CEO Of Bangalore Airport with V.D.Satheesan",
    },
    {
      url: "https://www.youtube.com/embed/UCpYogDflbQ",
      title: "Episode 35:",
      title2:
        "Dr.K.G.Thara, Disaster Management expert & academic talks with V.D.Satheesan",
      description:
        "Dr.K.G.Thara, Disaster Management expert & academic talks with V.D.Satheesan",
    },
    {
      url: "https://www.youtube.com/embed/WFQCcOBkFMo",
      title: "Episode 34:",
      title2: "Dialogue with Dr. CJ John, Psychiatrist and VD Satheesan, MLA",
      description:
        "In conversation with Kunhikrishnan K, retired Dy. Director General Doordarshan",
    },

    {
      url: "https://www.youtube.com/embed/SLoAonybiFc",
      title: "Episode 1:",
      title2:
        "Dialogue with Sri. TM Thomas Issac, Finance Minister, Kerala & VD Satheesan, MLA- Full Video",
      description:
        "In conversation with TM Thomas Isaac, Former Finance Minister, Kerala",
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
          <div className="w-full lg:w-1/3 mt-7">
            <div className="flex justify-between items-center bg-[#880505] px-2 pt-2 rounded-t-lg ">
              <h2 className="text-xl text-white text-left">Playlist</h2>
              <h2 className="text-xl text-white text-right">
                 {videos.length} Videos
              </h2>
            </div>

            <div className="flex flex-col h-[85vh] p-4  overflow-y-auto bg-[#880505] rounded-b-lg">
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
