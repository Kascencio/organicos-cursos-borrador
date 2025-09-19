"use client"

import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin, Clock, Users, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

export default function Eventos() {
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
                className="relative text-[#6cb105] font-medium after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-1 after:bg-[#6cb105] after:rounded-full"
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
                  className="text-gray-700 hover:text-[#6cb105] font-medium py-2 transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  ¿Qué Hacemos?
                </Link>
                <Link
                  href="/eventos"
                  className="text-[#6cb105] font-medium py-2"
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
      <section className="relative h-96 overflow-hidden">
        <Image
          src="/placeholder.svg?height=400&width=1200"
          alt="Eventos - Orgánicos del Trópico"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex flex-col items-center justify-center text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeIn">Eventos</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fadeIn animation-delay-300">
              Participa en nuestros eventos de agricultura orgánica y ganadería sostenible
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Próximos Eventos</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No te pierdas nuestros próximos eventos y capacitaciones
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Featured Event */}
            <Card className="lg:col-span-2 overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Curso de Ganadería Regenerativa"
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-red-500 text-white">PRÓXIMO</Badge>
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Calendar className="h-5 w-5 text-[#6cb105] mr-2" />
                    <span className="text-sm text-gray-600">9-10 de Agosto, 2024</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Curso: Ganadería Regenerativa y Bonos de Carbono</h3>
                  <p className="text-gray-600 mb-6">
                    Aprende las técnicas más avanzadas de ganadería regenerativa y cómo acceder a los mercados de bonos
                    de carbono. Incluye día de campo práctico.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 text-[#6cb105] mr-2" />
                      <span className="text-sm">Hotel Calinda Viva, Villahermosa, Tabasco</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-[#6cb105] mr-2" />
                      <span className="text-sm">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 text-[#6cb105] mr-2" />
                      <span className="text-sm">Cupos limitados</span>
                    </div>
                  </div>
                  <Button asChild className="bg-[#6cb105] hover:bg-[#5a9504] text-white">
                    <Link href="/cursos">Ver Detalles e Inscribirse</Link>
                  </Button>
                </CardContent>
              </div>
            </Card>

            {/* Other Events */}
            <Card className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Taller de Agricultura Orgánica"
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-blue-500 text-white">PLANIFICADO</Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Calendar className="h-4 w-4 text-[#6cb105] mr-2" />
                  <span className="text-sm text-gray-600">Septiembre 2024</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Taller de Certificación Orgánica</h3>
                <p className="text-gray-600 mb-4">
                  Conoce los procesos y requisitos para obtener la certificación orgánica de tus productos.
                </p>
                <Button
                  variant="outline"
                  className="w-full border-[#6cb105] text-[#6cb105] hover:bg-[#6cb105] hover:text-white bg-transparent"
                >
                  Más Información Próximamente
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Día de Campo Ganadero"
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-green-500 text-white">PLANIFICADO</Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Calendar className="h-4 w-4 text-[#6cb105] mr-2" />
                  <span className="text-sm text-gray-600">Octubre 2024</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Día de Campo: Manejo Sostenible</h3>
                <p className="text-gray-600 mb-4">
                  Visita práctica a ranchos modelo que implementan técnicas de manejo sostenible y regenerativo.
                </p>
                <Button
                  variant="outline"
                  className="w-full border-[#6cb105] text-[#6cb105] hover:bg-[#6cb105] hover:text-white bg-transparent"
                >
                  Más Información Próximamente
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Eventos Anteriores</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Conoce algunos de los eventos que hemos realizado</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden rounded-2xl shadow-lg">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Conferencia de Agricultura Orgánica"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Calendar className="h-4 w-4 text-gray-500 mr-2" />
                  <span className="text-sm text-gray-500">Marzo 2024</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Conferencia Regional de Agricultura Orgánica</h3>
                <p className="text-gray-600">
                  Evento exitoso con más de 200 participantes de toda la región del sureste mexicano.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden rounded-2xl shadow-lg">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Taller de Búfalos"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Calendar className="h-4 w-4 text-gray-500 mr-2" />
                  <span className="text-sm text-gray-500">Enero 2024</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Taller de Manejo de Búfalos de Agua</h3>
                <p className="text-gray-600">
                  Capacitación especializada en el manejo y aprovechamiento de búfalos en sistemas tropicales.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden rounded-2xl shadow-lg">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Día de Campo Sostenible"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Calendar className="h-4 w-4 text-gray-500 mr-2" />
                  <span className="text-sm text-gray-500">Noviembre 2023</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Día de Campo: Agricultura Sostenible</h3>
                <p className="text-gray-600">
                  Demostración práctica de técnicas de agricultura sostenible en condiciones tropicales.
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
              <h3 className="text-3xl font-bold mb-2">¿Quieres participar en nuestros eventos?</h3>
              <p className="text-xl opacity-90">Mantente informado sobre nuestros próximos eventos y capacitaciones.</p>
            </div>
            <Button
              asChild
              size="lg"
              className="bg-white text-[#6cb105] hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/contacto" className="flex items-center">
                Contáctanos
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
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
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
