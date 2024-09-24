"use client"
import React from "react"
import GetInTouchComponents from "@/Components/GetInTouchComponents"
import Seo from "@/Components/SeoComponents/Seo"
import { usePathname } from "next/navigation"

const Page = () => {
    const pathname = usePathname()
    const title = "Newsletters-vdsnew"
    const description =
      ""
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
      <GetInTouchComponents />
    </>
  )
}

export default Page
