"use client"
import React from "react"
import InmyBookShelfComponents from "@/Components/InMyBookShelfComponents"
import Seo from "@/Components/SeoComponents/Seo"
import { usePathname } from "next/navigation"

const Page = () => {
  const pathname = usePathname()
  const title = "In My Book Shelf-vdsnew"
  const description =
    "Growing up, my love for reading was deeply ingrained in me by my mother, who used to tell me stories from the puranas. As I grew older, my passion for reading continued "
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
      <InmyBookShelfComponents />
    </>
  )
}

export default Page
