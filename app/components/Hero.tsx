'use client'

import React, { useEffect, useState } from 'react'
import { RiArrowDownDoubleFill } from 'react-icons/ri'
import { BsArrowUpShort } from 'react-icons/bs'

const Hero = () => {
  const [toggleScroll, setToggleScroll] = useState(false)

  useEffect(() => {
    const machineTypingElement = document.querySelector('.machineTyping')
    const machineTypingText = 'PRESENCE'
    let i = 0
    function machineTypingEffect() {
      if (i < machineTypingText.length) {
        machineTypingElement!.innerHTML += machineTypingText
          .charAt(i)
          .toUpperCase()
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
    <section className="container mx-auto px-4 h-screen flex flex-col relative sm:px-8 md:px-16 lg:px-20 xl:px-36">
      <h1 className="text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl font-light uppercase tracking-wider leading-[48px] pt-36">
        Design that <br />
        elevate your
        <br /> digital <span className="machineTyping"></span>
      </h1>
      <div className="absolute z-[1] rounded-full w-[30%] h-[30%] top-0 white__gradient" />
      <RiArrowDownDoubleFill
        className="text-zinc-400 self-center flex-1 animate-bounce"
        fontSize={24}
      />
      {toggleScroll && (
        <div className="fixed p-2 rounded bg-zinc-900 bottom-16 right-16 cursor-pointer z-10 transition-all">
          <BsArrowUpShort
            className="text-white"
            fontSize={24}
            onClick={handleScrollToTop}
          />
        </div>
      )}
    </section>
  )
}

export default Hero
