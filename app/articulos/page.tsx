"use client"

import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Calendar, Users, Award, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

export default function Articulos() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const featuredArticles = [
    {
      id: 1,
      title: "México impulsa la ganadería regenerativa como estrategia climática y económica",
      excerpt:
        "INEGI reporta potencial de captura de carbono en sistemas ganaderos regenerativos, destacando el trabajo de Orgánicos del Trópico en Campeche.",
      source: "Tumba Pato",
      date: "14 de Julio, 2025",
      url: "https://tumbapato.com/2025/07/14/mexico-impulsa-la-ganaderia-regenerativa-como-estrategia-climatica-y-economica-inegi-reporta-potencial-de-captura-de-carbono/",
      color: "blue",
      highlights: [
        "Reconocimiento del INEGI sobre potencial de captura de carbono",
        "Destaca el trabajo de Orgánicos del Trópico en Campeche",
        "Estrategia nacional para ganadería regenerativa",
      ],
    },
    {
      id: 2,
      title: "Bonos de carbono en ganadería regenerativa: alternativa sustentable y rentable",
      excerpt:
        "Análisis detallado sobre cómo los bonos de carbono representan una oportunidad económica y ambiental para los ganaderos mexicanos.",
      source: "Imagen Agropecuaria",
      date: "2025",
      url: "https://imagenagropecuaria.com/2025/bonos-de-carbono-en-ganaderia-regenerativa-alternativa-sustentable-y-rentable/",
      color: "green",
      highlights: [
        "Oportunidad económica para ganaderos mexicanos",
        "Beneficios ambientales de la ganadería regenerativa",
        "Guía práctica para acceder a bonos de carbono",
      ],
    },
  ]

  const allArticles = [
    ...featuredArticles,
    {
      id: 3,
      title: "Innovaciones en pastoreo regenerativo transforman la ganadería tropical",
      excerpt: "Nuevas técnicas de manejo holístico demuestran resultados prometedores en el sureste mexicano.",
      source: "Agro Noticias",
      date: "Próximamente",
      url: "#",
      color: "purple",
    },
    {
      id: 4,
      title: "Búfalos de agua: la alternativa sostenible para zonas inundables",
      excerpt: "Estudio revela beneficios económicos y ambientales de la cría de búfalos en el trópico húmedo.",
      source: "Campo Mexicano",
      date: "Próximamente",
      url: "#",
      color: "indigo",
    },
    {
      id: 5,
      title: "Certificación orgánica: el camino hacia mercados premium",
      excerpt: "Productores del sureste acceden a mejores precios mediante certificaciones sustentables.",
      source: "Revista Ganadera",
      date: "Próximamente",
      url: "#",
      color: "teal",
    },
    {
      id: 6,
      title: "Manejo holístico: la clave del éxito en ganadería regenerativa",
      excerpt: "Casos de éxito demuestran la efectividad del enfoque integral en la toma de decisiones.",
      source: "Pecuario Digital",
      date: "Próximamente",
      url: "#",
      color: "orange",
    },
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        badge: "bg-blue-600",
        border: "border-blue-600",
        text: "text-blue-600",
        hover: "hover:bg-blue-600",
      },
      green: {
        badge: "bg-green-600",
        border: "border-green-600",
        text: "text-green-600",
        hover: "hover:bg-green-600",
      },
      purple: {
        badge: "bg-purple-600",
        border: "border-purple-600",
        text: "text-purple-600",
        hover: "hover:bg-purple-600",
      },
      indigo: {
        badge: "bg-indigo-600",
        border: "border-indigo-600",
        text: "text-indigo-600",
        hover: "hover:bg-indigo-600",
      },
      teal: {
        badge: "bg-teal-600",
        border: "border-teal-600",
        text: "text-teal-600",
        hover: "hover:bg-teal-600",
      },
      orange: {
        badge: "bg-orange-600",
        border: "border-orange-600",
        text: "text-orange-600",
        hover: "hover:bg-orange-600",
      },
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

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
                href="/articulos"
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
                  href="/articulos"
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
      <section className="relative h-[400px] overflow-hidden">
        <Image
          src="/placeholder.svg?height=400&width=1200"
          alt="Artículos y Cobertura Mediática"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex flex-col items-center justify-center text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Nuestros <span className="text-[#6cb105]">Artículos</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Reconocimiento mediático de nuestro trabajo en ganadería regenerativa y bonos de carbono
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
              Cobertura nacional de nuestro impacto en la ganadería regenerativa
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {featuredArticles.map((article) => {
              const colors = getColorClasses(article.color)
              return (
                <Card
                  key={article.id}
                  className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-64">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                    <div
                      className={`absolute top-4 left-4 ${colors.badge} text-white px-3 py-1 rounded-full text-sm font-semibold`}
                    >
                      {article.source}
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4 leading-tight">{article.title}</h3>
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">{article.excerpt}</p>

                    {article.highlights && (
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 text-gray-800">Puntos destacados:</h4>
                        <ul className="space-y-2">
                          {article.highlights.map((highlight, index) => (
                            <li key={index} className="flex items-start">
                              <div className={`w-2 h-2 rounded-full ${colors.badge} mt-2 mr-3 flex-shrink-0`}></div>
                              <span className="text-gray-600">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500 flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {article.date}
                      </span>
                      <Button
                        asChild
                        variant="outline"
                        className={`${colors.border} ${colors.text} ${colors.hover} hover:text-white bg-transparent`}
                      >
                        <a href={article.url} target="_blank" rel="noopener noreferrer" className="flex items-center">
                          Leer Artículo <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* All Articles Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Todos los Artículos</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nuestra presencia en medios especializados del sector agropecuario
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allArticles.map((article) => {
              const colors = getColorClasses(article.color)
              return (
                <Card
                  key={article.id}
                  className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                    <div
                      className={`absolute top-3 left-3 ${colors.badge} text-white px-2 py-1 rounded-full text-xs font-semibold`}
                    >
                      {article.source}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-3 line-clamp-2">{article.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm line-clamp-3">{article.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">{article.date}</span>
                      {article.url !== "#" ? (
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className={`${colors.border} ${colors.text} ${colors.hover} hover:text-white bg-transparent`}
                        >
                          <a href={article.url} target="_blank" rel="noopener noreferrer" className="flex items-center">
                            Leer <ExternalLink className="ml-1 h-3 w-3" />
                          </a>
                        </Button>
                      ) : (
                        <Badge variant="secondary" className="text-xs">
                          Próximamente
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nuestro Impacto en Medios</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reconocimiento nacional de nuestro liderazgo en ganadería regenerativa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8">
              <div className="bg-blue-100 p-4 rounded-full w-fit mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Cobertura Nacional</h3>
              <p className="text-gray-600">Presencia en medios especializados de todo México</p>
            </Card>

            <Card className="text-center p-8">
              <div className="bg-green-100 p-4 rounded-full w-fit mx-auto mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Reconocimiento</h3>
              <p className="text-gray-600">Validación de expertos en el sector agropecuario</p>
            </Card>

            <Card className="text-center p-8">
              <div className="bg-purple-100 p-4 rounded-full w-fit mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Alcance</h3>
              <p className="text-gray-600">Miles de productores informados sobre nuestro trabajo</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Press Kit Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Kit de Prensa</h2>
            <p className="text-xl text-gray-600 mb-8">
              Recursos para medios de comunicación interesados en cubrir nuestro trabajo
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Información Corporativa</h3>
                <ul className="text-left space-y-2 text-gray-600">
                  <li>• Historia de Orgánicos del Trópico</li>
                  <li>• Biografías de expertos</li>
                  <li>• Logotipos y material gráfico</li>
                  <li>• Datos y estadísticas</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Contacto de Prensa</h3>
                <div className="text-left space-y-3">
                  <div>
                    <p className="font-semibold">Email:</p>
                    <a href="mailto:organicosdeltropico@yahoo.com.mx" className="text-[#6cb105] hover:underline">
                      organicosdeltropico@yahoo.com.mx
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold">Teléfono:</p>
                    <a href="tel:+529341150595" className="text-[#6cb105] hover:underline">
                      +52 934 115 0595
                    </a>
                  </div>
                </div>
              </Card>
            </div>

            <Button asChild className="bg-[#6cb105] hover:bg-[#5a9504] text-white px-8 py-3 text-lg">
              <a href="mailto:organicosdeltropico@yahoo.com.mx?subject=Solicitud de Entrevista - Medios">
                Solicitar Entrevista
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
                  href="tel:+529932878909"
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
                  (993) 287-8909
                </a>
                <span className="hidden md:inline">•</span>
                <a
                  href="https://api.whatsapp.com/send?phone=529932878909&text=Hola%20me%20interesa%20el%20curso%20de%20Ganadería%20Regenerativa%20y%20Bonos%20de%20Carbono"
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
