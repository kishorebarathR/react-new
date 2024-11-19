"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Footerpage = () => {
  const pathname = usePathname()

  if (pathname === "/get-in-touch") {
    return null
  }

  return (
    <div>
      <div
        className="grid lg:grid-cols-3 p-5 shadow"
        style={{
          backgroundImage: "url('/footer_images/Get-in-touch-background.png')",
        }}
      >
        {/* Related Websites Section */}
        <div className="text-white merriweather-regular">
          <h3 className="text-4xl font-semibold p-5">Related Websites</h3>
          <div className="text-2xl">
            <Link href="https://www.inc.in/">
              <p className="p-5">Indian National Congress</p>
            </Link>
            <Link href="https://www.kpcc.org.in/">
              <p className="p-5">Kerala Pradesh Congress Committee</p>
            </Link>
            <Link href="https://iyc.in/">
              <p className="p-5">Indian Youth Congress</p>
            </Link>
            <Link href="https://niyamasabha.nic.in/">
              <p className="p-5">Kerala Legislative Assembly</p>
            </Link>
          </div>
        </div>

        {/* Be My Friend Form Section */}
        <div>
          <form className="px-7 bg-[#072D46] w-full merriweather-regular">
            <div className="mb-5">
              <h3 className="text-center text-4xl  p-5 text-white merriweather-regular font-semibold ">
                Be My Friend
              </h3>
            </div>
            <div className="mb-5 py-3">
              <input
                type="text"
                id="name"
                name="name"
                className="bg-[#033B5F] py-3 text-xl rounded-lg block w-full border border-[#033B5F] dark:placeholder-gray-400 text-black focus:none"
                placeholder="Name"
                required
              />
            </div>
            <div className="mb-5 py-3">
              <input
                type="tel"
                id="mobile"
                name="mobile"
                className="bg-[#033B5F] py-3 text-xl rounded-lg block w-full border border-[#033B5F] dark:placeholder-gray-400 text-black focus:outline-none"
                placeholder="Mobile Number"
                required
              />
            </div>
            <div className="mb-5 py-3">
              <input
                type="email"
                id="email"
                name="email"
                className="bg-[#033B5F] py-3 text-xl rounded-lg block w-full border border-[#033B5F] text-black focus:outline-none mb-5"
                placeholder="Email ID"
                required
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="text-white border font-medium rounded-md text-xl px-5 py-2.5 mb-5 w-32"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Contact Info and Profile Visitors Section */}
        <div className="fixed bottom-5 right-5 z-50">
          <Link href="mailto:hello@vdsatheesan.com">
            <Image
              width={400}
              height={100}
              className="bounce-in w-44"
              src="/footer_images/ask-me-footer.png"
              alt="Ask Me Footer"
            />
          </Link>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-gradient-to-b from-[#035C96] to-[#022E4B] py-5 text-center text-white text-xl shadow-t merriweather-regular">
        Copyright © 2022 All rights reserved.
      </div>
    </div>
  )
}

export default Footerpage
