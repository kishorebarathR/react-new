import React from "react";
import Image from "next/image";
const NewsLettersBanner = () => {
  return (
    <>
      <div className="relative merriweather-regular">
        <Image width={800} height={700} className="w-full" src="/news_letters/News-letter.png"alt="news" loading="lazy" />
        <h6 className="absolute top-1/2 left-1/2 lg:ms-20 transform -translate-x-1/2 -translate-y-1/2 text-center text-[50px] text-white">
         Newsletters
        </h6>
      </div>
    </>
  );
};

export default NewsLettersBanner;
