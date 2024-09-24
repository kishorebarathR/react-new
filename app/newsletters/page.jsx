'use client'
import React from 'react';
import NewsLettersComponents from "@/Components/NewsLettersComponents"
import Seo from "@/Components/SeoComponents/Seo"
import { usePathname } from "next/navigation"

const Page = () => {
    const pathname = usePathname()
    const title = "Newsletters-vdsnew"
    const description =
      "Watch this space for my newsletters and download them to stay up to date on my news,  events, and policy initiatives newsletters."
    const path = `${pathname}`
    const metaImage = ""
    return (
        <>
         <Seo
        title={title}
        description={description}
        path={path}
        metaImage={metaImage}
      />
            <NewsLettersComponents/>
        </>
    );
};

export default Page;