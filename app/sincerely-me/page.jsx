"use client"
import React from "react"
import SincerelyMe from "@/Components/SincerelyMeComponents"
import Seo from "@/Components/SeoComponents/Seo"
import { usePathname } from "next/navigation"

const Page = () => {
  const pathname = usePathname()
  const title = "Sincerely,Me-vdsnew"
  const description =
    " I was born on May 31, 1964 to my parents, K Damodara Menon and Smt. V Vilasini Amma in Nettoor, Eranakulam. Growing up in a middle-class household as one of six siblings"
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
      <SincerelyMe />
    </div>
  )
}

export default Page
