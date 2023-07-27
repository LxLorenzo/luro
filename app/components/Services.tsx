import React from 'react'
import Card from './Card'

const Services = () => {
  return (
    <section
      className="container w-full mx-auto px-4 pt-28 sm:px-8 md:px-16 lg:px-20 xl:px-36 relative"
      id="services"
    >
      <h2 className="text-2xl md:text-3xl lg:text-4xl xl:5">What we do?</h2>
      <p className="text-xs md:text-sm lg:text-base text-zinc-400 mt-2 leading-4 tracking-wide">
        Do planejamento à execução, somos seu parceiro para o triunfo da marca.
      </p>
      <div className="absolute rounded-full w-[30%] h-[30%] top-1/3 left-1/3 white__gradient" />
      <div className="grid grid-cols-1 mt-5 gap-3 lg:grid-cols-4">
        <Card
          title="Desenvolvimento de sites"
          text="Criação de sites personalizados, responsivos e otimizados para desktops,
smartphones e tablets."
          className="lg:col-span-3"
        />
        <Card
          title="Interfaces UI UX"
          text="Design poderoso, experiência envolvente."
          className="lg:col-span-1"
        />
        <Card
          title="Integração de Sistemas e APIs"
          text="Conexão de diferentes sistemas e aplicativos para melhorar a eficiência
          e a funcionalidade do site."
          className="lg:col-span-2"
        />
        <Card
          title="Desenvolvimento de Aplicativos Web"
          text="Criação de layouts visuais atraentes e funcionais para sites, logotipos, banners,
          infográficos e outros elementos gráficos."
          className="lg:col-span-2"
        />
      </div>
      <div className="w-full h-[2px] bg-zinc-700 mt-56 mb-28" />
    </section>
  )
}

export default Services
