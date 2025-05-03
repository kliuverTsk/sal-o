'use client'
import { urbanistFont } from "../../ui/fonts"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Testimonios() {
  const testimonios = [
    { foto: '/sal-o/cliente1.svg', nombre: "Maria Silva", cargo: "Cliente Frequente", texto: "Encontrei aqui o melhor atendimento! As profissionais são muito atenciosas e os resultados sempre superam minhas expectativas. O ambiente é acolhedor e relaxante." },
    { foto: '/sal-o/cliente2.svg', nombre: "Ana Santos", cargo: "Cliente VIP", texto: "Já experimentei vários salões, mas aqui é diferente. A qualidade dos produtos e o profissionalismo da equipe são incomparáveis. Sempre saio satisfeita!" },
    { foto: '/sal-o/cliente3.svg', nombre: "Julia Costa", cargo: "Cliente Regular", texto: "O que mais me impressiona é a atenção aos detalhes. Cada visita é uma experiência única. As profissionais são verdadeiras artistas no que fazem." }
]

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.2 }
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  }

  return (
    <section id="testemoniais" className="pt-20 pb-16 px-4 bg-purple-900">
      <div className="max-w-7xl mx-auto">
        <motion.span 
          className="text-pink-300 font-medium mb-2 block text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          TESTIMONIAIS
        </motion.span>
        <motion.h2 
          className={`text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-white ${urbanistFont.className}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          O que nossas clientes dizem...
        </motion.h2>

        <motion.div 
          className="grid md:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {testimonios.map((testimonio, index) => (
            <motion.div 
              key={index} 
              className="bg-purple-800/50 p-6 md:p-8 rounded-xl hover:bg-purple-800/70 transition-colors"
              variants={fadeIn}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden">
                  <Image
                    src={testimonio.foto}
                    alt={testimonio.nombre}
                    fill
                    sizes="(max-width: 768px) 48px, 64px"
                    loading="eager"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm md:text-base">{testimonio.nombre}</h3>
                  <p className="text-pink-300 text-xs md:text-sm">{testimonio.cargo}</p>
                </div>
              </div>
              <p className="text-gray-200 italic text-sm md:text-base">&ldquo;{testimonio.texto}&rdquo;</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}