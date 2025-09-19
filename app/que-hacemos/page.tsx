"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronRight, Leaf, Recycle, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

export default function QueHacemos() {
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
                className="relative text-[#6cb105] font-medium after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-1 after:bg-[#6cb105] after:rounded-full"
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
                <Link
                  href="/"
                  className="text-gray-700 hover:text-[#6cb105] font-medium py-2 transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Orgánicos del Trópico
                </Link>
                <Link
                  href="/que-hacemos"
                  className="text-[#6cb105] font-medium py-2"
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
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <Image
          src="/placeholder.svg?height=500&width=1920"
          alt="¿Qué Hacemos?"
          width={1920}
          height={500}
          className="absolute inset-0 w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex flex-col items-center justify-center text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fadeIn">
              ¿Qué <span className="text-[#6cb105]">Hacemos?</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fadeIn animation-delay-300">
              Transformamos la agricultura y ganadería tradicional en sistemas regenerativos que benefician al productor
              y al medio ambiente.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Nuestra Misión y Visión</h2>
              <div className="prose max-w-none text-lg">
                <h3 className="text-2xl font-semibold text-[#6cb105] mb-4">Misión</h3>
                <p>
                  Promover y desarrollar sistemas de producción agropecuaria regenerativa que mejoren la calidad de vida
                  de los productores, restauren los ecosistemas y contribuyan a la mitigación del cambio climático en el
                  trópico mexicano.
                </p>

                <h3 className="text-2xl font-semibold text-[#6cb105] mt-8 mb-4">Visión</h3>
                <p>
                  Ser un referente en la transformación de la agricultura y ganadería hacia modelos regenerativos,
                  demostrando que es posible producir alimentos de alta calidad mientras se regeneran los ecosistemas y
                  se mejora la rentabilidad de los productores.
                </p>
              </div>
              <div className="mt-8">
                <Button
                  asChild
                  className="bg-[#6cb105] hover:bg-[#5a9504] text-white rounded-full px-6 py-2 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <Link href="/contacto">
                    Contáctanos <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image src="/placeholder.svg?height=400&width=600" alt="Misión y Visión" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nuestro Enfoque</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              En Orgánicos del Trópico trabajamos bajo un enfoque holístico que integra diversos aspectos para lograr
              sistemas productivos sostenibles y regenerativos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Approach 1 */}
            <Card className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Regeneración de Ecosistemas"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <h3 className="text-white text-xl font-bold p-6">Regeneración de Ecosistemas</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-[#6cb105] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Restauración de suelos degradados</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-[#6cb105] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Aumento de la biodiversidad</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-[#6cb105] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Captura de carbono en suelos</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-[#6cb105] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Mejora del ciclo hidrológico</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Approach 2 */}
            <Card className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Producción Sostenible"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <h3 className="text-white text-xl font-bold p-6">Producción Sostenible</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-[#6cb105] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Sistemas silvopastoriles</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-[#6cb105] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Agricultura sintrópica</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-[#6cb105] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Manejo holístico de pastizales</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-[#6cb105] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Reducción de insumos externos</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Approach 3 */}
            <Card className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Transferencia de Conocimiento"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <h3 className="text-white text-xl font-bold p-6">Transferencia de Conocimiento</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-[#6cb105] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Capacitación a productores</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-[#6cb105] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Talleres prácticos en finca</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-[#6cb105] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Asesoría técnica especializada</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-[#6cb105] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Investigación aplicada</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Brands Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nuestras Marcas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A través de nuestras marcas especializadas, ofrecemos soluciones integrales para diferentes aspectos de la
              agricultura y ganadería regenerativa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Pijije Regenerativo */}
            <Card className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#af2600]">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="relative h-48 md:h-auto md:col-span-1">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Pijije Regenerativo"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 md:col-span-2">
                  <div className="flex items-center mb-4">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="Pijije Logo"
                      width={40}
                      height={40}
                      className="mr-3"
                    />
                    <h3 className="text-2xl font-bold text-[#af2600]">Pijije Regenerativo</h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Nuestra división especializada en asesoría y capacitación en agricultura y ganadería regenerativa.
                    Ofrecemos servicios de consultoría, diseño de sistemas regenerativos y desarrollo de proyectos de
                    bonos de carbono.
                  </p>
                  <Button asChild className="bg-[#af2600] hover:bg-[#8e1f00] text-white">
                    <Link href="/pijije-regenerativo">Conocer más</Link>
                  </Button>
                </div>
              </div>
            </Card>

            {/* Savana Búfalo de Agua */}
            <Card className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#003f7d]">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="relative h-48 md:h-auto md:col-span-1">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Savana Búfalo de Agua"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 md:col-span-2">
                  <div className="flex items-center mb-4">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="Savana Logo"
                      width={40}
                      height={40}
                      className="mr-3"
                    />
                    <h3 className="text-2xl font-bold text-[#003f7d]">Savana Búfalo de Agua</h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Nuestra división dedicada a la cría y desarrollo del Bufalypso Savanero, una raza de búfalos de agua
                    adaptada a las condiciones del trópico mexicano. Ofrecemos ejemplares de alta calidad para
                    producción de carne y leche.
                  </p>
                  <Button asChild className="bg-[#003f7d] hover:bg-[#002d5a] text-white">
                    <Link href="/savana-bufalo">Conocer más</Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nuestro Impacto</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A través de nuestro trabajo, generamos un impacto positivo en diferentes ámbitos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Impact 1 */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-[#6cb105]/10 p-4 rounded-full mx-auto mb-6 w-20 h-20 flex items-center justify-center">
                <Leaf className="h-10 w-10 text-[#6cb105]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Ambiental</h3>
              <p className="text-gray-600">
                Hemos regenerado más de 500 hectáreas de suelos degradados, aumentando la biodiversidad y capturando
                carbono en el suelo, contribuyendo así a la mitigación del cambio climático.
              </p>
            </div>

            {/* Impact 2 */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-[#6cb105]/10 p-4 rounded-full mx-auto mb-6 w-20 h-20 flex items-center justify-center">
                <Recycle className="h-10 w-10 text-[#6cb105]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Económico</h3>
              <p className="text-gray-600">
                Nuestros sistemas regenerativos han permitido a los productores reducir sus costos de producción en
                hasta un 40%, mientras aumentan su productividad y acceden a mercados diferenciados.
              </p>
            </div>

            {/* Impact 3 */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-[#6cb105]/10 p-4 rounded-full mx-auto mb-6 w-20 h-20 flex items-center justify-center">
                <Shield className="h-10 w-10 text-[#6cb105]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Social</h3>
              <p className="text-gray-600">
                Hemos capacitado a más de 1,000 productores en técnicas regenerativas, mejorando sus condiciones de vida
                y promoviendo el arraigo en sus comunidades a través de sistemas productivos rentables.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nuestro Equipo</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Contamos con un equipo multidisciplinario de profesionales comprometidos con la transformación de la
              agricultura y ganadería.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <Card className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Miembro del Equipo 1"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">Ing. Carlos Rodríguez</h3>
                <p className="text-[#6cb105] font-medium mb-4">Director General</p>
                <p className="text-gray-600">
                  Ingeniero Agrónomo con más de 20 años de experiencia en sistemas regenerativos. Pionero en la
                  implementación de sistemas silvopastoriles en el trópico mexicano.
                </p>
              </CardContent>
            </Card>

            {/* Team Member 2 */}
            <Card className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Miembro del Equipo 2"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">M.C. Laura Hernández</h3>
                <p className="text-[#6cb105] font-medium mb-4">Directora de Investigación</p>
                <p className="text-gray-600">
                  Maestra en Ciencias con especialidad en Agroecología. Experta en diseño de sistemas regenerativos y
                  monitoreo de impacto ambiental.
                </p>
              </CardContent>
            </Card>

            {/* Team Member 3 */}
            <Card className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Miembro del Equipo 3"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">MVZ. Miguel Sánchez</h3>
                <p className="text-[#6cb105] font-medium mb-4">Director de Ganadería</p>
                <p className="text-gray-600">
                  Médico Veterinario Zootecnista especializado en manejo de búfalos de agua y sistemas de pastoreo
                  regenerativo.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#6cb105] to-[#5a9504] text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <h3 className="text-3xl font-bold mb-2">¿Quieres conocer más sobre nuestro trabajo?</h3>
              <p className="text-xl opacity-90">
                Contáctanos para agendar una visita a nuestra finca demostrativa o para recibir más información.
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="bg-white text-[#6cb105] hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a
                href="https://api.whatsapp.com/send?phone=529341150595&text=Hola%20visité%20su%20página%20web%20y%20me%20gustaría%20más%20información%20sobre%20su%20trabajo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                Contáctanos ahora
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
                  href="https://api.whatsapp.com/send?phone=529341150595&text=Hola%20visité%20su%20página%20web%20y%20me%20gustaría%20más%20información%20sobre%20su%20trabajo"
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
          href="https://api.whatsapp.com/send?phone=529341150595&text=Hola%20visité%20su%20página%20web%20y%20me%20gustaría%20más%20información%20sobre%20su%20trabajo"
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
