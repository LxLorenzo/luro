'use client'

import Image from 'next/image'
import React, { useRef } from 'react'
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'

const galleryImages = [
  {
    id: 1,
    src: '/gallery01.png',
    alt: 'Gallery Image 1',
  },
  {
    id: 2,
    src: '/gallery02.png',
    alt: 'Gallery Image 2',
  },
  {
    id: 3,
    src: '/gallery03.png',
    alt: 'Gallery Image 3',
  },
  {
    id: 4,
    src: '/gallery04.png',
    alt: 'Gallery Image 4',
  },
]

const Portfolio = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: string) => {
    if (direction === 'left') {
      scrollRef.current?.scrollBy({
        left: -250,
        behavior: 'smooth',
      })
    } else {
      scrollRef.current?.scrollBy({
        left: 250,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section
      className="flex flex-col items-center justify-center container mx-auto md:px-8 lg:px-0"
      id="portfolio"
    >
      <h2 className="text-2xl md:text-3xl lg:text-4xl mb-5">Portfolio</h2>

      <div className="flex flex-1 max-w-[90%] lg:max-w-[60%] relative">
        <div className="flex w-max overflow-x-hidden" ref={scrollRef}>
          {galleryImages.map((image) => (
            <div
              className="relative min-w-[301px] h-[447px] mr-4 sm:mr-8 flex justify-center items-center"
              key={image.id}
            >
              <Image
                key={image.id}
                src={image.src}
                alt={image.alt}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center w-full absolute bottom-1/3 px-4">
          <BsArrowLeftShort
            onClick={() => scroll('left')}
            className="cursor-pointer text-white text-4xl bg-black rounded"
          />
          <BsArrowRightShort
            onClick={() => scroll('right')}
            className="cursor-pointer text-white text-4xl bg-black rounded"
          />
        </div>
      </div>
    </section>
  )
}

export default Portfolio
