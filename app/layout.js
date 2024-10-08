import { Inter } from "next/font/google"
import "./globals.css"

import Script from "next/script"
import Header from "../Components/SharedComponents/Header"
import Footer from "../Components/SharedComponents/Footer"

// const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css"
        rel="stylesheet"
      />
      <link rel="preload" href="critical.js" as="script" />

      <body>
        <Header />
        {children}
        <Footer />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js" />
       
        <Script async src="third-party.js" />
      </body>
    </html>
  )
}
