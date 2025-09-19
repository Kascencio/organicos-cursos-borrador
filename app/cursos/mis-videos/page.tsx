"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, ExternalLink, User, LogOut, Calendar, CheckCircle } from "lucide-react"

export default function MisVideos() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  const lecciones = [
    {
      id: "1",
      titulo: "Manejo Holístico — Conferencia 1",
      instructor: "Ing. Jorge Luis Ayala Filigrana",
      duracion: "45 min",
      descripcion: "Fundamentos del manejo holístico aplicado a la ganadería regenerativa",
      thumbnail: "/images/instructor-jorge-holistico.jpg",
      videoId: "1F8iBRg1YR0", // ID de ejemplo
      completed: true,
    },
    {
      id: "2",
      titulo: "Pastoreo Regenerativo — Conferencia 2",
      instructor: "José Arturo González Franco",
      duracion: "50 min",
      descripcion: "Técnicas avanzadas de pastoreo para regenerar los suelos",
      thumbnail: "/images/instructor-jose.jpg",
      videoId: "nUB8NktoV9c",
      completed: true,
    },
    {
      id: "3",
      titulo: "Búfalos de Agua — Conferencia 3",
      instructor: "Ing. Jorge Luis Ayala Filigrana",
      duracion: "40 min",
      descripcion: "Integración de búfalos en sistemas ganaderos regenerativos",
      thumbnail: "/images/instructor-jorge-bufalo.jpg",
      videoId: "tazYyMN1b90",
      completed: false,
    },
    {
      id: "4",
      titulo: "Bonos de Carbono — Conferencia 4",
      instructor: "Ing. Marco Aurelio Cabrera García",
      duracion: "55 min",
      descripcion: "Acceso a mercados de carbono para productores ganaderos",
      thumbnail: "/images/instructor-marco.jpg",
      videoId: "gW6_a4UWjr4",
      completed: false,
    },
    {
      id: "5",
      titulo: "Permacultura & Agricultura Orgánica — Conferencia 5",
      instructor: "Ing. Jorge Luis Ayala Filigrana",
      duracion: "48 min",
      descripcion: "Diseño de sistemas integrados sostenibles",
      thumbnail: "/images/instructor-jorge-genetica.jpg",
      videoId: "1F8iBRg1YR0",
      completed: false,
    },
    {
      id: "6",
      titulo: "Día de Campo — Recorrido práctico",
      instructor: "Todos los instructores",
      duracion: "90 min",
      descripcion: "Aplicación práctica de técnicas regenerativas en campo",
      thumbnail: "/images/programa-curso.jpg",
      videoId: "nUB8NktoV9c",
      completed: false,
    },
  ]

  const handleVideoSelect = (videoId: string) => {
    setSelectedVideo(videoId)
  }

  const handleLogout = () => {
    // Simular logout
    window.location.href = "/cursos/login"
  }

  const completedCount = lecciones.filter((l) => l.completed).length
  const progressPercentage = (completedCount / lecciones.length) * 100

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Image
                src="/org-nicos-del-tr-pico-logo.jpg"
                alt="Orgánicos del Trópico"
                width={150}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-sm text-gray-600">
                <User className="h-4 w-4 mr-2" />
                <span>Mi cuenta</span>
              </div>
              <Button onClick={handleLogout} variant="outline" size="sm">
                <LogOut className="h-4 w-4 mr-2" />
                Cerrar sesión
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="container mx-auto px-4 py-8">
        {/* Header del curso */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">Mis videos del curso</h1>
              <p className="text-gray-600">Ganadería Regenerativa y Bonos de Carbono</p>
            </div>
            <Badge className="bg-[#6cb105] text-white px-4 py-2">
              {completedCount}/{lecciones.length} completadas
            </Badge>
          </div>

          {/* Barra de progreso */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div
              className="bg-[#6cb105] h-2 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-600">Progreso del curso: {Math.round(progressPercentage)}%</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Lista de lecciones */}
          <div className="lg:col-span-1">
            <h2 className="text-xl font-bold mb-4">Lecciones del curso</h2>
            <div className="space-y-3">
              {lecciones.map((leccion) => (
                <Card
                  key={leccion.id}
                  className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                    selectedVideo === leccion.videoId ? "ring-2 ring-[#6cb105] border-[#6cb105]" : ""
                  }`}
                  onClick={() => handleVideoSelect(leccion.videoId)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="relative w-16 h-12 rounded overflow-hidden flex-shrink-0">
                        <Image
                          src={leccion.thumbnail || "/placeholder.svg"}
                          alt={leccion.titulo}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <Play className="h-4 w-4 text-white" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <h3 className="font-semibold text-sm leading-tight mb-1">{leccion.titulo}</h3>
                          {leccion.completed && <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 ml-2" />}
                        </div>
                        <p className="text-xs text-gray-600 mb-1">{leccion.instructor}</p>
                        <p className="text-xs text-gray-500">{leccion.duracion}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Reproductor de video */}
          <div className="lg:col-span-2">
            {selectedVideo ? (
              <Card>
                <CardContent className="p-0">
                  <div className="relative aspect-video rounded-t-lg overflow-hidden">
                    <iframe
                      src={`https://www.youtube.com/embed/${selectedVideo}`}
                      title="Video del curso"
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="p-6">
                    {(() => {
                      const currentLeccion = lecciones.find((l) => l.videoId === selectedVideo)
                      return currentLeccion ? (
                        <div>
                          <h3 className="text-xl font-bold mb-2">{currentLeccion.titulo}</h3>
                          <p className="text-gray-600 mb-4">{currentLeccion.descripcion}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center text-sm text-gray-500">
                              <User className="h-4 w-4 mr-1" />
                              {currentLeccion.instructor}
                              <span className="mx-2">•</span>
                              <Calendar className="h-4 w-4 mr-1" />
                              {currentLeccion.duracion}
                            </div>
                            <Button asChild variant="outline" size="sm">
                              <a
                                href={`https://drive.google.com/file/d/${selectedVideo}/preview`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center"
                              >
                                Abrir en Google Drive
                                <ExternalLink className="h-4 w-4 ml-1" />
                              </a>
                            </Button>
                          </div>
                        </div>
                      ) : null
                    })()}
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="h-96 flex items-center justify-center">
                <CardContent className="text-center">
                  <Play className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Selecciona una lección</h3>
                  <p className="text-gray-600">Elige una lección de la lista para comenzar a ver el contenido</p>
                </CardContent>
              </Card>
            )}

            {/* Información adicional */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Información del curso presencial</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 text-[#6cb105] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Fechas</p>
                      <p className="text-sm text-gray-600">9-10 de Agosto, 2024</p>
                      <p className="text-sm text-gray-600">9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start">
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
                      className="lucide lucide-map-pin text-[#6cb105] mr-3 mt-1 flex-shrink-0"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <div>
                      <p className="font-semibold">Ubicación</p>
                      <p className="text-sm text-gray-600">Hotel Calinda Viva</p>
                      <p className="text-sm text-gray-600">Villahermosa, Tabasco</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-[#6cb105]/10 rounded-lg">
                  <p className="text-sm text-[#6cb105] font-medium">
                    💡 Tip: Revisa estos videos antes del evento presencial para aprovechar al máximo la experiencia.
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
