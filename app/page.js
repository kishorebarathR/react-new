"use client"
import React from "react"
import HomeComponents from "../Components/HomeComponents"
import Seo from "@/Components/SeoComponents/Seo"
import { usePathname } from "next/navigation"
const Page = () => {
  const pathname = usePathname()
  const title = "vdsnew"
  const description =
    "‘Dialogue with VDS’ is a series of weekly in-depth interviews with experts from various fields.In conversation with TM Thomas Isaac, Former Finance Minister, Kerala"
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

      <HomeComponents />
    </div>
  )
}

export default Page
