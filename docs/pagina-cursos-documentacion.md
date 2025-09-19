# Documentación de la Página de Cursos - Orgánicos del Trópico

## Estructura General

La página de cursos está implementada en dos versiones:
1. **Next.js/React** (`/app/cursos/page.tsx`) - Versión principal
2. **HTML estático** (`/cursos/index.html`) - Versión alternativa

## Rutas de Cursos

### Ruta Principal
- **URL**: `/cursos`
- **Archivo**: `/app/cursos/page.tsx`
- **Tipo**: Componente React con Next.js

### Ruta Alternativa
- **URL**: `/cursos/` (carpeta estática)
- **Archivos**:
  - `/cursos/index.html`
  - `/cursos/styles.css`
  - `/cursos/script.js`

## Componentes y Funcionalidades

### Componentes UI Utilizados
- `Button` - Botones de acción
- `Card` y `CardContent` - Tarjetas de información
- `Badge` - Etiquetas destacadas
- Iconos de Lucide React (Calendar, MapPin, Clock, Users, etc.)

### Secciones Principales

#### 1. Hero Section
- **Imagen principal**: `/images/curso-promocion.jpg`
- **Título**: "Ganadería Regenerativa y Bonos de Carbono"
- **Fechas**: 9 y 10 de Agosto, 2024
- **Ubicación**: Villahermosa, Tabasco
- **CTA**: Inscripción por WhatsApp

#### 2. Información del Curso
- **Fechas y horarios**: Sábado y domingo, 9:00 AM - 6:00 PM
- **Ubicación**: Hotel Calinda Viva, Villahermosa
- **Dirigido a**: Productores, ganaderos, técnicos, estudiantes
- **Precios**:
  - Productores y Catedráticos: $2,000.00 MXN
  - Estudiantes (grupos de 10): $1,000.00 MXN

#### 3. En los Medios
- Artículos de reconocimiento nacional
- Enlaces a Tumba Pato e Imagen Agropecuaria

#### 4. Temario del Curso
Temas cubiertos:
- Ganadería Regenerativa
- Pastoreo Regenerativo
- Genética Animal Adaptada
- Manejo Holístico
- Búfalos de Agua
- Permacultura
- Biodinámica
- Agricultura Orgánica
- Bonos de Carbono

#### 5. Instructores
- **Ing. Jorge Luis Ayala Filigrana**: Experto en Manejo Holístico y Búfalos
- **Ing. Marco Aurelio Cabrera García**: Especialista en Bonos de Carbono
- **José Arturo González Franco**: Experto en Pastoreo Regenerativo

#### 6. Inscripciones
- **Teléfonos**: (993) 287-8909, (993) 136-8705
- **WhatsApp**: Enlace directo con mensaje predefinido
- **Incluye**: Material didáctico, certificado, refrigerios, visita de campo

#### 7. Galería Promocional
Imágenes relacionadas:
- `/images/instructor-jorge-genetica.jpg`
- `/images/instructor-jorge-holistico.jpg`
- `/images/invitacion-curso.jpg`
- `/images/curso-promocion.jpg`

#### 8. Videos Promocionales
- 4 videos embebidos de YouTube
- Enlaces a canal @OrganicosdelTropico

## Recursos Multimedia

### Imágenes del Curso
- `curso-promocion.jpg` - Imagen principal del hero
- `instructor-jorge-bufalo.jpg` - Foto del instructor principal
- `instructor-jorge-genetica.jpg` - Instructor en tema de genética
- `instructor-jorge-holistico.jpg` - Instructor en manejo holístico
- `instructor-jose.jpg` - Instructor José Arturo
- `instructor-marco.jpg` - Instructor Marco Aurelio
- `invitacion-curso.jpg` - Invitación promocional
- `programa-curso.jpg` - Programa detallado
- `programa-dia1-parte1.jpg` - Programa día 1 parte 1
- `programa-dia1-parte2.jpg` - Programa día 1 parte 2
- `programa-portada.jpg` - Portada del programa

### Videos
- 4 videos promocionales embebidos desde YouTube
- IDs de videos: nUB8NktoV9c, 1F8iBRg1YR0, tazYyMN1b90, gW6_a4UWjr4

## Funcionalidades Interactivas

### JavaScript (cursos/script.js)
- **Menú móvil**: Toggle de navegación responsive
- **Smooth scrolling**: Navegación suave entre secciones
- **Animaciones**: Intersection Observer para elementos
- **Carga de imágenes**: Transiciones suaves al cargar

### Estilos (cursos/styles.css)
- **Responsive design**: Adaptable a móviles y desktop
- **Animaciones CSS**: fadeIn y transiciones
- **Tema de colores**: Verde (#6cb105) como color principal
- **Tipografía**: Inter font family

## Contacto y Conversión

### Métodos de Contacto
- **WhatsApp**: +52 993 287-8909
- **Teléfono alternativo**: +52 993 136-8705
- **Email**: organicosdeltropico@yahoo.com.mx
- **Ubicación**: Carretera Santa Adelaida-Palizada Km 3.5

### Call-to-Actions
- Botón principal de inscripción por WhatsApp
- Enlaces de llamada directa
- Formularios de contacto integrados

## Navegación

### Menú Principal
- Orgánicos del Trópico (inicio)
- ¿Qué Hacemos?
- Eventos
- **Cursos** (página actual)
- Contacto
- Pijije Regenerativo
- Savana

### Footer
- Enlaces de contacto
- Redes sociales (YouTube)
- Información legal
- Créditos de diseño (Web DSG)

## SEO y Metadatos

### Información Meta
- **Título**: "Cursos - Orgánicos del Trópico"
- **Descripción**: Curso de Ganadería Regenerativa y Bonos de Carbono
- **Keywords**: Ganadería regenerativa, bonos de carbono, agricultura orgánica

### Estructura Semántica
- Headers jerárquicos (h1, h2, h3)
- Alt text en imágenes
- Enlaces descriptivos
- Marcado semántico HTML5

## Arquitectura Técnica

### Tecnologías Utilizadas
- **Frontend**: Next.js 14 con App Router
- **Styling**: Tailwind CSS
- **Componentes**: shadcn/ui
- **Iconos**: Lucide React
- **Imágenes**: Next.js Image optimization
- **Responsive**: Mobile-first design

### Performance
- Optimización de imágenes automática
- Lazy loading de contenido
- Minificación de CSS y JS
- Carga progresiva de videos

### Accesibilidad
- Navegación por teclado
- Alt text en imágenes
- Contraste de colores adecuado
- Estructura semántica HTML

## Métricas y Conversión

### KPIs Principales
- Inscripciones por WhatsApp
- Tiempo en página
- Tasa de rebote
- Clics en videos promocionales

### Puntos de Conversión
1. Hero CTA (WhatsApp)
2. Información de precios
3. Sección de instructores
4. Videos promocionales
5. Footer de contacto

## Mantenimiento

### Actualizaciones Regulares
- Fechas de cursos
- Precios y promociones
- Información de instructores
- Videos promocionales
- Testimonios y medios

### Contenido Dinámico
- Próximos eventos
- Galería de fotos
- Testimonios de estudiantes
- Noticias y reconocimientos

---

**Última actualización**: Diciembre 2024
**Versión**: 2.0
**Responsable**: Equipo de Desarrollo Web
