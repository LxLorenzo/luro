import React from 'react'

interface CardProps {
  title: string
  text: string
  className?: string
}

const Card = ({ className, title, text }: CardProps) => {
  const _className = className

  return (
    <div
      className={`${_className} border border-zinc-700 p-4 hover:bg-zinc-900 z-[1] transition`}
    >
      <h3 className="text-white text-xl">{title}</h3>
      <p className="text-xs lg:text-sm text-zinc-400 mt-1 leading-4 tracking-wide">
        {text}
      </p>
    </div>
  )
}

export default Card
