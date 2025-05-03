'use client'
import { useState } from 'react'
import { urbanistFont } from "../../ui/fonts"

export default function Contacto() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    servico: '',
    mensagem: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validación básica
    if (!formData.telefone.match(/^\d{10,11}$/)) {
      alert('Por favor, insira um número de telefone válido')
      return
    }
    
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      alert('Por favor, insira um email válido')
      return
    }

    const mensaje = `Olá! Sou ${formData.nome}.\nServiço: ${formData.servico}\nTelefone: ${formData.telefone}\nMensagem: ${formData.mensagem}`
    const numeroWhatsApp = "5511949749057"
    window.open(`https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`, '_blank')
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contato" className="pt-20 sm:pt-28 pb-16 sm:pb-20 px-4 sm:px-6 bg-amber-50">
      <div className="max-w-3xl mx-auto">
        <span className="text-pink-500 font-medium mb-2 block text-center">ENTRE EM CONTATO</span>
        <h2 className={`text-2xl sm:text-3xl font-bold text-center mb-4 ${urbanistFont.className}`}>
          Agende seu horário
        </h2>
        <p className="text-gray-900 text-center mb-8 sm:mb-12">
          Estamos prontos para transformar seu visual e elevar sua autoestima
        </p>

        <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 rounded-xl shadow-md">
          <div className="space-y-4 sm:space-y-6">
            <div>
              <label htmlFor="nome" className="sr-only">Nome</label>
              <input
                id="nome"
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                placeholder="Nome"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500"
                required
                aria-required="true"
              />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500"
              required
            />
            <input
              type="tel"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              placeholder="Telefone"
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500"
              required
            />
            <input
              type="text"
              name="servico"
              value={formData.servico}
              onChange={handleChange}
              placeholder="Serviço Desejado"
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500"
              required
            />
            <textarea
              name="mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              placeholder="Mensagem para nós"
              rows="3"
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 resize-none"
              required
            ></textarea>
            <button 
              type="submit"
              className="w-full bg-purple-900 text-white py-3 rounded-lg hover:bg-purple-800 active:bg-purple-950 transition-colors duration-150 font-medium"
            >
              Enviar Mensagem
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}