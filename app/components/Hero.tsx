'use client'

import React, { useEffect, useState } from 'react'
import { RiArrowDownDoubleFill } from 'react-icons/ri'
import { BsArrowUpShort } from 'react-icons/bs'
import Link from 'next/link'
import { RevealWrapper } from 'next-reveal'

const Hero = () => {
  const [toggleScroll, setToggleScroll] = useState(false)

  useEffect(() => {
    const machineTypingElement = document.querySelector('.machineTyping')
    const machineTypingText = 'PRESENCE'
    let i = 0
    function machineTypingEffect() {
      if (i < machineTypingText.length) {
        if (machineTypingElement) {
          machineTypingElement.innerHTML += machineTypingText
            .charAt(i)
            .toUpperCase()
        }
        i++

        setTimeout(machineTypingEffect, 150)
      }
    }

    machineTypingEffect()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      window.pageYOffset > 500 ? setToggleScroll(true) : setToggleScroll(false)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <section className="container mx-auto px-4 h-screen flex flex-col relative sm:px-8 md:px-16 lg:px-20 xl:px-36 transition-all">
      <RevealWrapper
        delay={190}
        origin="bottom"
        duration={1000}
        distance="100px"
      >
        <h1 className="title text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl font-light uppercase tracking-wider leading-[48px] pt-72 ">
          Design that <br />
          elevate your
          <br /> digital <span className="machineTyping"></span>
        </h1>
      </RevealWrapper>
      <Link
        href="#about"
        className="text-zinc-400 absolute bottom-[20%] left-1/2 animate-bounce"
      >
        <RiArrowDownDoubleFill
          fontSize={24}
          onClick={() => window.scrollTo({ top: 1000, behavior: 'smooth' })}
        />
      </Link>
      {toggleScroll && (
        <div className="fixed p-2 rounded bg-white bottom-8 right-8 lg:bottom-16 lg:right-16 cursor-pointer z-10 hover:bg-zinc-300">
          <BsArrowUpShort
            className="text-zinc-900"
            fontSize={24}
            onClick={handleScrollToTop}
          />
        </div>
      )}
    </section>
  )
}

export default Hero
