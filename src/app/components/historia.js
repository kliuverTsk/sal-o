'use client'
import { urbanistFont } from "../../ui/fonts"

export default function Historia() {
  const metodologia = [
    { titulo: "Avaliação Inicial", texto: "Começamos com uma consulta detalhada para entender suas necessidades e objetivos específicos." },
    { titulo: "Planejamento Personalizado", texto: "Desenvolvemos um plano de tratamento adaptado ao seu tipo de pele e estilo de vida." },
    { titulo: "Execução Profissional", texto: "Realizamos os procedimentos com produtos premium e técnicas avançadas." }
  ]

  return (
    <section id="sobre" className="pt-20 sm:pt-28 pb-16 sm:pb-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div>
          <span className="text-pink-500 font-medium mb-3 block text-sm sm:text-base">NOSSA HISTÓRIA</span>
          <h2 className={`text-2xl sm:text-3xl font-bold mb-6 ${urbanistFont.className} text-black`}>
            O começo da jornada
          </h2>
          <p className="text-gray-700 mb-8 text-base sm:text-lg leading-relaxed">
            Fundado em 2020 por profissionais apaixonados pela beleza, nosso salão nasceu do desejo de oferecer um serviço diferenciado e personalizado. Começamos como um pequeno espaço e crescemos graças à confiança de nossos clientes, sempre mantendo nossa essência de atendimento exclusivo e resultados excepcionais.
          </p>

          <h3 className="font-semibold text-gray-900 mb-6 text-lg sm:text-xl">Nossa Metodologia:</h3>
          <div className="space-y-6">
            {metodologia.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-pink-100 flex-shrink-0 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-pink-500"></div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">{item.titulo}</h4>
                  <p className="text-gray-900 text-sm">{item.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative aspect-[4/5] w-full sm:w-[80%] mx-auto rounded-xl overflow-hidden shadow-lg">
            <video 
                className="w-full h-full object-cover"
                controls
                preload="metadata"
                poster="/sal-o/thumbnail-video.png"
                loading="lazy"
                playsInline
            >
                <source src="/sal-o/demostracion.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos.
            </video>
        </div>
      </div>
    </section>
  )
}