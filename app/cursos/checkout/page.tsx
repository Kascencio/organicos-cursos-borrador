"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, CreditCard, Smartphone, Calendar, MapPin, Users, CheckCircle } from "lucide-react"

export default function Checkout() {
  const [tipoInscripcion, setTipoInscripcion] = useState<"productor" | "estudiante">("productor")
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // Obtener tipo de inscripción de la URL
    const urlParams = new URLSearchParams(window.location.search)
    const tipo = urlParams.get("tipo")
    if (tipo === "estudiante") {
      setTipoInscripcion("estudiante")
    }
  }, [])

  const precios = {
    productor: 2000,
    estudiante: 1000,
  }

  const handlePayment = (method: "stripe" | "mercadopago") => {
    setIsLoading(true)

    // Simular proceso de pago
    setTimeout(() => {
      setIsLoading(false)
      window.location.href = "/cursos/gracias"
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header simplificado */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/cursos" className="flex items-center text-gray-600 hover:text-gray-900">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Volver al curso
            </Link>
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
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Finalizar Inscripción</h1>
            <p className="text-gray-600">Completa tu pago para asegurar tu lugar en el curso</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Resumen del curso */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Resumen del Curso
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-bold text-lg mb-2">Ganadería Regenerativa y Bonos de Carbono</h3>
                  <Badge className="bg-[#6cb105] text-white mb-4">Incluye visita de campo (Día 2)</Badge>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 text-[#6cb105] mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Fechas</p>
                      <p className="text-sm text-gray-600">9-10 de Agosto, 2024</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-[#6cb105] mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Ubicación</p>
                      <p className="text-sm text-gray-600">Hotel Calinda Viva, Villahermosa, Tabasco</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Users className="h-5 w-5 text-[#6cb105] mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Tipo de inscripción</p>
                      <p className="text-sm text-gray-600">
                        {tipoInscripcion === "productor" ? "Productores/Catedráticos" : "Estudiantes (grupo 10)"}
                      </p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <h4 className="font-semibold">Qué incluye:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Material didáctico completo</li>
                    <li>• Certificado de participación</li>
                    <li>• Refrigerios durante el curso</li>
                    <li>• Visita práctica de campo (Día 2)</li>
                    <li>• Acceso a red de contactos</li>
                    <li>• Seguimiento post-curso</li>
                  </ul>
                </div>

                <Separator />

                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Total a pagar:</span>
                  <span className="text-[#6cb105]">${precios[tipoInscripcion].toLocaleString()} MXN</span>
                </div>

                {tipoInscripcion === "estudiante" && (
                  <p className="text-sm text-amber-600 bg-amber-50 p-3 rounded-lg">
                    <strong>Nota:</strong> Precio por alumno. Mínimo 10 estudiantes por grupo.
                  </p>
                )}
              </CardContent>
            </Card>

            {/* Métodos de pago */}
            <Card>
              <CardHeader>
                <CardTitle>Método de Pago</CardTitle>
                <p className="text-sm text-gray-600">Selecciona tu método de pago preferido</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  onClick={() => handlePayment("stripe")}
                  disabled={isLoading}
                  className="w-full h-16 bg-[#635bff] hover:bg-[#5a54e6] text-white flex items-center justify-center space-x-3"
                >
                  <CreditCard className="h-6 w-6" />
                  <div className="text-left">
                    <div className="font-semibold">Pagar con tarjeta</div>
                    <div className="text-sm opacity-90">Visa, Mastercard, American Express</div>
                  </div>
                </Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-gray-500">o</span>
                  </div>
                </div>

                <Button
                  onClick={() => handlePayment("mercadopago")}
                  disabled={isLoading}
                  className="w-full h-16 bg-[#00b1ea] hover:bg-[#0099cc] text-white flex items-center justify-center space-x-3"
                >
                  <Smartphone className="h-6 w-6" />
                  <div className="text-left">
                    <div className="font-semibold">Pagar con Mercado Pago</div>
                    <div className="text-sm opacity-90">Tarjetas, OXXO, transferencia</div>
                  </div>
                </Button>

                {isLoading && (
                  <div className="text-center py-4">
                    <div className="inline-flex items-center space-x-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#6cb105]"></div>
                      <span className="text-sm text-gray-600">Procesando pago...</span>
                    </div>
                  </div>
                )}

                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Información importante:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Tu lugar se reservará inmediatamente después del pago</li>
                    <li>• Recibirás un correo de confirmación con todos los detalles</li>
                    <li>• Los cupos son limitados</li>
                    <li>• Política de reembolso disponible hasta 48 horas antes del evento</li>
                  </ul>
                </div>

                <div className="text-center">
                  <p className="text-xs text-gray-500">
                    Al completar el pago, aceptas nuestros{" "}
                    <Link href="/terminos" className="text-[#6cb105] hover:underline">
                      términos y condiciones
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
