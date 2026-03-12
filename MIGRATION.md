# Guía de Migración - Mutualidades de Chile

## Stack Tecnológico

| Tecnología | Versión | Descripción |
|------------|---------|-------------|
| React | 18.3 | Librería UI |
| Vite | 5.4 | Build tool y dev server |
| TypeScript | 5.5 | Tipado estático |
| Tailwind CSS | 3.4 | Framework CSS utility-first |
| shadcn/ui | - | Componentes UI basados en Radix UI |
| React Router DOM | 6.26 | Enrutamiento SPA |

## Estructura del Proyecto

```
src/
├── components/           # Componentes React
│   ├── ui/              # Componentes shadcn/ui (reutilizables)
│   ├── carousel/        # Componentes del carrusel de imágenes
│   ├── roles/           # Componentes de roles y responsabilidades
│   ├── LaborInspection/ # Sección de inspección laboral (con gráficos)
│   ├── Hero.tsx         # Banner principal
│   ├── Header.tsx       # Navegación superior
│   ├── Footer.tsx       # Pie de página
│   ├── LeyKarin.tsx     # Sección informativa Ley Karin
│   ├── SafeEnvironments.tsx    # Entornos seguros
│   ├── PositiveWorkplace.tsx   # Ambiente laboral positivo
│   ├── FrequentQuestions.tsx   # Preguntas frecuentes (accordion)
│   ├── ContactInfo.tsx         # Información de contacto
│   ├── MutualSearch.tsx        # Buscador de mutualidades (iframe externo)
│   ├── RolesResponsabilidades.tsx # Roles y responsabilidades
│   ├── WorkplaceImageSlider.tsx   # Slider de imágenes
│   ├── HomeContent.tsx         # Composición de todas las secciones
│   ├── MainLayout.tsx          # Layout principal (Header + Footer)
│   ├── ScrollTracker.tsx       # Tracking de scroll para analytics
│   ├── AnimationsObserver.tsx  # Observer para animaciones de entrada
│   └── ParallaxBackground.tsx  # Fondo con efecto parallax
│
├── data/                # Datos estáticos
│   ├── carouselImages.ts   # Imágenes del carrusel
│   └── rolesData.tsx       # Datos de roles y responsabilidades
│
├── hooks/               # Custom hooks
│   ├── use-carousel.tsx           # Lógica del carrusel
│   ├── use-counter-animation.tsx  # Animación de contadores
│   ├── use-intersection-observer.tsx # Observer de intersección
│   ├── use-mobile.tsx             # Detección de dispositivo móvil
│   ├── use-parallax.tsx           # Efecto parallax
│   └── use-tilt.tsx               # Efecto tilt en hover
│
├── pages/               # Páginas (React Router)
│   ├── Index.tsx        # Página principal
│   └── NotFound.tsx     # Página 404
│
├── utils/
│   └── analytics.ts     # Utilidades de Google Analytics
│
├── types/
│   └── analytics.d.ts   # Tipos para analytics (gtag)
│
├── lib/
│   └── utils.ts         # Utilidad cn() para clases CSS
│
├── App.tsx              # Router principal
├── main.tsx             # Entry point
└── index.css            # Estilos globales y tokens CSS
```

## Dependencias Principales

| Paquete | Uso |
|---------|-----|
| `embla-carousel-react` + `embla-carousel-autoplay` | Carrusel de imágenes |
| `recharts` | Gráficos en sección de inspección laboral |
| `react-router-dom` | Enrutamiento (solo 2 rutas: `/` y `*`) |
| `lucide-react` | Iconos SVG |
| `sonner` | Notificaciones toast |
| `tailwind-merge` + `clsx` + `class-variance-authority` | Utilidades CSS |
| `@radix-ui/*` | Primitivos UI (usados por shadcn/ui) |

## Integraciones Externas

### Google Analytics
- **ID**: `G-TCF0HLDWDH`
- **Ubicación**: `index.html` (script tag) y `src/utils/analytics.ts`
- **Eventos custom**: Tracking de scroll por sección (`ScrollTracker.tsx`)

### Iframe - Buscador de Mutualidades
- **URL**: `https://www.asociaciondemutuales.cl/suseso/mutualsearch.html`
- **Componente**: `src/components/MutualSearch.tsx`

## Assets

Las imágenes están en `public/lovable-uploads/`. Si se desea renombrar a `public/assets/`, hay que actualizar **todas** las referencias en:
- `src/data/carouselImages.ts`
- `src/components/*.tsx` (múltiples componentes)
- `index.html` (favicon, og:image)

## Instrucciones de Build

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo (puerto 8080)
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview
```

## Path Aliases

El proyecto usa `@/` como alias para `./src/`. Configurado en:
- `tsconfig.json` → `paths`
- `tsconfig.app.json` → `paths`
- `vite.config.ts` → `resolve.alias`

Si se migra a otro bundler, asegurarse de replicar este alias.

## Cambios realizados para la migración

1. **Eliminado `lovable-tagger`** de devDependencies y `vite.config.ts`
2. **Eliminado script `gptengineer.js`** de `index.html`
3. **`components.json`** se mantiene — es configuración estándar de shadcn/ui

## Notas para migración a otro framework

- **Next.js**: Mover `public/` tal cual. Convertir `pages/Index.tsx` a `app/page.tsx`. Los componentes son compatibles.
- **Otro hosting**: El build genera archivos estáticos en `dist/`. Servir como SPA (redirect todo a `index.html`).
- **SSR**: El proyecto es 100% client-side. No hay llamadas a APIs propias ni backend.
- **SEO**: Los meta tags están en `index.html`. Para SSR, moverlos al framework correspondiente.
