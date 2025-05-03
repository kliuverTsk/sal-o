'use client'
import { useState, useCallback } from "react"
import { urbanistFont } from "../../ui/fonts"
import { FcCloseUpMode } from "react-icons/fc"
import { HiMenuAlt3, HiX } from "react-icons/hi"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleLinkClick = useCallback(() => {
    setIsOpen(false)
  }, [])

  const menuItems = [
    { href: "#inicio", label: "Home" },
    { href: "#servicos", label: "Serviços" },
    { href: "#resultados", label: "Resultados" },
    { href: "#prosperamos-por", label: "Prosperamos por" },
    { href: "#sobre", label: "Sobre" },
    { href: "#testemoniais", label: "Testemoniais" },
    { href: "#contato", label: "Contato" }
  ]

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-200 fixed w-full top-0 z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-3">
        <a href="#inicio" className="flex items-center gap-2 text-lg sm:text-xl">
          <FcCloseUpMode size={30} />
          <h1 className={`${urbanistFont.className} text-pink-500 font-bold`}>stylice</h1>
        </a>

        <ul className="hidden md:flex gap-x-6 text-gray-700 font-medium">
          {menuItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="hover:text-pink-500 transition-colors duration-150">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-1"
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 bg-white/95 backdrop-blur-sm">
          <ul className="flex flex-col gap-3 text-gray-700 font-medium">
            {menuItems.map((item) => (
              <li key={item.href}>
                <a 
                  href={item.href} 
                  onClick={handleLinkClick}
                  className="block py-1 hover:text-pink-500 transition-colors duration-150"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
