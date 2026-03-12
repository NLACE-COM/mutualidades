# Mutualidades de Chile — Entornos de Trabajo Seguros

Sitio web informativo sobre la Ley Karin y la prevención de acoso laboral en Chile, desarrollado por la Asociación de Mutualidades.

**URL de producción:** https://entornosseguros.cl

---

## Stack Tecnológico

| Tecnología | Versión | Descripción |
|------------|---------|-------------|
| React | 18.3 | Librería UI |
| Vite | 5.4 | Build tool y dev server |
| TypeScript | 5.5 | Tipado estático |
| Tailwind CSS | 3.4 | Framework CSS utility-first |
| shadcn/ui | — | Componentes UI basados en Radix UI |
| React Router DOM | 6.26 | Enrutamiento SPA |

---

## Inicio Rápido

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo (puerto 8080)
npm run dev

# Build de producción (output en dist/)
npm run build

# Preview del build
npm run preview
```

---

## Estructura del Proyecto

```
src/
├── components/           # Componentes React
│   ├── ui/              # Componentes shadcn/ui (reutilizables)
│   ├── carousel/        # Componentes del carrusel de imágenes
│   ├── roles/           # Componentes de roles y responsabilidades
│   ├── LaborInspection/ # Sección de inspección laboral (gráficos)
│   │   ├── Charts/      # CompanySizeChart, GenderDistribution, etc.
│   │   ├── StatCards.tsx
│   │   └── index.tsx
│   ├── Hero.tsx         # Banner principal con parallax
│   ├── Header.tsx       # Navegación superior sticky
│   ├── Footer.tsx       # Pie de página
│   ├── LeyKarin.tsx     # Sección informativa Ley Karin
│   ├── SafeEnvironments.tsx    # Entornos seguros
│   ├── PositiveWorkplace.tsx   # Ambiente laboral positivo
│   ├── FrequentQuestions.tsx   # Preguntas frecuentes (accordion)
│   ├── ContactInfo.tsx         # Información de contacto
│   ├── MutualSearch.tsx        # Buscador de mutualidades (iframe)
│   ├── Importance.tsx          # Sección de importancia
│   ├── TakeItSeriously.tsx     # Sección "Tómatelo en serio"
│   ├── RolesResponsabilidades.tsx # Roles y responsabilidades (tabs)
│   ├── WorkplaceImageSlider.tsx   # Slider de imágenes
│   ├── HomeContent.tsx         # Composición de todas las secciones
│   ├── MainLayout.tsx          # Layout principal (Header + Footer)
│   ├── ScrollTracker.tsx       # Tracking de scroll para analytics
│   ├── AnimationsObserver.tsx  # Observer para animaciones de entrada
│   └── ParallaxBackground.tsx  # Fondo con efecto parallax
│
├── data/                # Datos estáticos
│   ├── carouselImages.ts   # Imágenes y textos del carrusel
│   └── rolesData.tsx       # Datos de roles y responsabilidades
│
├── hooks/               # Custom hooks
│   ├── use-carousel.tsx           # Lógica del carrusel
│   ├── use-counter-animation.tsx  # Animación de contadores numéricos
│   ├── use-intersection-observer.tsx # Observer de intersección
│   ├── use-mobile.tsx             # Detección de dispositivo móvil
│   ├── use-parallax.tsx           # Efecto parallax en scroll
│   └── use-tilt.tsx               # Efecto tilt en hover
│
├── pages/               # Páginas (React Router)
│   ├── Index.tsx        # Página principal (única)
│   └── NotFound.tsx     # Página 404
│
├── utils/
│   └── analytics.ts     # Utilidades de Google Analytics (gtag)
│
├── types/
│   └── analytics.d.ts   # Tipos para analytics (gtag global)
│
├── lib/
│   └── utils.ts         # Utilidad cn() para merge de clases CSS
│
├── App.tsx              # Router principal
├── main.tsx             # Entry point
└── index.css            # Estilos globales, tokens CSS y animaciones
```

---

## Dependencias Principales

| Paquete | Uso |
|---------|-----|
| `embla-carousel-react` + `embla-carousel-autoplay` | Carrusel de imágenes con autoplay |
| `recharts` | Gráficos en sección de inspección laboral |
| `react-router-dom` | Enrutamiento (solo 2 rutas: `/` y `*`) |
| `lucide-react` | Iconos SVG |
| `sonner` | Notificaciones toast |
| `tailwind-merge` + `clsx` + `class-variance-authority` | Utilidades CSS / variantes de componentes |
| `@radix-ui/*` | Primitivos UI accesibles (usados por shadcn/ui) |
| `react-hook-form` + `@hookform/resolvers` + `zod` | Formularios con validación |

---

## Integraciones Externas

### Google Analytics
- **ID**: `G-TCF0HLDWDH`
- **Configuración**: `index.html` (script tag) + `src/utils/analytics.ts`
- **Eventos custom**: Tracking de scroll por sección (`ScrollTracker.tsx`)
- **Privacidad**: IP anonimizada (`anonymize_ip: true`)

### Iframe — Buscador de Mutualidades
- **URL**: `https://www.asociaciondemutuales.cl/suseso/mutualsearch.html`
- **Componente**: `src/components/MutualSearch.tsx`
- Carga lazy con `loading="lazy"`

---

## Sistema de Diseño

### Colores personalizados (Tailwind)

Definidos en `tailwind.config.ts`:

| Token | Valor | Uso |
|-------|-------|-----|
| `azul` | `#003c4e` | Color institucional primario |
| `azul-light` | `#108cb0` | Variante clara |
| `celeste` | `#108cb0` | Acentos |
| `naranja` | `#f5a034` | Destacados, CTAs |
| `amarillo` | `#ffc000` | Acentos secundarios |
| `gris` | `#f3f3e9` | Fondo beige claro |
| `negro` | `#333333` | Texto principal |

### Tipografía
- **Montserrat** (Google Fonts) — cargada en `index.css`
- Clase: `font-montserrat`

### Animaciones CSS
Definidas en `src/index.css`:
- `.fade-in-section`, `.fade-in-left`, `.fade-in-right`, `.fade-in-up`, `.fade-in-down` — activadas con clase `.visible`
- `.stagger-item` — para animaciones escalonadas
- `.hover-lift`, `.hover-tilt` — efectos hover
- `.float`, `.float-slow`, `.float-fast` — animaciones flotantes
- `.parallax-layer`, `.parallax-depth-*` — capas parallax

### Tokens CSS (variables)
Los tokens semánticos shadcn/ui están en `src/index.css` bajo `:root` y `.dark` (HSL):
- `--background`, `--foreground`, `--primary`, `--secondary`, `--muted`, `--accent`, `--destructive`, `--border`, `--input`, `--ring`

---

## Path Aliases

El proyecto usa `@/` como alias para `./src/`. Configurado en:
- `tsconfig.json` → `paths`
- `tsconfig.app.json` → `paths`
- `vite.config.ts` → `resolve.alias`

Si se migra a otro bundler, replicar este alias.

---

## Assets

Las imágenes están en `public/lovable-uploads/`. Referenciadas como rutas absolutas en el código:
```tsx
// Ejemplo de uso en componentes
<img src="/lovable-uploads/nombre-archivo.png" />
```

Si se desea renombrar a `public/assets/`, actualizar **todas** las referencias en:
- `src/data/carouselImages.ts`
- `src/components/*.tsx` (múltiples componentes)
- `index.html` (favicon, og:image)

---

## SEO y Meta Tags

Configurados en `index.html`:
- Open Graph (Facebook/LinkedIn)
- Twitter Cards
- Schema.org JSON-LD (Organization)
- Canonical URL: `https://entornosseguros.cl`
- Favicon: `/lovable-uploads/867badca-43fb-459c-8a4e-0964a10b51a0.png`

---

## Cómo Modificar Secciones

El contenido de la página se compone en `src/components/HomeContent.tsx`, que renderiza las secciones en orden. Para:

- **Agregar una sección**: Crear componente en `src/components/`, importarlo en `HomeContent.tsx`
- **Reordenar secciones**: Cambiar el orden de los componentes en `HomeContent.tsx`
- **Modificar datos del carrusel**: Editar `src/data/carouselImages.ts`
- **Modificar roles**: Editar `src/data/rolesData.tsx`
- **Agregar componentes UI**: Usar `npx shadcn@latest add <componente>` (config en `components.json`)

---

## Notas de Migración

### Dependencias de Lovable eliminadas
- `lovable-tagger` (devDependency) — plugin de etiquetado para el editor
- Script `gptengineer.js` — script de edición en vivo

### El proyecto es 100% client-side
- No hay backend, API propia ni base de datos
- No hay autenticación
- El build genera archivos estáticos en `dist/`
- Servir como SPA (redirect todo a `index.html`)

### Migración a otro framework
- **Next.js**: Mover `public/` tal cual. Convertir `pages/Index.tsx` a `app/page.tsx`. Los componentes son compatibles.
- **Otro hosting**: Servir `dist/` como SPA con redirect a `index.html`
- **SSR**: Mover meta tags de `index.html` al framework correspondiente

### Archivo `components.json`
Configuración estándar de shadcn/ui. Se mantiene para facilitar agregar nuevos componentes con `npx shadcn@latest add`.
