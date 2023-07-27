'use client'

import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import Link from 'next/link'

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <nav className="container mx-auto flex justify-between items-center w-full py-8 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-36">
      <h1 className="text-2xl xl:text-4xl">
        <Link href="#">Luro</Link>
      </h1>
      <div className="lg:flex hidden justify-between items-center gap-5">
        <Link href="#about" className="hover:text-zinc-400 transition-all">
          About
        </Link>

        <Link href="#services" className="hover:text-zinc-400 transition-all">
          Services
        </Link>

        <Link href="#support" className="hover:text-zinc-400 transition-all">
          Support
        </Link>

        <Link href="#partners" className="hover:text-zinc-400 transition-all">
          Partners
        </Link>

        <Link href="#portfolio" className="hover:text-zinc-400 transition-all">
          Portfolio
        </Link>
      </div>
      <button className="lg:flex hidden hover:text-zinc-400 transition-all">
        Get Started
      </button>
      <div className="lg:hidden flex">
        {toggleMenu ? (
          <div className="bg-zinc-950 absolute top-0 right-0 w-full flex flex-col p-8 gap-5 border-b border-b-zinc-700 text-lg z-10">
            <AiOutlineClose
              onClick={() => setToggleMenu((prev) => !prev)}
              className="self-end"
              fontSize={24}
            />
            <div className="flex flex-col justify-between items-center gap-2 mb-5">
              <Link
                href="#about"
                className="hover:text-zinc-400 transition-all"
                onClick={() => setToggleMenu((prev) => !prev)}
              >
                About
              </Link>

              <Link
                href="#services"
                className="hover:text-zinc-400 transition-all"
                onClick={() => setToggleMenu((prev) => !prev)}
              >
                Services
              </Link>

              <Link
                href="#support"
                className="hover:text-zinc-400 transition-all"
                onClick={() => setToggleMenu((prev) => !prev)}
              >
                Support
              </Link>

              <Link
                href="#partners"
                className="hover:text-zinc-400 transition-all"
                onClick={() => setToggleMenu((prev) => !prev)}
              >
                Partners
              </Link>

              <Link
                href="#portfolio"
                className="hover:text-zinc-400 transition-all"
                onClick={() => setToggleMenu((prev) => !prev)}
              >
                Portfolio
              </Link>
            </div>
            <button className="hover:text-zinc-400 transition-all">
              Get Started
            </button>
          </div>
        ) : (
          <div>
            <FaBars
              onClick={() => setToggleMenu((prev) => !prev)}
              fontSize={20}
            />
          </div>
        )}
      </div>
    </nav>
  )
}

export default Header
