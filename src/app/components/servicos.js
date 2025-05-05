
'use client'
import { useState, useRef } from 'react'
import { GiLipstick, GiHairStrands, GiNails, GiHealing } from 'react-icons/gi'
import { MdSpa } from 'react-icons/md'
import { FaHandSparkles } from 'react-icons/fa'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { TbMassage } from "react-icons/tb";
import Image from 'next/image'

export default function Servicos() {
  const sliderRef = useRef(null)

  const servicos = [
    { icon: <GiLipstick size={32} />, name: "Maquiagem" },
    { icon: <MdSpa size={32} />, name: "Centro de Bem-estar" },
    { icon: <GiHairStrands size={32} />, name: "Barbearia" },
    { icon: <GiNails size={32} />, name: "Manicure" },
    { icon: <TbMassage size={32} />, name: "Massagem" },
    { icon: <Image 
             src='/sal-o/feet.png' 
             alt='podologia' 
             width={32} 
             height={32} 
             priority
             loading="eager"
             className='w-8 h-8'
           />, 
      name: "Podologia" 
    },
    { icon: <Image 
             src="/sal-o/acrylic.png" 
             alt="Unhas acrílicas" 
             width={32} 
             height={32}
             priority
             loading="eager"
             className="w-8 h-8" 
           />, 
      name: "Unhas acrílicas" 
    }
  ]

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section id="servicos" className="pt-28 pb-15 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">Nossos Serviços</h2>
        
        <div className="relative">
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-pink-500 p-2 rounded-full text-white"
          >
            <IoIosArrowBack size={24} />
          </button>

          <div 
            ref={sliderRef}
            className="flex overflow-x-auto gap-6 scroll-smooth no-scrollbar px-2"
            style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none' }}
          >
            {servicos.map((servico, index) => (
              <div 
                key={index}
                className="flex flex-col items-center min-w-[120px] p-3 rounded-lg hover:bg-pink-50 transition-colors"
              >
                <div className="text-pink-500 mb-4">
                  {servico.icon}
                </div>
                <h3 className="text-gray-800 text-center font-medium">
                  {servico.name}
                </h3>
              </div>
            ))}
          </div>

          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-pink-500 p-2 rounded-full text-white"
          >
            <IoIosArrowForward size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}