"use client"

import Image from "next/image"
import Link from "next/link"
import { Calendar, ExternalLink, Newspaper, Award, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

export default function Prensa() {
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
                href="/cursos"
                className="text-gray-700 hover:text-[#6cb105] font-medium transition-colors duration-300"
              >
                Cursos
              </Link>
              <Link
                href="/prensa"
                className="relative text-[#6cb105] font-medium after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-1 after:bg-[#6cb105] after:rounded-full"
              >
                Artículos
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
                  className="text-gray-700 hover:text-[#6cb105] font-medium py-2 transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  ¿Qué Hacemos?
                </Link>
                <Link
                  href="/cursos"
                  className="text-gray-700 hover:text-[#6cb105] font-medium py-2 transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Cursos
                </Link>
                <Link
                  href="/prensa"
                  className="text-[#6cb105] font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Artículos
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
          alt="Prensa - Orgánicos del Trópico"
          width={1920}
          height={500}
          className="absolute inset-0 w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex flex-col items-center justify-center text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fadeIn">
              En los <span className="text-[#6cb105]">Medios</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fadeIn animation-delay-300">
              Reconocimiento nacional de nuestro trabajo en ganadería regenerativa y bonos de carbono
            </p>
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Artículos Destacados</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Medios nacionales reconocen nuestro liderazgo en ganadería regenerativa y bonos de carbono
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Artículo Tumba Pato */}
            <Card className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-600">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="México impulsa la ganadería regenerativa"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Tumba Pato
                </div>
                <Badge className="absolute top-4 right-4 bg-red-500 text-white">DESTACADO</Badge>
              </div>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Calendar className="h-5 w-5 text-gray-500 mr-2" />
                  <span className="text-sm text-gray-500">14 de Julio, 2025</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  México impulsa la ganadería regenerativa como estrategia climática y económica
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  INEGI reporta potencial de captura de carbono en sistemas ganaderos regenerativos, destacando el
                  trabajo pionero de Orgánicos del Trópico en Campeche como ejemplo de éxito en la implementación de
                  prácticas sostenibles que benefician tanto al medio ambiente como a la economía rural.
                </p>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Puntos Destacados:</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Reconocimiento del INEGI al potencial de captura de carbono</li>
                      <li>• Mención específica de Orgánicos del Trópico como caso de éxito</li>
                      <li>• Impacto económico positivo en comunidades rurales</li>
                      <li>• Estrategia nacional de mitigación climática</li>
                    </ul>
                  </div>
                  <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <a
                      href="https://tumbapato.com/2025/07/14/mexico-impulsa-la-ganaderia-regenerativa-como-estrategia-climatica-y-economica-inegi-reporta-potencial-de-captura-de-carbono/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      Leer Artículo Completo <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Artículo Imagen Agropecuaria */}
            <Card className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-green-600">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Bonos de carbono en ganadería regenerativa"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Imagen Agropecuaria
                </div>
                <Badge className="absolute top-4 right-4 bg-yellow-500 text-white">ESPECIALIZADO</Badge>
              </div>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Calendar className="h-5 w-5 text-gray-500 mr-2" />
                  <span className="text-sm text-gray-500">2025</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Bonos de carbono en ganadería regenerativa: alternativa sustentable y rentable
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Análisis detallado sobre cómo los bonos de carbono representan una oportunidad económica y ambiental
                  para los ganaderos mexicanos. El artículo destaca las metodologías implementadas por Orgánicos del
                  Trópico para acceder a estos mercados internacionales.
                </p>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Aspectos Clave:</h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Metodologías para acceso a mercados de carbono</li>
                      <li>• Rentabilidad de sistemas regenerativos</li>
                      <li>• Casos de éxito en México</li>
                      <li>• Impacto ambiental positivo medible</li>
                    </ul>
                  </div>
                  <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white">
                    <a
                      href="https://imagenagropecuaria.com/2025/bonos-de-carbono-en-ganaderia-regenerativa-alternativa-sustentable-y-rentable/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      Leer Artículo Completo <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nuestro Impacto en los Medios</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              El reconocimiento mediático refleja nuestro compromiso con la innovación y la sostenibilidad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-[#6cb105]/10 p-4 rounded-full mx-auto mb-6 w-20 h-20 flex items-center justify-center">
                <Newspaper className="h-10 w-10 text-[#6cb105]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Cobertura Nacional</h3>
              <p className="text-gray-600">
                Nuestro trabajo ha sido reconocido por medios especializados a nivel nacional, posicionándonos como
                líderes en ganadería regenerativa.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-[#6cb105]/10 p-4 rounded-full mx-auto mb-6 w-20 h-20 flex items-center justify-center">
                <Award className="h-10 w-10 text-[#6cb105]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Reconocimiento Institucional</h3>
              <p className="text-gray-600">
                Instituciones como el INEGI han reconocido nuestro potencial de captura de carbono y nuestro impacto en
                la mitigación del cambio climático.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-[#6cb105]/10 p-4 rounded-full mx-auto mb-6 w-20 h-20 flex items-center justify-center">
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
                  className="lucide lucide-trending-up text-[#6cb105]"
                >
                  <polyline points="22,7 13.5,15.5 8.5,10.5 2,17" />
                  <polyline points="16,7 22,7 22,13" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Influencia Sectorial</h3>
              <p className="text-gray-600">
                Nuestras metodologías y resultados están influyendo en las políticas públicas y estrategias del sector
                agropecuario mexicano.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Press Kit Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Kit de Prensa</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recursos para medios de comunicación interesados en cubrir nuestro trabajo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-blue-100 p-4 rounded-full mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-file-text text-blue-600"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14,2 14,8 20,8" />
                  <line x1="16" x2="8" y1="13" y2="13" />
                  <line x1="16" x2="8" y1="17" y2="17" />
                  <polyline points="10,9 9,9 8,9" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Comunicados</h3>
              <p className="text-gray-600 text-sm">Comunicados de prensa oficiales</p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-green-100 p-4 rounded-full mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-camera text-green-600"
                >
                  <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                  <circle cx="12" cy="13" r="3" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Fotografías</h3>
              <p className="text-gray-600 text-sm">Banco de imágenes de alta resolución</p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-purple-100 p-4 rounded-full mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-user text-purple-600"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Biografías</h3>
              <p className="text-gray-600 text-sm">Perfiles de nuestros expertos</p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-orange-100 p-4 rounded-full mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-bar-chart text-orange-600"
                >
                  <line x1="12" x2="12" y1="20" y2="10" />
                  <line x1="18" x2="18" y1="20" y2="4" />
                  <line x1="6" x2="6" y1="20" y2="16" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Datos</h3>
              <p className="text-gray-600 text-sm">Estadísticas e infografías</p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              className="bg-[#6cb105] hover:bg-[#5a9504] text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/contacto" className="flex items-center">
                Contacto para Medios
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#6cb105] to-[#5a9504] text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <h3 className="text-3xl font-bold mb-2">¿Eres periodista o medio de comunicación?</h3>
              <p className="text-xl opacity-90">
                Contáctanos para entrevistas, información adicional o cobertura de nuestros eventos.
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="bg-white text-[#6cb105] hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a
                href="mailto:organicosdeltropico@yahoo.com.mx?subject=Consulta%20de%20Medios"
                className="flex items-center"
              >
                Contactar Prensa
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
                  className="lucide lucide-mail ml-2"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
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
