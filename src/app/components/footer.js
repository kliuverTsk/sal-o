import Link from 'next/link'
import Image from 'next/image'
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa'
import { urbanistFont } from "../../ui/fonts"

const menuItems = [
  { href: "#inicio", label: "Home" },
  { href: "#servicos", label: "Serviços" },
  { href: "#resultados", label: "Resultados" },
  { href: "#prosperamos-por", label: "Prosperamos por" },
  { href: "#sobre", label: "Sobre" },
  { href: "#testemoniais", label: "Testemoniais" },
  { href: "#contato", label: "Contato" }
]

export default function Footer() {
  return (
    <footer className="bg-purple-900 text-white py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div className="text-center sm:text-left">
            <div className="flex justify-center sm:justify-start">
              <Image 
                src="/sal-o/logotipo.png" 
                alt="Logo" 
                width={120} 
                height={32} 
                className="mb-4 rounded-2xl" 
                priority 
              />
            </div>
            <p className={`text-gray-200 ${urbanistFont.className} text-base max-w-xs mx-auto sm:mx-0`}>
              Transformando sua beleza com excelência e dedicação
            </p>
          </div>
          
          <div className="text-center sm:text-left">
            <h3 className={`font-semibold mb-3 text-sm ${urbanistFont.className}`}>Explore</h3>
            <ul className="space-y-1.5">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={`text-gray-300 hover:text-white text-sm ${urbanistFont.className}`}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h3 className={`font-semibold mb-4 text-base ${urbanistFont.className}`}>Contato</h3>
            <ul className={`space-y-2 text-gray-200 text-base ${urbanistFont.className}`}>
              <li>Rua Principal, 123</li>
              <li>São Paulo, SP</li>
              <li>contato@stylice.com</li>
              <li>(11) 949749057</li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h3 className={`font-semibold mb-4 text-base ${urbanistFont.className}`}>Redes Sociais</h3>
            <div className="flex gap-6 justify-center sm:justify-start">
              {[
                { icon: <FaInstagram size={24} />, url: "https://instagram.com/stylice" },
                { icon: <FaFacebookF size={24} />, url: "https://facebook.com/stylice" },
                { icon: <FaWhatsapp size={24} />, url: "https://wa.me/5511949749057" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-200 hover:text-white hover:scale-110 transition-transform"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-purple-800 mt-8 md:mt-12 pt-8 text-center text-gray-200 text-sm">
          <p className={urbanistFont.className}>&copy; 2024 Seu Salão de Beleza. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}