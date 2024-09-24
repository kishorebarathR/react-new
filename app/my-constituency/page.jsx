"use client"
import React from "react"
import MyConstituency from "@/Components/my-constituencyComponents"
import Seo from "@/Components/SeoComponents/Seo"
import { usePathname } from "next/navigation"

const Page = () => {
  const pathname = usePathname()
  const title = "My Constituency-vdsnew"
  const description =
    "North Paravur is an area with a rich and vibrant history. Paravur gets its name from the old word Parayur, which means “site of the ancient tribe of Paravar.” The Paravar were the predominant population of Kerala’s"
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
      <MyConstituency />
    </>
  )
}

export default Page
