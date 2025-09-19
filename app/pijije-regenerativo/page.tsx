"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronRight, Phone, Mail, MapPin, Youtube, Facebook, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

export default function PijijeRegenerativo() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-[#af2600] text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-2 md:mb-0">
              <a
                href="https://www.facebook.com/pijijeregenerativo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-200 transition-colors duration-300"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/pijije_regenerativo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-200 transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/@OrganicosdelTropico"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-200 transition-colors duration-300"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/@pijijeregenerativo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-200 transition-colors duration-300"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
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
                <MapPin className="h-4 w-4 mr-1" />
                Carretera Santa Adelaida-Palizada Km 3.5, C.P. 24200, Palizada Campeche Mex.
              </a>
              <a
                href="mailto:organicosdeltropico@yahoo.com.mx"
                className="flex items-center text-white hover:text-gray-200 transition-colors duration-300"
              >
                <Mail className="h-4 w-4 mr-1" />
                organicosdeltropico@yahoo.com.mx
              </a>
              <a
                href="tel:+529341150595"
                className="flex items-center text-white hover:text-gray-200 transition-colors duration-300"
              >
                <Phone className="h-4 w-4 mr-1" />
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
              <Link href="/">
                <Image
                  src="/images/logo-pijije-regenerativo.png"
                  alt="Pijije Regenerativo"
                  width={200}
                  height={60}
                  className="h-12 w-auto"
                />
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#wrapper"
                className="text-gray-700 hover:text-[#af2600] font-bold transition-colors duration-300"
              >
                Pijije regenerativo
              </a>
              <a
                href="#section-about"
                className="text-gray-700 hover:text-[#af2600] font-bold transition-colors duration-300"
              >
                ¿Qué hacemos?
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-[#af2600] font-bold transition-colors duration-300"
              >
                Contacto
              </a>
              <Link
                href="/"
                className="text-gray-700 hover:text-[#6cb105] font-bold flex items-center transition-colors duration-300"
              >
                <Image
                  src="/images/logo-organicos-de-tropico-m.png"
                  alt="Orgánicos del Trópico"
                  width={20}
                  height={20}
                  className="h-5 w-5 mr-1"
                />
                Orgánicos del Trópico
              </Link>
              <Link
                href="/savana-bufalo"
                className="text-gray-700 hover:text-[#003f7d] font-bold flex items-center transition-colors duration-300"
              >
                <Image src="/images/logo-savana-m.png" alt="Savana" width={20} height={20} className="h-5 w-5 mr-1" />
                Savana
              </Link>
            </nav>
            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="focus:outline-none">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 py-4 bg-white border-t">
              <div className="flex flex-col space-y-4 px-4">
                <a
                  href="#wrapper"
                  className="text-gray-700 hover:text-[#af2600] font-bold py-2 transition-colors duration-300"
                >
                  Pijije regenerativo
                </a>
                <a
                  href="#section-about"
                  className="text-gray-700 hover:text-[#af2600] font-bold py-2 transition-colors duration-300"
                >
                  ¿Qué hacemos?
                </a>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-[#af2600] font-bold py-2 transition-colors duration-300"
                >
                  Contacto
                </a>
                <Link
                  href="/"
                  className="text-gray-700 hover:text-[#6cb105] font-bold py-2 flex items-center transition-colors duration-300"
                >
                  <Image
                    src="/images/logo-organicos-de-tropico-m.png"
                    alt="Orgánicos del Trópico"
                    width={20}
                    height={20}
                    className="h-5 w-5 mr-1"
                  />
                  Orgánicos del Trópico
                </Link>
                <Link
                  href="/savana-bufalo"
                  className="text-gray-700 hover:text-[#003f7d] font-bold py-2 flex items-center transition-colors duration-300"
                >
                  <Image src="/images/logo-savana-m.png" alt="Savana" width={20} height={20} className="h-5 w-5 mr-1" />
                  Savana
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="wrapper" className="relative h-[60vh] md:h-screen overflow-hidden">
        <Image
          src="/images/organicos-del-tropico-agriculura-y-ganaderia-holistica-criadero-bufalo-de-agua-14.jpg"
          alt="Pijije Regenerativo"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/55 flex flex-col items-center justify-center text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeIn">Pijije Regenerativo</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-2 animate-fadeIn animation-delay-300">
              Por una agricultura y ganadería libre de insumos
            </p>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fadeIn animation-delay-300">
              Evita pérdidas financieras en tu curva de aprendizaje
            </p>
            <div className="animate-fadeIn animation-delay-600">
              <Button
                asChild
                className="bg-transparent border-2 border-white hover:bg-white hover:text-[#af2600] text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <a
                  href="https://api.whatsapp.com/send?phone=529341150595&text=Hola%20visité%20su%20página%20web%20y%20me%20gustaría%20que%20me%20contactaran%20para%20más%20información"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Solicitar Asesoría o Informes
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <a href="#section-about" className="text-white animate-bounce">
            <ChevronRight className="h-8 w-8 rotate-90" />
          </a>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Pijije Regenerativo</h1>
            <div className="prose max-w-none text-lg leading-relaxed">
              <p className="mb-6">
                <strong>
                  "Las soluciones basadas en la naturaleza (SbN) son acciones para proteger, gestionar y restaurar de
                  manera sostenible los ecosistemas naturales o modificados que hacen frente a los desafíos sociales de
                  manera efectiva y adaptativa, proporcionando simultáneamente beneficios para el bienestar humano y la
                  biodiversidad" (© UICN, 2016)
                </strong>
              </p>
              <p className="mb-6">
                Pijije Regenerativo se posiciona como la primera propuesta en el país en ofrecer capacitación y{" "}
                <strong>gestión de proyectos</strong> para bonos de Carbono y de biodiversidad que cumplan con los
                estándares internacionales.
              </p>
              <p className="mb-6">
                Damos paso a los servicios ambientales como lo son la venta de bonos de carbono en Agricultura y
                Ganadería Regenerativa pero lo más importante asegurar la rentabilidad de tu proyecto agrícola y
                pecuario, conservando y regenerando el suelo, la biodiversidad, el esquema social y la eficiencia en el
                manejo del agua y otros recursos.
              </p>
              <div className="text-center">
                <p className="text-[#af2600] text-xl font-bold">"Los seres y los Elementos en Sincronía"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/E-n3zARYBoQ?si=hb2qf58ljmkM-kga"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="section-about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image src="/images/oijije-4.jpg" alt="¿Qué Hacemos?" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">¿Qué Hacemos?</h2>
              <p className="text-lg leading-relaxed mb-8">
                Ofrecemos nuestros servicios de capacitación y asesoría en la implementación de las diferentes técnicas
                de pastoreo y ganadería regenerativo y de producciones agrícolas regenerativas, para ser verificados por
                diversos estándares internacionales.
              </p>

              <div>
                <h3 className="text-2xl font-bold text-[#af2600] mb-6">Somos expertos en:</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-[#af2600] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Genética animal adaptada</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-[#af2600] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Manejo ganadero</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-[#af2600] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Nutrición animal</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-[#af2600] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Agricultura biodinámica</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-[#af2600] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Agricultura orgánica regenerativa</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-[#af2600] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Permacultura</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-[#af2600] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Agricultura sintrópica</span>
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-[#af2600] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Ganadería regenerativa</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-[#af2600] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Pastoreo regenerativo</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-[#af2600] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Consultoría y acompañamiento para certificaciones orgánicas</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-[#af2600] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Consultoría y acompañamiento para certificaciones RSPO Palma de Aceite</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-[#af2600] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Producción de arroz orgánico</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-[#af2600] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Diseño key line</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-xl">
              <Image src="/images/pijije-1.jpg" alt="Pijije Regenerativo 1" fill className="object-cover" />
            </div>
            <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-xl">
              <Image src="/images/pijije-2.jpg" alt="Pijije Regenerativo 2" fill className="object-cover" />
            </div>
            <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-xl">
              <Image src="/images/pijije-3.jpg" alt="Pijije Regenerativo 3" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Registration Section */}
      <section className="relative py-20 overflow-hidden">
        <Image
          src="/images/organicos-del-tropico-agriculura-y-ganaderia-holistica-criadero-bufalo-de-agua-16.jpg"
          alt="Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <div className="bg-black/20 p-8 rounded-2xl backdrop-blur-sm">
                <h3 className="text-3xl font-bold text-white mb-6">
                  Inscríbete al programa de bonos de Carbono y biodiversidad ganadería y agricultura ¡Gestionamos tu
                  proyecto YA!
                </h3>
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <Button asChild className="bg-[#af2600] hover:bg-[#8e1f00] text-white rounded-full px-8 py-3">
                    <a href="https://forms.gle/QfdmNBEC29uUzBSt7" target="_blank" rel="noopener noreferrer">
                      Ganadería
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-[#af2600] rounded-full px-8 py-3 bg-transparent"
                  >
                    <a href="https://forms.gle/SuZ5F8fxhhqZBE4g9" target="_blank" rel="noopener noreferrer">
                      Agricultura
                    </a>
                  </Button>
                </div>
                <h5 className="text-white text-lg">
                  "El debate no es entre animales o plantas sino como entre los modelos de producción industrial y
                  regenerativos"
                </h5>
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="relative h-[300px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/organicos-del-tropico-agricultura-y-ganaderia-bufalos-de-agua-2.png"
                  alt="Búfalos de agua"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4 leading-tight max-w-4xl mx-auto">
              "Trabajamos en armonía con los procesos de la madre tierra, compartimos un estilo de vida holístico.
              Conservamos y regeneramos los ecosistemas que habitamos"
            </h3>
            <p className="text-[#af2600] text-xl font-semibold uppercase tracking-wide">De México para el mundo</p>
          </div>

          {/* Image Galleries */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <div className="relative h-[200px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/bio4.jpg"
                alt="Biodiversidad 4"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-[200px] rounded-lg overflow-hidden shadow-lg lg:mt-8">
              <Image
                src="/images/bio2.jpg"
                alt="Biodiversidad 2"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-[200px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/bio3.jpg"
                alt="Biodiversidad 3"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-[200px] rounded-lg overflow-hidden shadow-lg lg:mt-8">
              <Image
                src="/images/bio1.jpg"
                alt="Biodiversidad 1"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative h-[200px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/organicos-del-tropico-agriculura-y-ganaderia-holistica-criadero-bufalo-de-agua-17.jpg"
                alt="Ganadería holística 17"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-[200px] rounded-lg overflow-hidden shadow-lg lg:mt-8">
              <Image
                src="/images/organicos-del-tropico-agriculura-y-ganaderia-holistica-criadero-bufalo-de-agua-18.jpg"
                alt="Ganadería holística 18"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-[200px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/organicos-del-tropico-agriculura-y-ganaderia-holistica-criadero-bufalo-de-agua-19.jpg"
                alt="Ganadería holística 19"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-[200px] rounded-lg overflow-hidden shadow-lg lg:mt-8">
              <Image
                src="/images/organicos-del-tropico-agriculura-y-ganaderia-holistica-criadero-bufalo-de-agua-20.jpg"
                alt="Ganadería holística 20"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-4 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <a
              href="https://api.whatsapp.com/send?phone=529341150595&text=Hola%20visité%20su%20página%20web%20y%20me%20gustaría%20que%20me%20contactaran%20para%20más%20información"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors duration-300"
            >
              ¿Tienes alguna duda?... <strong>¡Contáctanos!</strong>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Datos de contacto</h2>
              <p className="text-lg mb-4">
                Llámanos, envía un e-mail o un mensaje de WhatsApp y con gusto te contactaremos a la brevedad.
              </p>
              <p className="text-lg font-bold mb-8">¡Nos encantará saber de ti, queremos escucharte!</p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-[#af2600] mr-3" />
                  <a
                    href="tel:+529341150595"
                    className="text-lg font-medium hover:text-[#af2600] transition-colors duration-300"
                  >
                    +52 934 1150595
                  </a>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-[#af2600] mr-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                  <a
                    href="https://api.whatsapp.com/send?phone=529341150595&text=Hola%20visité%20su%20página%20web%20y%20me%20gustaría%20que%20me%20contactaran%20para%20más%20información"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium hover:text-[#af2600] transition-colors duration-300"
                  >
                    Enviar mensaje
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-[#af2600] mr-3" />
                  <a
                    href="mailto:organicosdeltropico@yahoo.com.mx"
                    className="text-lg font-medium hover:text-[#af2600] transition-colors duration-300"
                  >
                    organicosdeltropico@yahoo.com.mx
                  </a>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-[#af2600] mr-3 mt-1" />
                  <a
                    href="https://www.google.com/maps/place/Org%C3%A1nicos+del+Tr%C3%B3pico+S.A.+de+C.V./@17.9590945,-91.7510754,15z/data=!4m6!3m5!1s0x85f3d7f56a5aa25d:0x7e58bf813acdb82d!8m2!3d17.9590945!4d-91.7510754!16s%2Fg%2F11ll92tv4p?entry=tts"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium hover:text-[#af2600] transition-colors duration-300"
                  >
                    Carretera Santa Adelaida-Palizada Km 3.5, C.P. 24200, Palizada Campeche Mex.{" "}
                    <span className="text-[#af2600]">Ver mapa en Google</span>
                  </a>
                </div>
              </div>

              <hr className="my-8" />

              <div>
                <p className="text-lg font-bold mb-4">Redes sociales</p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Youtube className="h-5 w-5 text-[#af2600] mr-3" />
                    <a
                      href="https://www.youtube.com/@OrganicosdelTropico"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-medium hover:text-[#af2600] transition-colors duration-300"
                    >
                      Ver canal de YouTube
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Facebook className="h-5 w-5 text-[#af2600] mr-3" />
                    <a
                      href="https://www.facebook.com/pijijeregenerativo/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-medium hover:text-[#af2600] transition-colors duration-300"
                    >
                      Ver perfil de Facebook
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Instagram className="h-5 w-5 text-[#af2600] mr-3" />
                    <a
                      href="https://www.instagram.com/pijije_regenerativo/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-medium hover:text-[#af2600] transition-colors duration-300"
                    >
                      Ver perfil de Instagram
                    </a>
                  </div>
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-[#af2600] mr-3" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                    <a
                      href="https://www.tiktok.com/@pijijeregenerativo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-medium hover:text-[#af2600] transition-colors duration-300"
                    >
                      Ver perfil de TikTok
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card className="rounded-2xl shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15181.687888055363!2d-91.7510754!3d17.9590945!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85f3d7f56a5aa25d%3A0x7e58bf813acdb82d!2sOrg%C3%A1nicos%20del%20Tr%C3%B3pico%20S.A.%20de%20C.V.!5e0!3m2!1sen!2smx!4v1710740095685!5m2!1sen!2smx"
                    height="500"
                    style={{ border: 0, width: "100%" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </CardContent>
              </Card>
            </div>
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
                <a
                  href="/Aviso-de-privacidad-Organicos-del-Tropico.pdf"
                  target="_blank"
                  className="hover:text-white transition-colors duration-300"
                  rel="noreferrer"
                >
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
              <div className="flex justify-center md:justify-end mb-4 space-x-4">
                <a
                  href="https://www.facebook.com/pijijeregenerativo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-colors duration-300"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/pijije_regenerativo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-full hover:bg-pink-600 transition-colors duration-300"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.tiktok.com/@pijijeregenerativo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-full hover:bg-black transition-colors duration-300"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@OrganicosdelTropico"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-full hover:bg-red-600 transition-colors duration-300"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
              <div className="flex flex-col md:flex-row justify-center md:justify-end space-y-2 md:space-y-0 md:space-x-4 text-sm">
                <a
                  href="mailto:organicosdeltropico@yahoo.com.mx"
                  className="hover:text-white transition-colors duration-300 flex items-center justify-center md:justify-start"
                >
                  <Mail className="h-4 w-4 mr-1" />
                  organicosdeltropico@yahoo.com.mx
                </a>
                <span className="hidden md:inline">•</span>
                <a
                  href="tel:+529341150595"
                  className="hover:text-white transition-colors duration-300 flex items-center justify-center md:justify-start"
                >
                  <Phone className="h-4 w-4 mr-1" />
                  +52 934 1150595
                </a>
                <span className="hidden md:inline">•</span>
                <a
                  href="https://api.whatsapp.com/send?phone=529341150595&text=Hola%20visité%20su%20página%20web%20y%20me%20gustaría%20que%20me%20contactaran%20para%20más%20información"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-300 flex items-center justify-center md:justify-start"
                >
                  <svg className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
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
          href="https://api.whatsapp.com/send?phone=529341150595&text=Hola%20visité%20su%20página%20web%20y%20me%20gustaría%20que%20me%20contactaran%20para%20más%20información"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-colors duration-300"
        >
          <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
          </svg>
        </a>
      </div>
    </div>
  )
}
