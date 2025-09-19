"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronRight, Droplets, Scale, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

export default function SavanaBufalo() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-[#50a5de] to-[#3d8fc7] text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-2 md:mb-0">
              <a
                href="https://www.youtube.com/@OrganicosdelTropico"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-200 transition-colors duration-300"
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
              <Link href="/" className="text-gray-700 hover:text-[#6cb105] font-medium transition-colors duration-300">
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
                className="relative text-[#003f7d] font-medium after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-1 after:bg-[#003f7d] after:rounded-full flex items-center"
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
                <Link
                  href="/"
                  className="text-gray-700 hover:text-[#6cb105] font-medium py-2 transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
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
                  className="text-[#003f7d] font-medium py-2 flex items-center"
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
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        <Image
          src="/placeholder.svg?height=600&width=1920"
          alt="Savana Búfalo de Agua"
          width={1920}
          height={600}
          className="absolute inset-0 w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#003f7d]/80 to-[#003f7d]/40 flex flex-col items-center justify-center text-white">
          <div className="container mx-auto px-4 text-center md:text-left md:ml-16 lg:ml-32">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fadeIn">
              Savana <span className="text-white">Búfalo de Agua</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl animate-fadeIn animation-delay-300">
              Criadores y creadores del Bufalypso Savanero, búfalos rústicos, fértiles y longevos.
            </p>
            <div className="mt-8 animate-fadeIn animation-delay-600">
              <Button
                asChild
                className="bg-white hover:bg-gray-100 text-[#003f7d] rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <a href="#productos">Nuestros Productos</a>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Qué es Savana Búfalo de Agua?</h2>
              <div className="prose max-w-none text-lg">
                <p>
                  <span className="text-[#003f7d] font-semibold">Savana Búfalo de Agua</span> es nuestra división
                  especializada en la cría y desarrollo del Bufalypso Savanero, una raza de búfalos de agua adaptada a
                  las condiciones del trópico mexicano.
                </p>
                <p>
                  Somos pioneros en la cría de búfalos de agua en México, con más de 20 años de experiencia en el
                  desarrollo de ejemplares rústicos, fértiles y longevos, ideales para la producción de carne y leche de
                  alta calidad.
                </p>
                <p>
                  Nuestros búfalos son criados bajo un sistema de manejo holístico que respeta su naturaleza y promueve
                  su bienestar, resultando en animales saludables y productivos que contribuyen a la regeneración de los
                  ecosistemas.
                </p>
              </div>
              <div className="mt-8">
                <Button
                  asChild
                  className="bg-[#003f7d] hover:bg-[#002d5a] text-white rounded-full px-6 py-2 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <Link href="/contacto">
                    Contáctanos <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image src="/placeholder.svg?height=400&width=600" alt="Búfalos de Agua" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="productos" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nuestros Productos</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos búfalos de agua de la más alta calidad para diferentes propósitos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product 1 */}
            <Card className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#003f7d]">
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=200&width=400" alt="Pie de Cría" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <h3 className="text-white text-xl font-bold p-6">Pie de Cría</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-[#003f7d] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Búfalas y sementales seleccionados</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-[#003f7d] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Genética superior para producción</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-[#003f7d] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Animales adaptados al trópico</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-[#003f7d] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Asesoría en manejo y alimentación</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Product 2 */}
            <Card className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#003f7d]">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Búfalos para Engorda"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <h3 className="text-white text-xl font-bold p-6">Búfalos para Engorda</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-[#003f7d] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Ejemplares jóvenes para engorda</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-[#003f7d] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Rápido crecimiento y ganancia de peso</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-[#003f7d] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Carne de alta calidad y bajo colesterol</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-[#003f7d] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Planes de alimentación personalizados</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Product 3 */}
            <Card className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#003f7d]">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Asesoría Técnica"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <h3 className="text-white text-xl font-bold p-6">Asesoría Técnica</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-[#003f7d] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Consultoría en manejo de búfalos</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-[#003f7d] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Diseño de instalaciones adecuadas</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-[#003f7d] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Programas de alimentación y sanidad</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-[#003f7d] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Capacitación para personal</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Ventajas del Búfalo de Agua</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre por qué el búfalo de agua es una excelente alternativa para la ganadería sostenible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="bg-[#003f7d]/10 p-4 rounded-full mx-auto mb-6 w-20 h-20 flex items-center justify-center">
                <Droplets className="h-10 w-10 text-[#003f7d]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Adaptabilidad</h3>
              <p className="text-gray-600">
                Los búfalos se adaptan perfectamente a zonas inundables, pantanosas y de alta humedad donde el ganado
                convencional no prospera. Son ideales para el aprovechamiento de terrenos marginales.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="bg-[#003f7d]/10 p-4 rounded-full mx-auto mb-6 w-20 h-20 flex items-center justify-center">
                <Scale className="h-10 w-10 text-[#003f7d]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Productividad</h3>
              <p className="text-gray-600">
                Mayor conversión alimenticia, producen más carne y leche con menos alimento. Su carne tiene menos grasa,
                colesterol y calorías, y más proteínas que la del ganado vacuno.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="bg-[#003f7d]/10 p-4 rounded-full mx-auto mb-6 w-20 h-20 flex items-center justify-center">
                <Award className="h-10 w-10 text-[#003f7d]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Rusticidad</h3>
              <p className="text-gray-600">
                Mayor resistencia a enfermedades, parásitos y condiciones climáticas adversas. Menor requerimiento de
                medicamentos y tratamientos veterinarios, lo que reduce costos de producción.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Galería</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conoce nuestros ejemplares y las instalaciones donde criamos al Bufalypso Savanero.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative h-64 rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Búfalos de Agua"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Búfalos de Agua"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Búfalos de Agua"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Búfalos de Agua"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Búfalos de Agua"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Búfalos de Agua"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Búfalos de Agua"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Búfalos de Agua"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Testimonios</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lo que dicen nuestros clientes sobre nuestros búfalos y servicios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col items-center mb-6">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4">
                    <Image src="/placeholder.svg?height=80&width=80" alt="Cliente 1" fill className="object-cover" />
                  </div>
                  <h4 className="text-xl font-bold">Roberto Vázquez</h4>
                  <p className="text-gray-500">Ganadero, Veracruz</p>
                </div>
                <p className="text-gray-600 italic">
                  "Los búfalos que adquirí de Savana han superado todas mis expectativas. Son animales dóciles, fáciles
                  de manejar y con una capacidad de adaptación impresionante. La asesoría técnica que recibí fue
                  fundamental para el éxito de mi proyecto."
                </p>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col items-center mb-6">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4">
                    <Image src="/placeholder.svg?height=80&width=80" alt="Cliente 2" fill className="object-cover" />
                  </div>
                  <h4 className="text-xl font-bold">Laura Hernández</h4>
                  <p className="text-gray-500">Productora, Tabasco</p>
                </div>
                <p className="text-gray-600 italic">
                  "Inicié mi proyecto de búfalos hace tres años con ejemplares de Savana. La calidad genética es
                  evidente en la productividad y salud de los animales. Además, el equipo de Savana siempre está
                  disponible para resolver cualquier duda o problema."
                </p>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col items-center mb-6">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4">
                    <Image src="/placeholder.svg?height=80&width=80" alt="Cliente 3" fill className="object-cover" />
                  </div>
                  <h4 className="text-xl font-bold">Miguel Ramírez</h4>
                  <p className="text-gray-500">Empresario Agropecuario, Campeche</p>
                </div>
                <p className="text-gray-600 italic">
                  "Decidí invertir en búfalos como una alternativa al ganado tradicional para aprovechar terrenos
                  inundables. La decisión de comprar en Savana fue acertada. Sus animales son de excelente calidad y su
                  asesoría técnica ha sido clave para el éxito de mi inversión."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#003f7d] to-[#002d5a] text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <h3 className="text-3xl font-bold mb-2">¿Interesado en nuestros búfalos?</h3>
              <p className="text-xl opacity-90">
                Contáctanos para conocer disponibilidad y precios de nuestros ejemplares.
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="bg-white text-[#003f7d] hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a
                href="https://api.whatsapp.com/send?phone=529341150595&text=Hola%20visité%20su%20página%20web%20y%20me%20gustaría%20información%20sobre%20los%20búfalos%20de%20agua"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                Solicitar Información
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
                  className="lucide lucide-arrow-right ml-2"
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
                  href="https://api.whatsapp.com/send?phone=529341150595&text=Hola%20visité%20su%20página%20web%20y%20me%20gustaría%20información%20sobre%20los%20búfalos%20de%20agua"
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

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://api.whatsapp.com/send?phone=529341150595&text=Hola%20visité%20su%20página%20web%20y%20me%20gustaría%20información%20sobre%20los%20búfalos%20de%20agua"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-message-circle"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        </a>
      </div>
    </div>
  )
}
