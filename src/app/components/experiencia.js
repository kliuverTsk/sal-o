
'use client'
import { urbanistFont } from "../../ui/fonts"
import Image from 'next/image'

export default function Experiencia() {
  const servicios = [
    { imagen: '/sal-o/maquillaje.svg', titulo: 'Maquiagem Profissional' },
    { imagen: '/sal-o/lavado.svg', titulo: 'Tratamento Capilar' },
    { imagen: '/sal-o/pestañas.svg', titulo: 'Design de Sobrancelhas' },
    { imagen: '/sal-o/uñas.svg', titulo: 'Manicure e Pedicure' },
    { imagen: '/sal-o/estetica.svg', titulo: 'Tratamentos Faciais' }
]

  return (
    <section id="resultados" className="pt-24 sm:pt-32 pb-20 sm:pb-24 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className={`text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-6 ${urbanistFont.className}`}>
          Voce fica muito mais linda aqui!
        </h2>
        <p className="text-lg text-gray-900 text-center mb-12 sm:mb-16 max-w-2xl mx-auto">
          Oferecemos serviços profissionais com os melhores produtos do mercado
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8 sm:px-0">
            {servicios.map((servicio, index) => (
                <div 
                    key={index} 
                    className="relative overflow-hidden rounded-lg bg-white shadow-sm h-72 sm:h-[28rem]"
                >
                    <Image 
                        src={servicio.imagen} 
                        alt={servicio.titulo}
                        fill
                        className={`object-cover ${servicio.titulo === 'Design de Sobrancelhas' ? 'object-bottom' : 'object-center'}`}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4">
                        <h3 className="text-white text-base sm:text-lg font-medium">{servicio.titulo}</h3>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  )
}