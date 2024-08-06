"use client"
import React from "react"
import Image from "next/image"
import Aos from "aos"
import { useEffect } from "react"
import "aos/dist/aos.css"

const InMyBookShelfPage = () => {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <>
      <div>
        <p className="text-4xl text-[#035C96] text-center font-semibold pt-10">
          In My Book Shelf
        </p>
        <div className="container mx-auto lg:px-5">
          <div className="p-5 merriweather-regular text-xl">
            <p>
              Growing up, my love for reading was deeply ingrained in me by my
              mother, who used to tell me stories from the puranas. As I grew
              older, my passion for reading continued to grow, accompanying me
              through my college years and beyond. I developed an insatiable
              appetite for books of all genres, with a particular fondness for
              history.
            </p>
          </div>
          <div className="p-5 merriweather-regular text-xl">
            <p>
              Books taught me that life’s challenges are transient and continues
              to in me the courage and confidence to keep moving forward, no
              matter what obstacles may arise.The impact that books have had on
              my life is immeasurable. My readings have added value in my
              political career, as I can discern patterns in the events
              unfolding around me and confidently call them out.
            </p>
          </div>

          <div className="p-5 merriweather-regular text-xl">
            <p>
              From Kumaranasan to Orhan Pamuk, my taste in literature varies
              widely, and I make sure to make time in my day for reading, no
              matter how busy I am.
            </p>
          </div>
        </div>
      </div>
      <div>
        <p className="text-4xl text-[#035C96] text-center font-semibold pt-10">
          My Book Recommendations
        </p>
      </div>
      <div className="container lg:flex mx-auto lg:p-20">
        <div className="w-full">
          <Image
            data-aos="fade-up"
            data-aos-duration="800"
            width={450}
            height={200}
            className="p-5"
            src="/in_my_book_shelf/book-1.png"
          />
          <Image
            data-aos="fade-up"
            data-aos-duration="800"
            width={450}
            height={200}
            className="p-5"
            src="/in_my_book_shelf/book_4.png"
          />
          <Image
            data-aos="fade-up"
            data-aos-duration="800"
            width={450}
            height={200}
            className="p-5"
            src="/in_my_book_shelf/book_7.png"
          />
        </div>
        <div className="w-full ">
          <Image
            data-aos="fade-up"
            data-aos-duration="800"
            width={450}
            height={200}
            className="p-5"
            src="/in_my_book_shelf/book-2.png"
          />

          <Image
            data-aos="fade-up"
            data-aos-duration="800"
            width={450}
            height={200}
            className="p-5"
            src="/in_my_book_shelf/book_5.png"
          />
          <Image
            data-aos="fade-up"
            data-aos-duration="800"
            width={450}
            height={200}
            className="p-5"
            src="/in_my_book_shelf/book_8.png"
          />
        </div>
        <div className="w-full">
          <Image
            data-aos="fade-up"
            data-aos-duration="800"
            width={450}
            height={200}
            className="p-5"
            src="/in_my_book_shelf/book-3.png"
          />
          <Image
            data-aos="fade-up"
            data-aos-duration="800"
            width={450}
            height={200}
            className="p-5"
            src="/in_my_book_shelf/book_6.png"
          />

          <Image
            data-aos="fade-up"
            data-aos-duration="800"
            width={450}
            height={200}
            className="p-5"
            src="/in_my_book_shelf/book_9.png"
          />
        </div>
      </div>
    </>
  )
}

export default InMyBookShelfPage
