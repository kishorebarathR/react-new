'use client'
import React from "react"
import PressreleasesComponents from "@/Components/PressReleasesComponents"
import Seo from "@/Components/SeoComponents/Seo"
import { usePathname } from "next/navigation"
const Page = () => {
  const pathname = usePathname()
  const title = "Press-Releases-vdsnew"
  const description =
    "Stay updated with the latest announcements and updates on my efforts to create positive change in the country Press Releases."
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
      <PressreleasesComponents />
    </>
  )
}

export default Page
