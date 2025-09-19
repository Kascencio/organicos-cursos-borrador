"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

export default function CursosLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Helper component for checkmarks
  const CheckListItem = ({ children }) => (
    <div className="flex items-start gap-3">
      <svg className="h-6 w-6 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
      <span className="text-muted-foreground">{children}</span>
    </div>
  )

  return (
    <div className="min-h-screen bg-background">
      {/* Top Bar */}
      <div className="gradient-primary text-primary-foreground py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-2 md:mb-0">
              <a
                href="https://www.youtube.com/@OrganicosdelTropico"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground hover:text-primary-foreground/80 transition-colors duration-300"
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
                href="http://googleusercontent.com/maps.google.com/3"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-primary-foreground hover:text-primary-foreground/80 transition-colors duration-300"
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
                Villahermosa, Tabasco
              </a>
              <a
                href="mailto:organicosdeltropico@yahoo.com.mx"
                className="flex items-center text-primary-foreground hover:text-primary-foreground/80 transition-colors duration-300"
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
                href="tel:+529932878909"
                className="flex items-center text-primary-foreground hover:text-primary-foreground/80 transition-colors duration-300"
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
                +52 993 287 8909
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-background/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link href="/" className="transition-transform hover:scale-105">
                <Image
                  src="/images/pijije-logo.jpg"
                  alt="Pijije Regenerativo"
                  width={200}
                  height={60}
                  className="h-12 w-auto"
                />
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-foreground hover:text-primary font-medium transition-colors duration-300">
                Orgánicos del Trópico
              </Link>
              <Link
                href="/que-hacemos"
                className="text-foreground hover:text-primary font-medium transition-colors duration-300"
              >
                ¿Qué Hacemos?
              </Link>
              <Link
                href="/eventos"
                className="text-foreground hover:text-primary font-medium transition-colors duration-300"
              >
                Eventos
              </Link>
              <Link
                href="/cursos"
                className="relative text-primary font-semibold after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-1 after:bg-primary after:rounded-full"
              >
                Cursos
              </Link>
              <Link
                href="/contacto"
                className="text-foreground hover:text-primary font-medium transition-colors duration-300"
              >
                Contacto
              </Link>
            </nav>
            <div className="hidden md:flex items-center space-x-4">
              <Button
                asChild
                variant="outline"
                size="sm"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <Link href="/cursos/login">Iniciar Sesión</Link>
              </Button>
              <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
                <Link href="/cursos/registro">Registrarse</Link>
              </Button>
            </div>
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

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-border">
              <div className="flex flex-col space-y-4 pt-4">{/* Mobile nav links */}</div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20"></div>
        <div className="absolute inset-0 bg-[url('/lush-green-pasture-with-cattle-grazing-sustainable.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left space-y-8">
              <div className="space-y-4">
                <Badge className="bg-secondary text-secondary-foreground text-sm px-4 py-2 animate-fadeIn">
                  🌱 Educación Especializada
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold text-balance animate-slideInLeft">
                  Plataforma de <span className="text-primary">Cursos</span>
                </h1>
                <h2 className="text-3xl lg:text-4xl font-semibold text-secondary animate-slideInLeft animation-delay-300">
                  Pijije Regenerativo
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl animate-slideInLeft animation-delay-600">
                  Aprende ganadería regenerativa de expertos y accede a nuestro programa de bonos de carbono con guía
                  especializada.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 animate-slideInLeft animation-delay-900">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link href="/cursos/registro" className="flex items-center gap-2">
                    Comenzar Ahora
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg rounded-xl bg-transparent"
                >
                  <Link href="#temario">Ver Contenido</Link>
                </Button>
              </div>
            </div>
            <div className="animate-slideInRight animation-delay-600">
              <Card className="border-2 border-primary/20 shadow-2xl overflow-hidden bg-card/80 backdrop-blur-sm">
                <div className="relative h-64">
                  <Image
                    src="/regenerative-agriculture-course-preview-profession.jpg"
                    alt="Vista previa del curso"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-xl font-bold">Curso Completo Disponible</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polygon points="23 7 16 12 23 17 23 7"></polygon>
                          <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                        </svg>
                        <span>8+ horas</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                          <line x1="8" y1="21" x2="16" y2="21"></line>
                          <line x1="12" y1="17" x2="12" y2="21"></line>
                        </svg>
                        <span>Online</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">$800 MXN</div>
                    </div>
                  </div>
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                    <Link href="/cursos/checkout">Inscribirme Ahora</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Syllabus Section */}
      <section id="temario" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-balance">
              Contenido del <span className="text-primary">Curso</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              5 módulos diseñados por expertos para transformar tu conocimiento en ganadería regenerativa.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">{/* Módulos del curso... */}</div>
        </div>
      </section>

      {/* SECCIÓN DETALLADA: Bonos de Carbono */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-balance">
              ¿Qué son los <span className="text-primary">Bonos de Carbono</span> y cómo funcionan?
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Descubre cómo nuestro programa transforma la ganadería sostenible en una oportunidad económica y
              ambiental.
            </p>
          </div>

          {/* Qué son y Contexto */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">Un Incentivo Financiero por un Servicio Ambiental</h3>
              <p className="text-muted-foreground leading-relaxed">
                [cite_start]Los bonos de carbono, o créditos de carbono, son una recompensa que recibes por implementar
                prácticas que combaten el cambio climático[cite: 1, 2, 3, 4]. [cite_start]No es un negocio, sino un
                incentivo por los servicios ambientales que brinda tu rancho[cite: 3, 4, 5, 6]. [cite_start]Cada crédito
                representa una tonelada de $CO_2$e que ha sido capturada o eliminada de la atmósfera[cite: 93, 94, 95].
              </p>
              <Card className="bg-muted/50 p-6">
                <h4 className="font-semibold text-lg mb-3">El Contexto de las Emisiones</h4>
                <ul className="space-y-2 text-sm">
                  [cite_start]
                  <CheckListItem>
                    <strong>Emisiones en México:</strong> En 2019 se generaron casi 737 millones de toneladas de
                    $CO_2$e[cite: 12].
                  </CheckListItem>
                  [cite_start]
                  <CheckListItem>
                    <strong>Sector Agropecuario:</strong> Es el segundo mayor emisor en México (19%) y el sector
                    ganadero es el tercero a nivel mundial[cite: 18, 19].
                  </CheckListItem>
                  [cite_start]
                  <CheckListItem>
                    <strong>Gases Clave:</strong> La ganadería genera principalmente metano (fermentación entérica) y
                    óxido nitroso (gestión de estiércol y fertilizantes)[cite: 22, 23, 26, 32].
                  </CheckListItem>
                </ul>
              </Card>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/efecto-invernadero-ganaderia.jpg"
                alt="Gráfico del efecto invernadero"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                [cite_start]
                <p className="text-white text-sm">
                  Estos gases provocan el efecto invernadero, atrapando el calor en la atmósfera y aumentando la
                  temperatura del planeta[cite: 43, 44, 45, 46, 47, 48, 49].
                </p>
              </div>
            </div>
          </div>

          {/* El Proyecto Pijije Regenerativo */}
          <div className="bg-muted/30 rounded-2xl p-8 lg:p-12 mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg lg:order-last">
                <Image
                  src="/images/pijije-boomitra-alianza.jpg"
                  alt="Alianza Pijije Regenerativo y Boomitra"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6 lg:order-first">
                <h3 className="text-3xl font-bold">El Proyecto "Pijije Regenerativo": Tu Aliado Estratégico</h3>
                <p className="text-muted-foreground leading-relaxed">
                  [cite_start]Nuestra iniciativa busca convertirte en un capturador de carbono a través de la ganadería
                  regenerativa[cite: 72, 80]. Para ello, contamos con una alianza clave:
                </p>
                <div className="space-y-4">
                  [cite_start]
                  <p>
                    <strong>Pijije Regenerativo:</strong> Brindamos el acompañamiento técnico y administrativo para
                    implementar las prácticas regenerativas y prepararte para la certificación[cite: 109, 126].
                  </p>
                  [cite_start]
                  <p>
                    <strong>Boomitra:</strong> Es el mercado internacional que mide el carbono capturado con tecnología
                    satelital, certifica los bonos a través de un tercero (VERRA) y los vende a empresas[cite: 110, 114,
                    123, 127].
                  </p>
                </div>
                [cite_start]
                <Badge variant="secondary">
                  El productor recibe el 55% del valor de cada bono vendido[cite: 124, 125, 179, 180].
                </Badge>
              </div>
            </div>
          </div>

          {/* Aspectos Financieros */}
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold">Aspectos Financieros: Inversión y Potencial de Ingresos</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <Card className="p-8">
              <CardHeader>
                <CardTitle>Inversión en Acompañamiento</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                [cite_start]
                <p>
                  Para participar, se realiza una inversión en la capacitación y consultoría de Pijije
                  Regenerativo[cite: 161].
                </p>
                <ul className="list-disc list-inside space-y-2">
                  [cite_start]
                  <li>
                    <strong>Primer año:</strong> Aproximadamente $1,455 USD, incluye capacitación y dos visitas
                    (diagnóstico y seguimiento)[cite: 162, 163, 164, 167].
                  </li>
                  [cite_start]
                  <li>
                    <strong>Segundo y tercer año:</strong> El costo se reduce a $600 USD por una visita anual de
                    seguimiento[cite: 170].
                  </li>
                </ul>
                [cite_start]
                <p className="text-sm text-muted-foreground">*Los viáticos se calculan por separado[cite: 171].</p>
              </CardContent>
            </Card>
            <Card className="p-8 border-primary border-2">
              <CardHeader>
                <CardTitle className="text-primary">Potencial de Ingresos (Ejemplo)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                [cite_start]
                <p>
                  Los ingresos dependen de la cantidad de carbono capturado y del precio de mercado del bono[cite: 177,
                  189].
                </p>
                <div className="bg-primary/10 p-4 rounded-lg">
                  <p className="font-bold mb-2">Ejemplo para un rancho de 50 hectáreas:</p>
                  <ul className="list-disc list-inside space-y-2">
                    [cite_start]
                    <li>
                      <strong>Captura estimada:</strong> 6 a 15 toneladas de carbono por hectárea/año[cite: 173, 176,
                      189].
                    </li>
                    [cite_start]
                    <li>
                      <strong>Asumiendo 6 ton/ha:</strong> 300 toneladas totales capturadas al año[cite: 184].
                    </li>
                    [cite_start]
                    <li>
                      <strong>Precio del bono (ejemplo):</strong> $15 USD por tonelada[cite: 178, 185, 188].
                    </li>
                    [cite_start]
                    <li>
                      <strong>Ingreso anual para el productor (55%):</strong> Aproximadamente{" "}
                      <strong>$2,475 USD</strong>[cite: 186].
                    </li>
                  </ul>
                </div>
                [cite_start]
                <p className="text-sm text-muted-foreground">
                  *El primer pago puede incluir un retroactivo de hasta tres años[cite: 191].
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-balance">
              Galería de <span className="text-primary">Eventos</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nuestros eventos y conferencias sobre ganadería regenerativa han impactado a miles de productores.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">{/* Imágenes de la galería */}</div>
        </div>
      </section>

      {/* Contact & Footer Sections */}
      <section className="py-20 bg-background">{/* ... (código de contacto) ... */}</section>
      <footer className="bg-gray-900 text-gray-400">{/* ... (código de footer) ... */}</footer>
    </div>
  )
}
