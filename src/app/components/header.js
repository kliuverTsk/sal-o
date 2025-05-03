'use client'
import { useState, useCallback } from "react"
import { urbanistFont } from "../../ui/fonts"

export default function Header() {
  const [agendar, setAgendar] = useState("")
  
  const Handle = useCallback(() => {
    if (!agendar) {
      alert("Por favor, escolha um serviço")
      return
    }
    const mensaje = `Olá! Gostaria de agendar um horário para ${agendar}`
    const numeroWhatsApp = "5511949749057"
    window.open(`https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`, '_blank')
  }, [agendar])

  return (
    <header id="inicio" className="h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-800/95 to-transparent z-10" />
      
      <div 
        className="absolute inset-0 bg-[url('/sal-o/fondo-mujer.svg')] bg-no-repeat bg-cover bg-[position:80%_center] sm:bg-right z-0"
      />

      <div className="relative z-20 px-6 sm:px-8 md:px-24 py-12 flex flex-col justify-center h-full">
        <h1 className={`text-4xl sm:text-5xl md:text-7xl font-bold max-w-2xl leading-tight text-amber-200 ${urbanistFont.className}`}>
          o melhor salão para você
        </h1>
        <p className="mt-4 max-w-lg text-base md:text-lg font-medium text-white">
          Manicure, Pedicure, Unhas acrílicas, corte de cabelo, Limpeza de pele e muito mais num salão
        </p>

        <form onSubmit={(e) => e.preventDefault()} className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white/95 p-4 sm:p-5 rounded-xl w-fit">
          <h2 className={`text-base sm:text-lg font-medium text-gray-800 ${urbanistFont.className}`}>
            escolha seu serviço
          </h2>
          <select 
            className="w-full sm:w-auto border border-gray-300 rounded-lg px-4 py-2.5 text-gray-700 text-base bg-pink-50 font-medium focus:outline-none focus:ring-2 focus:ring-pink-500"
            value={agendar}
            onChange={(e) => setAgendar(e.target.value)}
          >
            <option value="">Selecione uma opção</option>
            <option value="Manicure">Manicure</option>
            <option value="Pedicure">Pedicure</option>
            <option value="Unhas acrílicas">Unhas acrílicas</option>
            <option value="Corte de cabelo">Corte de cabelo</option>
            <option value="Limpeza de pele">Limpeza de pele</option>
            <option value="Outros">Outros</option>
          </select>
          <button
            type="button"
            onClick={Handle}
            className="w-full sm:w-auto bg-pink-600 text-white px-6 sm:px-8 py-2.5 rounded-lg text-base hover:bg-pink-700 active:bg-pink-800 transition-colors duration-150 font-medium"
          >
            Agendar
          </button>
        </form>
      </div>
    </header>
  )
}
