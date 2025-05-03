'use client'
import Navbar from "./components/navbar"
import Header from "./components/header"
import Servicos from "./components/servicos"
import Experiencia from "./components/experiencia"
import Echos from "./components/echos"
import Historia from "./components/historia"
import Testimonios from "./components/testimonios"
import Contacto from "./components/contacto"
import Footer from "./components/footer"

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Header />
      <div className="bg-white">
        <Servicos />
        <Experiencia />
        <Echos />
        <Historia />
        <Testimonios />
        <Contacto />
        <Footer />
      </div>
    </main>
  )
}
