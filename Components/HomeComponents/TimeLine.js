"use client"
import React, { useState } from "react"
import Link from "next/link"

const Timeline = () => {
  const years = [1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015, 2020]

  // Map each year to a corresponding image path
  const yearImagePaths = {
    1980: "/my-journey/carousel-img-2.png",
    1985: "/my-journey/carousel-img-6.png",
    1990: "/my-journey/carousel-img-8.png",
    1995: "/my-journey/carousel-img-10.png",
    2000: "/my-journey/carousel-img-14.png",
    2005: "/my-journey/carousel-img-16.png",
    2010: "/my-journey/carousel-img-20.png",
    2015: "/my-journey/carousel-img-24.png",
    2020: "/my-journey/carousel-img-26.png",
  }

  const [hoveredYear, setHoveredYear] = useState(null)

  return (
    <div className="w-full bg-[#035C96] p-3 hidden md:block merriweather-bold">
      <div className="relative flex justify-between items-center">
        {years.map((year, index) => (
          <div
            key={year}
            className="relative flex flex-col items-center"
            onMouseEnter={() => setHoveredYear(year)}
            onMouseLeave={() => setHoveredYear(null)}
          >
            {/* Wrap both image and year with the Link */}
            <Link href={`/my-journey?year=${year}`}>
              <div className="flex flex-col items-center cursor-pointer">
                {/* Image shown above the year on hover */}
                {hoveredYear === year && (
                  <img
                    src={yearImagePaths[year]}
                    alt={`Image for ${year}`}
                    className="absolute top-[-75px] w-44 h-16 object-cover"
                  />
                )}
                <span className="text-white text-xl font-semibold">{year}</span>
              </div>
            </Link>

            <div className="w-32  mt-1"></div>
            {/* Line extending to the next year */}
            {index < years.length - 1 && (
              <div
                className="absolute top-1/2 w-full h-px"
                style={{
                  left: `calc(100% / ${years.length} / 2)`,
                  width: `calc(100% - 100% / ${years.length})`,
                }}
              ></div>
            )}
          </div>
        ))}
      </div>

      {/* Ticks below the timeline */}
      <div className="flex justify-between mt-4">
        {Array.from({ length: years.length * 5 }).map((_, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-px h-4 bg-white"> </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Timeline 
