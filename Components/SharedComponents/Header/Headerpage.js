"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/my-journey", label: "My Journey" },
  { href: "/sincerely-me", label: "Sincerely, Me" },
  { href: "/my-constituency", label: "My Constituency" },
  { href: "/in-my-book-shelf", label: "In My Book Shelf" },
  { href: "/press-releases", label: "Press Releases" },
  { href: "/newsletters", label: "Newsletters" },
  { href: "/get-in-touch", label: "Get in Touch" },
]

const Headerpage = () => {
  const pathname = usePathname()
  const [drawerOpen, setDrawerOpen] = useState(false)

  const handleLinkClick = () => setDrawerOpen(false)

  return (
    <div>
      <nav className="bg-[#033B5F] drop-shadow-lg">
        <div className="lg:max-w-screen-xl flex lg:flex-wrap items-center justify-between p-0">
          <div className="lg:flex justify-between">
            <Link href="/" passHref>
              <div className="lg:flex items-center">
                <Image
                  width={250}
                  height={250}
                  src="/home_images/vds-main.png"
                  className="p-0 h-32"
                  alt="vds"
                />
                <div className="self-center ml-4">
                  <h6 className="text-white text-4xl font-semibold mb-1 lg:text-center merriweather-regular">
                    V D Satheesan
                  </h6>
                  <p className="text-white text-[23px] merriweather-regular ms-2 font-semibold">
                    For the people
                  </p>
                </div>
              </div>
            </Link>

            <div className="flex lg:grid lg:grid-col lg:py-0 lg:grid-flow-row justify-center items-center lg:w-[50%]">
              <p className="text-white m-5 merriweather-regular italic text-[23px]">
                “People respect us not for our ability to make laws, but because
                of our ability to undo the injustice done to our people.”
              </p>
            </div>
          </div>
        </div>
      </nav>

      <div className="fixed top-7 right-5 z-40">
        <button
          className="px-5 py-2.5 mb-2 mt-2"
          type="button"
          onClick={() => setDrawerOpen(!drawerOpen)}
          aria-label="Toggle Menu"
        >
          <Image
            className="h-auto w-full relative"
            src="/home_images/menu.svg"
            alt="Menu"
            width={100}
            height={100}
          />
        </button>
      </div>

      <div
        id="drawer-right-example"
        className={`bg-[#033B5F] fixed top-0 right-0 z-40 h-screen overflow-y-auto transition-transform ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        } w-80`}
        tabIndex="-1"
      >
        <button
          type="button"
          className="text-red-600 bg-transparent hover:bg-gray-200 rounded-lg p-2 absolute top-2 right-2"
          onClick={handleLinkClick}
        >
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M13.414 6.586a2 2 0 0 1 2.828 2.828L12.828 12l3.414 3.414a2 2 0 1 1-2.828 2.828L10 14.828l-3.414 3.414a2 2 0 1 1-2.828-2.828L7.172 12 3.758 8.586a2 2 0 1 1 2.828-2.828L10 9.172l3.414-3.414z"
              clipRule="evenodd"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>

        <ul className="merriweather-regular text-xl font-medium text-white">
          {navLinks.map(({ href, label }) => (
            <li
              key={href}
              onClick={handleLinkClick}
              className={`border-b ${pathname === href ? "bg-gray-500" : ""}`}
            >
              <Link href={href} passHref>
                <div className="flex items-center py-5 px-4 rounded-lg cursor-pointer">
                  <span>{label}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black opacity-25 z-30"
          onClick={handleLinkClick}
        ></div>
      )}
    </div>
  )
}

export default Headerpage
