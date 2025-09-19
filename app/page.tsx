"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-[#50a5de] text-white py-3" style={{ backgroundColor: "#50a5de", color: "#ffffff" }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-2 md:mb-0">
              <a
                href="https://www.youtube.com/@OrganicosdelTropico"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-200 transition-colors duration-300"
                style={{ color: "#ffffff" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-youtube"
                >
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <path d="m10 15 5-3-5-3z" />
                </svg>
              </a>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm">
              <a
                href="https://maps.app.goo.gl/qv6mZejdTBmKRn1B8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-white hover:text-gray-200 transition-colors duration-300"
                style={{ color: "#ffffff" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-map-pin mr-1"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Carretera Santa Adelaida-Palizada Km 3.5
              </a>
              <a
                href="mailto:organicosdeltropico@yahoo.com.mx"
                className="flex items-center text-white hover:text-gray-200 transition-colors duration-300"
                style={{ color: "#ffffff" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mail mr-1"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                organicosdeltropico@yahoo.com.mx
              </a>
              <a
                href="tel:+529341150595"
                className="flex items-center text-white hover:text-gray-200 transition-colors duration-300"
                style={{ color: "#ffffff" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-phone mr-1"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                +52 934 1150595
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Image
                src="/placeholder.svg?height=60&width=200"
                alt="Orgánicos del Trópico"
                width={200}
                height={60}
                className="h-12 w-auto"
              />
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link
                href="/"
                className="relative text-[#6cb105] font-medium after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-1 after:bg-[#6cb105] after:rounded-full"
              >
                Orgánicos del Trópico
              </Link>
              <Link
                href="/que-hacemos"
                className="text-gray-700 hover:text-[#6cb105] font-medium transition-colors duration-300"
              >
                ¿Qué Hacemos?
              </Link>
              <Link
                href="/eventos"
                className="text-gray-700 hover:text-[#6cb105] font-medium transition-colors duration-300"
              >
                Eventos
              </Link>
              <Link
                href="/cursos"
                className="text-gray-700 hover:text-[#6cb105] font-medium transition-colors duration-300"
              >
                Cursos
              </Link>
              <Link
                href="/contacto"
                className="text-gray-700 hover:text-[#6cb105] font-medium transition-colors duration-300"
              >
                Contacto
              </Link>
              <Link
                href="/pijije-regenerativo"
                className="text-gray-700 hover:text-[#af2600] font-medium flex items-center transition-colors duration-300"
              >
                <Image
                  src="/placeholder.svg?height=20&width=20"
                  alt="Pijije Regenerativo"
                  width={20}
                  height={20}
                  className="h-5 w-5 mr-1"
                />
                Pijije Regenerativo
              </Link>
              <Link
                href="/savana-bufalo"
                className="text-gray-700 hover:text-[#003f7d] font-medium flex items-center transition-colors duration-300"
              >
                <Image
                  src="/placeholder.svg?height=20&width=20"
                  alt="Savana"
                  width={20}
                  height={20}
                  className="h-5 w-5 mr-1"
                />
                Savana
              </Link>
            </nav>
            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-menu"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 py-4 bg-white border-t">
              <div className="flex flex-col space-y-4 px-4">
                <Link href="/" className="text-[#6cb105] font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
                  Orgánicos del Trópico
                </Link>
                <Link
                  href="/que-hacemos"
                  className="text-gray-700 hover:text-[#6cb105] font-medium py-2 transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  ¿Qué Hacemos?
                </Link>
                <Link
                  href="/eventos"
                  className="text-gray-700 hover:text-[#6cb105] font-medium py-2 transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Eventos
                </Link>
                <Link
                  href="/cursos"
                  className="text-gray-700 hover:text-[#6cb105] font-medium py-2 transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Cursos
                </Link>
                <Link
                  href="/contacto"
                  className="text-gray-700 hover:text-[#6cb105] font-medium py-2 transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contacto
                </Link>
                <Link
                  href="/pijije-regenerativo"
                  className="text-gray-700 hover:text-[#af2600] font-medium py-2 flex items-center transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Image
                    src="/placeholder.svg?height=20&width=20"
                    alt="Pijije Regenerativo"
                    width={20}
                    height={20}
                    className="h-5 w-5 mr-1"
                  />
                  Pijije Regenerativo
                </Link>
                <Link
                  href="/savana-bufalo"
                  className="text-gray-700 hover:text-[#003f7d] font-medium py-2 flex items-center transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Image
                    src="/placeholder.svg?height=20&width=20"
                    alt="Savana"
                    width={20}
                    height={20}
                    className="h-5 w-5 mr-1"
                  />
                  Savana
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        <Image
          src="/placeholder.svg?height=700&width=1920"
          alt="Orgánicos del Trópico"
          width={1920}
          height={700}
          className="absolute inset-0 w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center">
          <div className="container mx-auto px-4 text-center md:text-left md:ml-16 lg:ml-32">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fadeIn text-white" style={{ color: "#ffffff" }}>
              Orgánicos del <span className="text-[#6cb105]">Trópico</span>
            </h1>
            <p
              className="text-xl md:text-2xl max-w-2xl animate-fadeIn animation-delay-300 text-white"
              style={{ color: "#ffffff" }}
            >
              Agricultura y ganadería regenerativa para un futuro sostenible
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fadeIn animation-delay-600">
              <Button
                asChild
                className="bg-[#6cb105] hover:bg-[#5a9504] text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <a href="/que-hacemos">Descubre Qué Hacemos</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="bg-black/20 border-white text-white hover:bg-white hover:text-[#6cb105] rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <a href="/eventos">Próximos Eventos</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Quiénes Somos</h2>
              <div className="prose max-w-none text-lg">
                <p>
                  En <span className="text-[#6cb105] font-semibold">Orgánicos del Trópico</span>, nos dedicamos a la
                  promoción y desarrollo de la agricultura y ganadería regenerativa, buscando un equilibrio entre la
                  producción sostenible y el respeto por el medio ambiente.
                </p>
                <p>
                  Ubicados en el municipio de Palizada, Campeche, formamos parte del corredor de biodiversidad más
                  importante de Latinoamérica, lo que nos compromete aún más con prácticas que preserven y enriquezcan
                  nuestro entorno natural.
                </p>
                <p>
                  Nuestra misión es transformar la forma en que se practica la agricultura y la ganadería, demostrando
                  que es posible producir alimentos de alta calidad mientras regeneramos los ecosistemas.
                </p>
              </div>
              <div className="mt-8">
                <Button
                  asChild
                  className="bg-[#6cb105] hover:bg-[#5a9504] text-white rounded-full px-6 py-2 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <Link href="/que-hacemos">
                    Conoce Más Sobre Nosotros
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-2 h-4 w-4"
                    >
                      <path d="m9 18 4 8 5-5v7H6V4l2-1z" />
                    </svg>
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Orgánicos del Trópico"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nuestros Servicios</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A través de nuestras marcas especializadas, ofrecemos soluciones integrales para la agricultura y
              ganadería sostenible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Agricultura Regenerativa"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <h3 className="text-white text-xl font-bold p-6">Agricultura Regenerativa</h3>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-[#6cb105] mr-2 mt-0.5 flex-shrink-0"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                    <span>Asesorías y cursos especializados</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-[#6cb105] mr-2 mt-0.5 flex-shrink-0"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                    <span>Implementación de sistemas regenerativos</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-[#6cb105] mr-2 mt-0.5 flex-shrink-0"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                    <span>Desarrollo de proyectos sostenibles</span>
                  </li>
                </ul>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-[#6cb105] text-[#6cb105] hover:bg-[#6cb105] hover:text-white bg-transparent"
                >
                  <Link href="/pijije-regenerativo">Más Información</Link>
                </Button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Ganadería Búfalo de Agua"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <h3 className="text-white text-xl font-bold p-6">Ganadería Búfalo de Agua</h3>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-[#6cb105] mr-2 mt-0.5 flex-shrink-0"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                    <span>Cría y venta de búfalos de agua</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-[#6cb105] mr-2 mt-0.5 flex-shrink-0"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                    <span>Asesoría en manejo de ganado bufalino</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-[#6cb105] mr-2 mt-0.5 flex-shrink-0"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                    <span>Producción sostenible de carne y leche</span>
                  </li>
                </ul>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-[#6cb105] text-[#6cb105] hover:bg-[#6cb105] hover:text-white bg-transparent"
                >
                  <Link href="/savana-bufalo">Más Información</Link>
                </Button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Eventos y Capacitación"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <h3 className="text-white text-xl font-bold p-6">Eventos y Capacitación</h3>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-[#6cb105] mr-2 mt-0.5 flex-shrink-0"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                    <span>Talleres prácticos en nuestra finca</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-[#6cb105] mr-2 mt-0.5 flex-shrink-0"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                    <span>Cursos especializados en agricultura</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-[#6cb105] mr-2 mt-0.5 flex-shrink-0"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                    <span>Conferencias y seminarios</span>
                  </li>
                </ul>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-[#6cb105] text-[#6cb105] hover:bg-[#6cb105] hover:text-white bg-transparent"
                >
                  <Link href="/eventos">Ver Próximos Eventos</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-[#6cb105]/10 p-6 rounded-2xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-10 w-10 text-[#6cb105] mb-4"
                    >
                      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                    </svg>
                    <h3 className="text-xl font-bold mb-2">Biodiversidad</h3>
                    <p>Preservamos y fomentamos la biodiversidad en nuestra región.</p>
                  </div>
                  <div className="bg-[#50a5de]/10 p-6 rounded-2xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-10 w-10 text-[#50a5de] mb-4"
                    >
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                    </svg>
                    <h3 className="text-xl font-bold mb-2">Sostenibilidad</h3>
                    <p>Implementamos prácticas sostenibles en todos nuestros procesos.</p>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-[#af2600]/10 p-6 rounded-2xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-10 w-10 text-[#af2600] mb-4"
                    >
                      <path d="m8 3 4 8 5-5v7H6V4l2-1z" />
                    </svg>
                    <h3 className="text-xl font-bold mb-2">Regeneración</h3>
                    <p>Regeneramos los suelos y ecosistemas a través de nuestras prácticas.</p>
                  </div>
                  <div className="bg-[#003f7d]/10 p-6 rounded-2xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-10 w-10 text-[#003f7d] mb-4"
                    >
                      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                      <path d="M9 18h6" />
                      <path d="M10 22h4" />
                    </svg>
                    <h3 className="text-xl font-bold mb-2">Innovación</h3>
                    <p>Buscamos constantemente nuevas formas de mejorar nuestros métodos.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Nuestros Valores</h2>
              <div className="prose max-w-none text-lg">
                <p>
                  En Orgánicos del Trópico, nos guiamos por valores fundamentales que definen nuestra forma de trabajar
                  y relacionarnos con el entorno.
                </p>
                <p>
                  Creemos firmemente en la importancia de preservar la biodiversidad, implementar prácticas sostenibles,
                  regenerar los ecosistemas y buscar constantemente la innovación en nuestros métodos.
                </p>
                <p>
                  Estos valores no solo guían nuestro trabajo diario, sino que también son la base de nuestros programas
                  de capacitación y asesoría, buscando transmitir estos principios a todos los que se acercan a
                  nosotros.
                </p>
              </div>
              <div className="mt-8">
                <Button
                  asChild
                  className="bg-[#6cb105] hover:bg-[#5a9504] text-white rounded-full px-6 py-2 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <Link href="/contacto">
                    Contáctanos
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-2 h-4 w-4"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Próximos Eventos</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Participa en nuestros talleres, cursos y conferencias para aprender más sobre agricultura y ganadería
              regenerativa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Event 1 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Taller de Agricultura Regenerativa"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#6cb105] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  15 Mayo, 2024
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Taller de Agricultura Regenerativa</h3>
                <p className="text-gray-600 mb-4">
                  Aprende los fundamentos de la agricultura regenerativa y cómo implementarla en tu propio terreno.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Cupos limitados</span>
                  <Button
                    asChild
                    variant="outline"
                    className="border-[#6cb105] text-[#6cb105] hover:bg-[#6cb105] hover:text-white bg-transparent"
                  >
                    <Link href="/eventos">Ver Detalles</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Event 2 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Curso de Manejo de Búfalos"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#003f7d] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  22 Mayo, 2024
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Curso de Manejo de Búfalos</h3>
                <p className="text-gray-600 mb-4">
                  Conoce las técnicas adecuadas para el manejo de búfalos de agua y maximiza su producción.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Cupos limitados</span>
                  <Button
                    asChild
                    variant="outline"
                    className="border-[#6cb105] text-[#6cb105] hover:bg-[#6cb105] hover:text-white bg-transparent"
                  >
                    <Link href="/eventos">Ver Detalles</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Event 3 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Conferencia de Biodiversidad"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#af2600] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  5 Junio, 2024
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Conferencia de Biodiversidad</h3>
                <p className="text-gray-600 mb-4">
                  Participa en nuestra conferencia sobre la importancia de la biodiversidad en los sistemas agrícolas.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Cupos limitados</span>
                  <Button
                    asChild
                    variant="outline"
                    className="border-[#6cb105] text-[#6cb105] hover:bg-[#6cb105] hover:text-white bg-transparent"
                  >
                    <Link href="/eventos">Ver Detalles</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              className="bg-[#6cb105] hover:bg-[#5a9504] text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/eventos">Ver Todos los Eventos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#5a9504] text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <h3 className="text-3xl font-bold mb-2 text-white">¿Tienes alguna duda?</h3>
              <p className="text-xl text-white">
                Estamos aquí para ayudarte en tu proyecto de agricultura o ganadería sostenible.
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="bg-white text-[#6cb105] hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a
                href="https://api.whatsapp.com/send?phone=529341150595&text=Hola%20visité%20su%20página%20web%20y%20me%20gustaría%20que%20me%20contactaran%20para%20más%20información"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                ¡Contáctanos ahora!
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center md:text-left">
              <p className="text-lg">
                &copy; 2024 ORGÁNICOS DEL TRÓPICO |{" "}
                <a href="/aviso-privacidad" className="hover:text-white transition-colors duration-300">
                  Aviso de Privacidad
                </a>
              </p>
              <p className="mt-2">
                Diseño:{" "}
                <a
                  href="https://webdsg.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-300"
                >
                  Web DSG
                </a>
              </p>
            </div>
            <div className="text-center md:text-right">
              <div className="flex justify-center md:justify-end mb-4">
                <a
                  href="https://www.youtube.com/@OrganicosdelTropico"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-full hover:bg-red-600 transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-youtube"
                  >
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                    <path d="m10 15 5-3-5-3z" />
                  </svg>
                </a>
              </div>
              <div className="flex flex-col md:flex-row justify-center md:justify-end space-y-2 md:space-y-0 md:space-x-4 text-sm">
                <a
                  href="mailto:organicosdeltropico@yahoo.com.mx"
                  className="hover:text-white transition-colors duration-300 flex items-center justify-center md:justify-start"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-mail mr-1"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  organicosdeltropico@yahoo.com.mx
                </a>
                <span className="hidden md:inline">•</span>
                <a
                  href="tel:+529341150595"
                  className="hover:text-white transition-colors duration-300 flex items-center justify-center md:justify-start"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-phone mr-1"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  +52 934 1150595
                </a>
                <span className="hidden md:inline">•</span>
                <a
                  href="https://api.whatsapp.com/send?phone=529341150595&text=Hola%20visité%20su%20página%20web%20y%20me%20gustaría%20que%20me%20contactaran%20para%20más%20información"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-300 flex items-center justify-center md:justify-start"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-message-circle mr-1"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                  Enviar mensaje
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
