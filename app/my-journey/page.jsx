"use client"
import React from "react"
import Myjourney from "@/Components/MyjourneyComponents"
import Seo from "@/Components/SeoComponents/Seo"
import { usePathname } from "next/navigation"
const Page = () => {
  const pathname = usePathname()
  const title = "My Journey-vdsnew"
  const description =
    "During this period, VD Satheeshan embarked on his educational journey. He successfully passed the SSLC examination from High School in Panangad and subsequently enrolled at SH College"
  const path = `${pathname}`
  const metaImage = ""
  return (
    <div>
      <Seo
        title={title}
        description={description}
        path={path}
        metaImage={metaImage}
      />
      <Myjourney />
    </div>
  )
}

export default Page
