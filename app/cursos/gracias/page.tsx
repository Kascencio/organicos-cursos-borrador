"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Play, Calendar, MapPin, Mail, Phone } from "lucide-react"

export default function Gracias() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header simplificado */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center">
            <Link href="/">
              <Image
                src="/org-nicos-del-tr-pico-logo.jpg"
                alt="Orgánicos del Trópico"
                width={150}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
          </div>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          {/* Mensaje de éxito */}
          <div className="mb-8">
            <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold mb-4">¡Pago recibido!</h1>
            <p className="text-xl text-gray-600 mb-6">
              Tu inscripción al curso de Ganadería Regenerativa y Bonos de Carbono ha sido confirmada.
            </p>
            <p className="text-lg text-gray-700">Tu acceso ya está activo. Da clic para ver tus lecciones.</p>
          </div>

          {/* Botón principal */}
          <div className="mb-12">
            <Button asChild size="lg" className="bg-[#6cb105] hover:bg-[#5a9504] text-white px-8 py-4 text-lg">
              <Link href="/cursos/mis-videos" className="flex items-center">
                <Play className="h-5 w-5 mr-2" />
                Ir a Mis videos
              </Link>
            </Button>
          </div>

          {/* Información del curso */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Detalles de tu curso</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="flex items-start">
                  <Calendar className="h-5 w-5 text-[#6cb105] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Fechas</p>
                    <p className="text-sm text-gray-600">9-10 de Agosto, 2024</p>
                    <p className="text-sm text-gray-600">9:00 AM - 6:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-[#6cb105] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Ubicación</p>
                    <p className="text-sm text-gray-600">Hotel Calinda Viva</p>
                    <p className="text-sm text-gray-600">Villahermosa, Tabasco</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Próximos pasos */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Próximos pasos</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#6cb105] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <p className="font-semibold">Revisa tu correo</p>
                    <p className="text-sm text-gray-600">
                      Te hemos enviado un correo de confirmación con todos los detalles
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#6cb105] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <p className="font-semibold">Accede a tus videos</p>
                    <p className="text-sm text-gray-600">Ya puedes ver las lecciones del curso en tu área privada</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#6cb105] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <p className="font-semibold">Prepárate para el curso</p>
                    <p className="text-sm text-gray-600">
                      Revisa el material y prepárate para la experiencia presencial
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Información de contacto */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">¿Necesitas ayuda?</h3>
              <p className="text-gray-600 mb-4">
                Si tienes alguna pregunta o necesitas asistencia, no dudes en contactarnos:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="outline" size="sm">
                  <a href="tel:+529932878909" className="flex items-center">
                    <Phone className="h-4 w-4 mr-2" />
                    (993) 287-8909
                  </a>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <a href="mailto:organicosdeltropico@yahoo.com.mx" className="flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    Enviar email
                  </a>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <a
                    href="https://api.whatsapp.com/send?phone=529932878909&text=Hola,%20tengo%20una%20pregunta%20sobre%20mi%20inscripción%20al%20curso"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
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
                      className="lucide lucide-message-circle mr-2"
                    >
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                    WhatsApp
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
