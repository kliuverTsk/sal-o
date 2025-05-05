"use client"
import Image from "next/image"
import { playfairFont } from "../../ui/fonts"

export default function Echos(){
    const servicios = [
        {
            icon: "/sal-o/acrylic.png",
            title: "Compromisso real",
            text: "Trabalhamos duro até que o trabalho fique bem feito, sem desculpas ou meias medidas.",
            alt: 'Compromisso real icon'
        },
        {
            icon: "/sal-o/femenine.png",
            title: "Empoderamento Feminino",
            text: "Cada serviço — seja corte de cabelo, unhas ou maquiagem — é projetado para aumentar a confiança e a força dos nossos clientes.",
            alt: "signo feminino"
        },
        {
            icon: "/sal-o/feet.png",
            title: "Escuta e Empatia",
            text: 'Primeiro ouvimos o que você precisa e depois agimos. Dedicamos tempo para entender seu estilo de vida.',
            alt: "Escuta e empatia icon"
        }
    ]
    
    return (
        <section 
            id="prosperamos-por" 
            className="pt-20 sm:pt-28 pb-16 sm:pb-20 px-4 sm:px-6 relative bg-pink-50"
            aria-label="Nossos valores de trabalho"
        >
            <div 
                className="absolute inset-0 bg-[url('/sal-o/background.svg')] bg-no-repeat bg-cover bg-center opacity-10"
                aria-hidden="true"
            />
            <div className="max-w-4xl mx-auto relative z-10">
                <h2 className={`text-2xl sm:text-3xl font-bold text-center mb-12 sm:mb-16 ${playfairFont.className}`}>
                    Os valores de trabalho pelos quais prosperamos
                </h2>
                
                <div className="space-y-8 sm:space-y-12">
                    {servicios.map((servicio, index)=> (
                        <div key={index} className="flex gap-4 sm:gap-6 max-w-2xl mx-auto hover:transform hover:scale-105 transition-transform duration-200">
                            <div className="bg-amber-100 rounded-lg p-3 sm:p-4 flex-shrink-0 self-start">
                                <Image 
                                    src={servicio.icon}
                                    width={60}
                                    height={60}
                                    alt={servicio.alt}
                                    className="object-contain"
                                    loading={index === 0 ? "eager" : "lazy"}
                                    quality={75}
                                />
                            </div>
                            <div className="flex-1">
                                <h3 className={`text-lg sm:text-xl font-semibold ${playfairFont.className}`}>
                                    {servicio.title}
                                </h3>
                                <p className="text-gray-900 leading-relaxed font-medium mt-2 text-sm sm:text-base">
                                    {servicio.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}