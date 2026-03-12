

## Plan: Empaquetar proyecto para migración

### Resumen

El proyecto es una aplicación React + Vite + Tailwind CSS + TypeScript de una sola página informativa sobre Mutualidades de Chile y la Ley Karin. No usa backend, base de datos ni autenticación. Las únicas dependencias de Lovable son mínimas y fáciles de eliminar.

### Dependencias de Lovable a eliminar

1. **`lovable-tagger`** (devDependency en `package.json`): Plugin de desarrollo que etiqueta componentes para el editor de Lovable. No afecta el build de producción.
   - Eliminar de `package.json` devDependencies
   - Eliminar import y uso en `vite.config.ts`

2. **Script de GPT Engineer** (en `index.html` línea 56): `<script src="https://cdn.gpteng.co/gptengineer.js">` - Script externo que habilita la edición en Lovable. No es necesario para el funcionamiento.
   - Eliminar la línea del script y el comentario asociado

3. **`components.json`**: Archivo de configuración de shadcn/ui que referencia la estructura del proyecto. Se puede mantener ya que es útil si se quieren agregar más componentes shadcn en el futuro (no es exclusivo de Lovable).

### Archivos a modificar

| Archivo | Cambio |
|---------|--------|
| `package.json` | Eliminar `lovable-tagger` de devDependencies |
| `vite.config.ts` | Eliminar import de `lovable-tagger` y su uso en plugins |
| `index.html` | Eliminar script de `gptengineer.js` y su comentario |

### Documentación a crear

Crear un archivo `MIGRATION.md` con:

- **Stack tecnológico**: React 18, Vite 5, TypeScript, Tailwind CSS 3, shadcn/ui
- **Estructura del proyecto**: Descripción de carpetas (`src/components/`, `src/hooks/`, `src/data/`, `src/utils/`, `src/pages/`)
- **Componentes principales**: Lista de secciones (Hero, LeyKarin, SafeEnvironments, etc.)
- **Dependencias clave**: Descripción breve de cada librería usada (embla-carousel, recharts, react-router-dom, etc.)
- **Integraciones externas**: Google Analytics (G-TCF0HLDWDH), iframe de buscador de mutualidades
- **Assets**: Imágenes en `public/lovable-uploads/` (renombrar carpeta a `public/assets/` es opcional pero recomendado)
- **Instrucciones de build**: `npm install`, `npm run dev`, `npm run build`
- **Notas de migración**: Qué se eliminó de Lovable, path aliases (`@/` → `./src/`), consideraciones para otros frameworks

### Nota sobre assets

Las imágenes están en `public/lovable-uploads/`. Renombrar esta carpeta requeriría actualizar todas las referencias en el código (hay muchas). Se documentará pero no se renombrará para evitar romper referencias.

### Lo que NO se toca

- **shadcn/ui components**: Son componentes estándar, no dependen de Lovable
- **Google Analytics**: Integración propia del cliente
- **Todas las dependencias de npm**: Son librerías estándar del ecosistema React
- **`@vitejs/plugin-react-swc`**: Plugin estándar de Vite

