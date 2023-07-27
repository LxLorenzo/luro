import React from 'react'
import Button from './Button'

import 'material-symbols'

const Contact = () => {
  return (
    <section
      className="container w-full mx-auto px-4 py-28 sm:px-8 md:px-16 lg:px-20 xl:px-36"
      id="support"
    >
      <h2 className="text-2xl md:text-3xl lg:text-4xl">Need help?</h2>
      <p className="text-xs md:text-sm lg:text-base text-zinc-400 mt-2 leading-4 tracking-wide">
        Nossa equipe está disponível e pronta para ajudar no que for necessário,
        não importa o desafio que você enfrente.
      </p>
      <div className="flex gap-5 mt-5">
        <Button>FAQ</Button>
        <Button variant="black" className="flex items-center gap-2">
          NOSSA COMUNIDADE
          <span className="material-symbols-outlined text-white text-xs">
            arrow_outward
          </span>
        </Button>
      </div>
    </section>
  )
}

export default Contact
