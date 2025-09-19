"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Mail, CheckCircle } from "lucide-react"

export default function RecuperarPassword() {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [emailSent, setEmailSent] = useState(false)

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email.trim()) {
      setError("El correo electrónico es requerido")
      return
    }

    if (!validateEmail(email)) {
      setError("Ingresa un correo válido")
      return
    }

    setError("")
    setIsLoading(true)

    // Simular envío de email
    setTimeout(() => {
      setIsLoading(false)
      setEmailSent(true)
    }, 2000)
  }

  const handleInputChange = (value: string) => {
    setEmail(value)
    if (error) {
      setError("")
    }
  }

  if (emailSent) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Header simplificado */}
        <header className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/cursos/login" className="flex items-center text-gray-600 hover:text-gray-900">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Volver al login
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
        <main className="flex-1 flex items-center justify-center py-12 px-4">
          <Card className="w-full max-w-md">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold mb-2">¡Correo enviado!</h2>
                <p className="text-gray-600 mb-6">
                  Te hemos enviado un correo a <strong>{email}</strong> con las instrucciones para restablecer tu
                  contraseña.
                </p>
                <p className="text-sm text-gray-500 mb-6">
                  Si no ves el correo en tu bandeja de entrada, revisa tu carpeta de spam.
                </p>
                <Button asChild className="w-full bg-[#6cb105] hover:bg-[#5a9504]">
                  <Link href="/cursos/login">Volver al login</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header simplificado */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/cursos/login" className="flex items-center text-gray-600 hover:text-gray-900">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Volver al login
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
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Mail className="h-8 w-8 text-blue-600" />
            </div>
            <CardTitle className="text-2xl font-bold">Recuperar contraseña</CardTitle>
            <p className="text-gray-600">Te enviaremos un correo con un enlace para restablecer tu contraseña.</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="email">Correo electrónico</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => handleInputChange(e.target.value)}
                  className={error ? "border-red-500" : ""}
                  placeholder="tu@email.com"
                />
                {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
              </div>

              <Button
                type="submit"
                className="w-full bg-[#6cb105] hover:bg-[#5a9504] text-white py-3"
                disabled={isLoading}
              >
                {isLoading ? "Enviando instrucciones..." : "Enviar instrucciones"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                ¿Recordaste tu contraseña?{" "}
                <Link href="/cursos/login" className="text-[#6cb105] hover:underline font-medium">
                  Iniciar sesión
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
