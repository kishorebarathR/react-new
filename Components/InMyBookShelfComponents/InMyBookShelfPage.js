"use client"
import React, { useEffect, useState } from "react"
import Image from "next/image"
import Aos from "aos"
import "aos/dist/aos.css"

const books = [
  "/in_my_book_shelf/book-1.png",
  "/in_my_book_shelf/book-2.png",
  "/in_my_book_shelf/book-3.png",
  "/in_my_book_shelf/book_4.png",
  "/in_my_book_shelf/book_5.png",
  "/in_my_book_shelf/book_6.png",
  "/in_my_book_shelf/book_7.png",
  "/in_my_book_shelf/book_8.png",
  "/in_my_book_shelf/book_9.png",
  "/in_my_book_shelf/book_10.png",
  "/in_my_book_shelf/book_11.png",
  "/in_my_book_shelf/book_12.png",
  "/in_my_book_shelf/book_13.png",
  "/in_my_book_shelf/book_14.png",
  "/in_my_book_shelf/book_15.png",
  "/in_my_book_shelf/book_16.png",
  "/in_my_book_shelf/book_17.png",
  "/in_my_book_shelf/book_18.png",
  "/in_my_book_shelf/book_19.png",
  "/in_my_book_shelf/book_20.png",
  "/in_my_book_shelf/book_21.png",
  "/in_my_book_shelf/book_22.png",
  "/in_my_book_shelf/book_23.png",
  "/in_my_book_shelf/book_24.png",
  "/in_my_book_shelf/book_25.png",
  "/in_my_book_shelf/book_26.png",
  "/in_my_book_shelf/book_27.png",
  "/in_my_book_shelf/book_28.png",
  "/in_my_book_shelf/book_29.png",
  "/in_my_book_shelf/book_30.png",
  "/in_my_book_shelf/book_31.png",
  "/in_my_book_shelf/book_32.png",
  "/in_my_book_shelf/book_33.png",
  "/in_my_book_shelf/book_34.png",
  "/in_my_book_shelf/book_35.png",
  "/in_my_book_shelf/book_36.png",
  "/in_my_book_shelf/book_37.png",
  "/in_my_book_shelf/book_38.png",
  "/in_my_book_shelf/book_39.png",
  "/in_my_book_shelf/book_40.png",
  "/in_my_book_shelf/book_41.png",
  "/in_my_book_shelf/book_42.png",
  "/in_my_book_shelf/book_43.png",
  "/in_my_book_shelf/book_44.png",
  "/in_my_book_shelf/book_45.png",
  "/in_my_book_shelf/book_46.png",
  "/in_my_book_shelf/book_47.png",
  "/in_my_book_shelf/book_48.png",
  "/in_my_book_shelf/book_49.png",
  "/in_my_book_shelf/book_50.png",
  "/in_my_book_shelf/book_51.png",
  "/in_my_book_shelf/book_52.png",
  "/in_my_book_shelf/book_53.png",
  "/in_my_book_shelf/book_54.png",
 
]

const InMyBookShelfPage = () => {
  const [visibleBooks, setVisibleBooks] = useState(9)

  useEffect(() => {
    Aos.init()
  }, [])

  const loadMoreBooks = () => {
    setVisibleBooks((prev) => prev + 9)
  }

  return (
    <>
      <div>
        <h1 className="text-4xl text-[#035C96] text-center font-semibold pt-10 merriweather-regular">
          In My Book Shelf
        </h1>
        <div className="container mx-auto lg:px-5">
          <div className="p-5 merriweather-regular text-xl">
            <h2>
              Growing up, my love for reading was deeply ingrained in me by my
              mother, who used to tell me stories from the puranas. As I grew
              older, my passion for reading continued to grow, accompanying me
              through my college years and beyond. I developed an insatiable
              appetite for books of all genres, with a particular fondness for
              history.
            </h2>
          </div>
          <div className="p-5 merriweather-regular text-xl">
            <h2>
              Books taught me that life’s challenges are transient and continues
              to instill in me the courage and confidence to keep moving
              forward, no matter what obstacles may arise. The impact that books
              have had on my life is immeasurable. My readings have added value
              in my political career, as I can discern patterns in the events
              unfolding around me and confidently call them out.
            </h2>
          </div>

          <div className="p-5 merriweather-regular text-xl">
            <h3>
              From Kumaranasan to Orhan Pamuk, my taste in literature varies
              widely, and I make sure to make time in my day for reading, no
              matter how busy I am.
            </h3>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-4xl text-[#035C96] text-center font-semibold pt-5 merriweather-regular">
          My Book Recommendations
        </h3>
      </div>

      <div className="container mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 pb-5">
          {books.slice(0, visibleBooks).map((src, index) => (
            <Image
              key={index}
              data-aos="fade-up"
              data-aos-duration="800"
              width={450}
              height={200}
              className="pt-10 w-96"
              src={src}
              alt={`book-${index + 1}`}
            />
          ))}
        </div>
        {visibleBooks < books.length && (
          <div className="flex justify-center pb-5">
            <button
              onClick={loadMoreBooks}
              className="mt-5 px-4 py-2  bg-[#035C96] text-white text-lg font-semibold rounded-lg hover:bg-[#023f6b] transition"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default InMyBookShelfPage
