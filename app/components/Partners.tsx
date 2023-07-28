'use client'

import React from 'react'

import Card from './Card'
import Button from './Button'
import { RevealWrapper } from 'next-reveal'

const Partners = () => {
  return (
    <section
      className="container w-full flex flex-col items-center justify-center mx-auto px-4 py-28 sm:px-8 md:px-16 lg:px-20 xl:px-36"
      id="partners"
    >
      <RevealWrapper
        origin="left"
        delay={190}
        duration={1000}
        distance="80px"
        className="self-start"
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl">Become a Partner</h2>
      </RevealWrapper>
      <RevealWrapper origin="left" delay={210} duration={1000} distance="80px">
        <p className="text-xs md:text-sm lg:text-base text-zinc-400 mt-5 leading-4 tracking-wide">
          Na Luro, acreditamos em construir conexões significativas e
          duradouras. É por isso que convidamos você a dar um passo além e se
          tornar mais do que apenas um cliente - queremos que você seja nosso
          parceiro!
        </p>
        <p className="text-xs md:text-sm lg:text-base text-zinc-400 leading-4 tracking-wide">
          Nosso programa &quot;Become a Partner&quot; foi especialmente criado
          para valorizar aqueles que escolhem confiar em nossos produtos e
          serviços.
        </p>
      </RevealWrapper>
      <RevealWrapper origin="left" delay={250} duration={1000} distance="90px">
        <div className="flex mt-5 flex-col gap-5 md:flex-row md:flex-wrap">
          <Card
            title="Suporte Prioritário"
            text="Como parceiro, você receberá suporte personalizado e priorizado,
garantindo que suas necessidades sejam atendidas com agilidade e eficiência."
            className="md:max-w-[48%]"
          />
          <Card
            title="Recursos Premium"
            text="Tenha acesso a conteúdos e recursos premium, como guias detalhados,
          tutoriais avançados e ferramentas exclusivas para ajudá-lo a aproveitar
          ao máximo nossos produtos."
            className="md:max-w-[48%]"
          />
          <Card
            title="Eventos Exclusivos"
            text="Participe de eventos exclusivos, webinars e workshops, onde você poderá interagir
          com nossa equipe, compartilhar ideias e aprender com outros parceiros."
            className="md:max-w-[48%]"
          />
          <Card
            title="Acesso Antecipado"
            text="Seja o primeiro a conhecer e experimentar nossos lançamentos e atualizações
          mais recentes. Como parceiro, seu feedback é fundamental para o aprimoramento
          contínuo de nossos produtos e serviços."
            className="md:max-w-[48%]"
          />
          <Card
            title="Ofertas Especiais"
            text="Desfrute de ofertas especiais e descontos exclusivos disponíveis apenas
          para nossos parceiros, como forma de agradecimento por sua parceria contínua."
            className="md:max-w-[48%]"
          />
        </div>
      </RevealWrapper>
      <Button className="mt-8 px-12" variant="black">
        Entre em contato
      </Button>
    </section>
  )
}

export default Partners
