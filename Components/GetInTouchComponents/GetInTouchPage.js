"use client"
import React from "react"

import Image from "next/image"
import Link from "next/link"

const GetInTouchPage = () => {
  return (
    <div>
      <div>
        <div
          className="grid lg:grid-cols-3 p-5 shadow"
          style={{
            backgroundImage:
              "url('/footer_images/Get-in-touch-background.png')",
          }}
        >
          {/* Related Websites Section */}
          <div className="text-white merriweather-regular">
            <h3 className="text-3xl font-bold p-5">Related Websites</h3>
            <div className="text-xl">
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
            <form className="p-8 bg-[#072D46] w-full merriweather-regular">
              <div className="mb-5">
                <h3 className="text-center text-3xl font-medium p-5 text-white">
                  Be My Friend
                </h3>
                <div className="flex mb-5 justify-center">
                  <Image
                    width={20}
                    height={50}
                    src="/footer_images/0.gif"
                    alt="image-0"
                  />
                  <Image
                    width={20}
                    height={50}
                    src="/footer_images/0.gif"
                    alt="image-0"
                  />
                  <Image
                    width={20}
                    height={50}
                    src="/footer_images/0.gif"
                    alt="image-0"
                  />
                  <Image
                    width={20}
                    height={50}
                    src="/footer_images/0.gif"
                    alt="image-0"
                  />
                  <Image
                    width={20}
                    height={50}
                    src="/footer_images/2.gif"
                    alt="image-2"
                  />
                  <Image
                    width={20}
                    height={50}
                    src="/footer_images/5.gif"
                    alt="image-5"
                  />
                </div>
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
          <div className="justify-center items-center">
            <Link href="mailto:hello@vdsatheesan.com">
              <Image
                width={400}
                height={100}
                className="bounce-in mt-10"
                src="/footer_images/ask-me-footer.png"
                alt="Ask Me Footer"
              />
            </Link>

            <p className="text-3xl text-center mt-3 text-white py-3 merriweather-bold">
              Profile Visitors
            </p>
            <div className="flex mb-5 justify-center py-5">
              <Image
                width={20}
                height={50}
                src="/footer_images/0.gif"
                alt="footer_images"
              />
              <Image
                width={20}
                height={50}
                src="/footer_images/0.gif"
                alt="footer_images"
              />
              <Image
                width={20}
                height={50}
                src="/footer_images/0.gif"
                alt="footer_images"
              />
              <Image
                width={20}
                height={50}
                src="/footer_images/5.gif"
                alt="footer_images"
              />
              <Image
                width={20}
                height={50}
                src="/footer_images/9.gif"
                alt="footer_images"
              />
              <Image
                width={20}
                height={50}
                src="/footer_images/1.gif"
                alt="footer_images"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="h-96 w-full">
        <iframe
          className="w-full h-full"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=V%20D%20Satheesan%20MLA%20Office,%2046RM+4FR,%20North%20Paravur,%20Kerala%20683513+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps tracker sport</a>
        </iframe>
      </div>

      <div className="bg-gradient-to-b from-[#035C96] to-[#022E4B] py-5 text-center text-white text-xl shadow-t merriweather-regular">
        Copyright © 2022 All rights reserved.
      </div>
    </div>
  )
}

export default GetInTouchPage