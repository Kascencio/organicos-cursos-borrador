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
                href="https://maps.google.com/"
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
                 Carretera Santa Adelaida-Palizada Km 3.5, C.P. 24200, Palizada Campeche Mex.
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
                  <rect width="20" height="16" x="2" y="4" rx="2" ry="2"></rect>
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

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-border">
              <div className="flex flex-col space-y-4 pt-4">
                <Link
                  href="/"
                  className="text-foreground hover:text-primary font-medium transition-colors duration-300"
                >
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
                <Link href="/cursos" className="text-primary font-medium">
                  Cursos
                </Link>
                <Link
                  href="/contacto"
                  className="text-foreground hover:text-primary font-medium transition-colors duration-300"
                >
                  Contacto
                </Link>
                <div className="flex flex-col space-y-2 pt-4 border-t border-border">
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
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20"></div>
        <div className="absolute inset-0 bg-white opacity-10"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
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
                  especializada
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

            {/* Right Content - Course Preview Card */}
            <div className="animate-slideInRight animation-delay-600">
              <Card className="border-2 border-primary/20 shadow-2xl overflow-hidden bg-card/80 backdrop-blur-sm">
                <div className="relative h-80">
                  <Image
                    src="/placeholder.svg?height=320&width=480&text=Curso+Completo+Disponible"
                    alt="Curso-Taller Ganadería Regenerativa y bonos de carbono"
                    fill
                    className="object-cover bg-white"
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

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
            <div className="text-center animate-scaleIn animation-delay-300">
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">5</div>
              <p className="text-muted-foreground font-medium">Módulos Especializados</p>
            </div>
            <div className="text-center animate-scaleIn animation-delay-600">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">100%</div>
              <p className="text-muted-foreground font-medium">Satisfacción</p>
            </div>
            <div className="text-center animate-scaleIn animation-delay-900">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">24/7</div>
              <p className="text-muted-foreground font-medium">Acceso Total</p>
            </div>
          </div>
        </div>
      </section>

      {/* Unified Course Information Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-balance">
              Tu Acceso Total al Conocimiento <span className="text-primary">Regenerativo</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Todo lo que necesitas en un solo lugar. Invierte en tu futuro y el de tu rancho con nuestro curso
              especializado.
            </p>
          </div>

          <div className="max-w-5xl mx-auto bg-background rounded-2xl shadow-2xl border-2 border-primary/20 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left Column: What Includes */}
              <div className="p-8 lg:p-12 space-y-6">
                <h3 className="text-2xl font-bold text-primary mb-4">¿Qué Incluye tu Inscripción?</h3>
                <ul className="space-y-4">
                  {[
                    {
                      icon: (
                        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polygon points="23 7 16 12 23 17 23 7"></polygon>
                          <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                        </svg>
                      ),
                      title: "8+ Horas de Contenido en Video HD",
                      description: "Accede a 5 módulos especializados con lecciones prácticas y teóricas.",
                    },
                    {
                      icon: (
                        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12,6 12,12 16,14" />
                        </svg>
                      ),
                      title: "Acceso por 3 Meses",
                      description: "Aprende a tu propio ritmo con acceso ilimitado a la plataforma 24/7.",
                    },
                    {
                      icon: (
                        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="8" r="7" />
                          <polyline points="8.21,13.89 7,23 12,20 17,23 15.79,13.88" />
                        </svg>
                      ),
                      title: "Certificado Oficial",
                      description: "Obtén un certificado digital que avala tu conocimiento al finalizar el curso.",
                    },
                    {
                      icon: (
                        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                          <line x1="8" y1="21" x2="16" y2="21"></line>
                          <line x1="12" y1="17" x2="12" y2="21"></line>
                        </svg>
                      ),
                      title: "Videoconferencias Exclusivas",
                      description:
                        'Acceso por 1 año al grupo de Facebook "Manejo Holístico Tropical" para resolver dudas.',
                    },
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="text-secondary mt-1 flex-shrink-0">{item.icon}</div>
                      <div>
                        <h4 className="font-semibold">{item.title}</h4>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Price and CTA */}
              <div className="bg-primary/5 p-8 lg:p-12 flex flex-col justify-center items-center text-center">
                <Badge className="bg-accent text-accent-foreground mb-4">🎯 Requisito para Bonos de Carbono</Badge>
                <h3 className="text-2xl font-bold mb-2">Inversión Única</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-5xl font-bold text-primary">$800</span>
                  <span className="text-xl text-muted-foreground">MXN</span>
                </div>
                <p className="text-muted-foreground max-w-xs mb-6">
                  Este curso es el primer paso para unirte a nuestro programa de Bonos de Carbono y generar ingresos
                  adicionales.
                </p>
                <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/cursos/checkout" className="flex items-center justify-center gap-2">
                    Inscribirme Ahora
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </Button>
                <p className="text-sm text-muted-foreground text-center mt-3">Acceso inmediato después del pago</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Course Section (UNIFIED) */}

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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Módulo 1 */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-l-4 border-l-primary bg-gradient-card">
              <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="bg-primary-foreground text-primary rounded-full p-2">
                    <span className="font-bold text-lg">1</span>
                  </div>
                  Manejo Holístico
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="space-y-4">
                  <div className="border-l-4 border-l-primary pl-4 bg-muted/50 p-4 rounded-r-lg">
                    <h5 className="font-semibold text-primary mb-2">Situación Actual de la Ganadería</h5>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>Malas prácticas vs prácticas regenerativas</li>
                      <li>Objetivos de la ganadería regenerativa</li>
                      <li>Importancia de los bonos de carbono</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-l-secondary pl-4 bg-muted/50 p-4 rounded-r-lg">
                    <h5 className="font-semibold text-secondary mb-2">Impacto de la Revolución Verde</h5>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>Ciclo de agroquímicos y consecuencias</li>
                      <li>Daños a la salud y medio ambiente</li>
                      <li>Contaminación de aguas subterráneas</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-l-accent pl-4 bg-muted/50 p-4 rounded-r-lg">
                    <h5 className="font-semibold text-accent mb-2">Ganadería y Cambio Climático</h5>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>Contribución a gases efecto invernadero</li>
                      <li>Ganadería confinada e impacto ambiental</li>
                      <li>Huella de carbono en producción</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Módulo 2 */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-l-4 border-l-secondary bg-gradient-card">
              <CardHeader className="bg-secondary text-secondary-foreground rounded-t-lg">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="bg-secondary-foreground text-secondary rounded-full p-2">
                    <span className="font-bold text-lg">2</span>
                  </div>
                  Pastoreo Regenerativo
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="space-y-4">
                  <div className="border-l-4 border-l-secondary pl-4 bg-muted/50 p-4 rounded-r-lg">
                    <h5 className="font-semibold text-secondary mb-2">Bases Teóricas del Pastoreo</h5>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>Simbiosis entre sabana y herbívoros</li>
                      <li>Leyes del pastoreo de André Voisin</li>
                      <li>Ganadería regenerativa vs extensiva</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-l-accent pl-4 bg-muted/50 p-4 rounded-r-lg">
                    <h5 className="font-semibold text-accent mb-2">Implementación Práctica</h5>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>Agua, tiempo de impacto y reposo</li>
                      <li>Densidad animal óptima</li>
                      <li>Pastoreo multiespecie</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-l-primary pl-4 bg-muted/50 p-4 rounded-r-lg">
                    <h5 className="font-semibold text-primary mb-2">Beneficios del Sistema</h5>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>Beneficios económicos</li>
                      <li>Beneficios productivos</li>
                      <li>Beneficios ecológicos</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Módulo 3 */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-l-4 border-l-accent bg-gradient-card">
              <CardHeader className="bg-accent text-accent-foreground rounded-t-lg">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="bg-accent-foreground text-accent rounded-full p-2">
                    <span className="font-bold text-lg">3</span>
                  </div>
                  Mejoramiento Genético Holístico y Búfalos
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="space-y-4">
                  <div className="border-l-4 border-l-accent pl-4 bg-muted/50 p-4 rounded-r-lg">
                    <h5 className="font-semibold text-accent mb-2">Genética Animal Adaptada</h5>
                    <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                      <li>Rentabilidad máxima por hectárea</li>
                      <li>Cruzamiento y crianza pura</li>
                      <li>Selección de eficiencia funcional</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-l-primary pl-4 bg-muted/50 p-4 rounded-r-lg">
                    <h5 className="font-semibold text-primary mb-2">Búfalos en Sistemas Regenerativos</h5>
                    <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                      <li>Producción de leche y carne</li>
                      <li>Comparativa sistemas tradicionales</li>
                      <li>Adaptación al trópico húmedo</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-l-secondary pl-4 bg-muted/50 p-4 rounded-r-lg">
                    <h5 className="font-semibold text-secondary mb-2">Selección Natural</h5>
                    <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                      <li>Animales eficientes según el medio</li>
                      <li>Fertilidad y adaptación</li>
                      <li>Individuos super fértiles</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Módulo 4 */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-l-4 border-l-destructive bg-gradient-card">
              <CardHeader className="bg-destructive text-destructive-foreground rounded-t-lg">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="bg-destructive-foreground text-destructive rounded-full p-2">
                    <span className="font-bold text-lg">4</span>
                  </div>
                  Bonos de Carbono
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="space-y-4">
                  <div className="border-l-4 border-l-destructive pl-4 bg-muted/50 p-4 rounded-r-lg">
                    <h5 className="font-semibold text-red-700 mb-2">Fundamentos del Carbono</h5>
                    <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                      <li>El carbono y su efecto a gran escala</li>
                      <li>Principales fuentes de GEI</li>
                      <li>Sector ganadero en GEI</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-l-primary pl-4 bg-muted/50 p-4 rounded-r-lg">
                    <h5 className="font-semibold text-primary mb-2">Programa de Bonos</h5>
                    <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                      <li>Objetivos del programa</li>
                      <li>Tipos de proyectos para mitigar CO2e</li>
                      <li>Iniciativa Pijije Regenerativo</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-l-secondary pl-4 bg-muted/50 p-4 rounded-r-lg">
                    <h5 className="font-semibold text-secondary mb-2">Comercialización</h5>
                    <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                      <li>Clasificación: regulados y voluntarios</li>
                      <li>Proceso de emisión y comercialización</li>
                      <li>Modelo de negocio y contratos</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Módulo 5 - Full Width */}
            <Card className="lg:col-span-2 group hover:shadow-2xl transition-all duration-300 border-l-4 border-l-blue-500 bg-gradient-card">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="bg-white text-blue-600 rounded-full p-2">
                    <span className="font-bold text-lg">5</span>
                  </div>
                  Día de Campo - Aplicación Práctica
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="border-l-4 border-l-blue-500 pl-4 bg-blue-50 p-4 rounded-r-lg">
                      <h5 className="font-semibold text-blue-800 mb-2">Aplicación Práctica</h5>
                      <ul className="text-sm text-gray-800 space-y-1 list-disc list-inside">
                        <li>Videos del día de campo</li>
                        <li>Demostración práctica de conceptos teóricos</li>
                        <li>Casos reales de implementación</li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="border-l-4 border-l-blue-400 pl-4 bg-blue-50 p-4 rounded-r-lg">
                      <h5 className="font-semibold text-blue-800 mb-2">Desarrollo de Temas</h5>
                      <ul className="text-sm text-gray-800 space-y-1 list-disc list-inside">
                        <li>Continuación de módulos anteriores</li>
                        <li>Ejemplos en campo real</li>
                        <li>Técnicas aplicadas en vivo</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* NUEVA SECCIÓN: Bonos de Carbono */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-balance">
              ¿Qué son los <span className="text-primary">Bonos de Carbono</span> y cómo me benefician?
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Descubre cómo tus prácticas ganaderas pueden convertirse en una poderosa herramienta contra el cambio
              climático y una nueva fuente de ingresos.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">Un Incentivo por Cuidar el Planeta</h3>
              <p className="text-muted-foreground leading-relaxed">
                Los bonos de carbono son un <strong>incentivo financiero</strong> que recibes por implementar prácticas
                que capturan y almacenan carbono en el suelo. Cada bono equivale a una tonelada de CO₂ que se ha
                eliminado de la atmósfera gracias a tu trabajo.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Estos bonos son comprados por grandes empresas que buscan compensar sus emisiones, convirtiendo tu
                esfuerzo en un motor de cambio global y en un beneficio económico directo para ti.
              </p>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=320&width=480&text=Concepto+Bonos+Carbono"
                alt="Concepto de Bonos de Carbono"
                fill
                className="object-cover bg-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg lg:order-last">
              <Image
                src="/placeholder.svg?height=320&width=480&text=Alianza+Pijije+Boomitra"
                alt="Alianza Pijije Regenerativo y Boomitra"
                fill
                className="object-cover bg-white"
              />
            </div>
            <div className="space-y-6 lg:order-first">
              <h3 className="text-3xl font-bold">El Proyecto Pijije Regenerativo: Tu Aliado Estratégico</h3>
              <p className="text-muted-foreground leading-relaxed">
                Nos asociamos con <strong>Boomitra</strong>, el mercado internacional líder en carbono del suelo, para
                garantizar un proceso transparente y eficiente.
              </p>
              <ul className="space-y-4">
                <CheckListItem>
                  <strong>Pijije Regenerativo</strong> te brinda el acompañamiento técnico y la capacitación para
                  optimizar tus recursos.
                </CheckListItem>
                <CheckListItem>
                  <strong>Boomitra</strong> se encarga de medir, certificar y vender los bonos generados, utilizando
                  tecnología satelital de punta.
                </CheckListItem>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold">Beneficios Directos para Ti y tu Rancho</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Mayor Rentabilidad",
                text: "Mejora la salud de tu suelo y optimiza la producción, reduciendo costos.",
                icon: "📈",
              },
              {
                title: "Ingreso Adicional Seguro",
                text: "Recibirás el 55% del valor de cada bono de carbono vendido.",
                icon: "💰",
              },
              {
                title: "Suelos Más Sanos",
                text: "Mejora la retención de agua y la calidad del forraje, protegiéndote contra sequías.",
                icon: "🌱",
              },
            ].map((item, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-muted-foreground">{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-balance">
              Galería de <span className="text-primary">Eventos</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nuestros eventos y conferencias sobre ganadería regenerativa han impactado a miles de productores
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { src: "/placeholder.svg?height=256&width=256&text=Evento+1", alt: "Conferencia en auditorio" },
              {
                src: "/placeholder.svg?height=256&width=256&text=Evento+2",
                alt: "Presentación Manejo Holístico Tropical",
              },
              { src: "/placeholder.svg?height=256&width=256&text=Evento+3", alt: "Stands de exhibición" },
              { src: "/placeholder.svg?height=256&width=256&text=Evento+4", alt: "Audiencia en conferencia" },
              { src: "/placeholder.svg?height=256&width=256&text=Evento+5", alt: "Participantes del evento" },
              { src: "/placeholder.svg?height=256&width=256&text=Evento+6", alt: "Centro de Convenciones Campeche" },
              { src: "/placeholder.svg?height=256&width=256&text=Evento+7", alt: "Fila de participantes esperando" },
              { src: "/placeholder.svg?height=256&width=256&text=Evento+8", alt: "Presentación en salón" },
              { src: "/placeholder.svg?height=256&width=256&text=Evento+9", alt: "Mesa de registro" },
              { src: "/placeholder.svg?height=256&width=256&text=Evento+10", alt: "Conferencia Manejo Holístico" },
              { src: "/placeholder.svg?height=256&width=256&text=Evento+11", alt: "Área de networking" },
              { src: "/placeholder.svg?height=256&width=256&text=Evento+12", alt: "Panel de expertos" },
            ].map((image, index) => (
              <div
                key={index}
                className="group relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 bg-white"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Contacto</h2>
          </div>

          <div className="max-w-2xl mx-auto text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center">
                <div className="bg-green-100 p-3 rounded-full mb-3">
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
                    className="lucide lucide-message-circle text-green-600"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </div>
                <p className="font-semibold">WhatsApp</p>
                <p className="text-sm text-gray-600">+52 993 287 8909</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-blue-100 p-3 rounded-full mb-3">
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
                    className="lucide lucide-phone text-blue-600"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <p className="font-semibold">Tel</p>
                <p className="text-sm text-gray-600">+52 993 136 8705</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-red-100 p-3 rounded-full mb-3">
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
                    className="lucide lucide-mail text-red-600"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <p className="font-semibold">Email</p>
                <p className="text-sm text-gray-600">organicosdeltropico@yahoo.com.mx</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center md:text-left">
              <p className="text-lg">© 2024 PIJIJE REGENERATIVO</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4 text-sm">
                <Link href="/" className="hover:text-white transition-colors">
                  Orgánicos del Trópico
                </Link>
                <span>•</span>
                <Link href="/que-hacemos" className="hover:text-white transition-colors">
                  ¿Qué Hacemos?
                </Link>
                <span>•</span>
                <Link href="/eventos" className="hover:text-white transition-colors">
                  Eventos
                </Link>
                <span>•</span>
                <Link href="/pijije-regenerativo" className="hover:text-white transition-colors">
                  Pijije Regenerativo
                </Link>
                <span>•</span>
                <Link href="/aviso-privacidad" className="hover:text-white transition-colors">
                  Aviso de Privacidad
                </Link>
              </div>
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
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
