# 🏔️ South Park Fan Page — Trabajo Práctico Final

**Universidad Tecnológica Nacional (UTN) — Centro de e-Learning**  
**Curso Inicial Front-End | Módulo 3: Desarrollo con React.js y Ecosistema Moderno**

---

## 📌 Descripción del Proyecto

Aplicación web interactiva desarrollada con **React** y **Vite**, que migra y amplía la maqueta original de HTML/CSS hacia una arquitectura moderna basada en componentes reutilizables, navegación con rutas dinámicas y gestión de estado.

El sitio homenajea a la serie animada **South Park**, brindando fichas de los personajes principales, galería interactiva con filtrado por categorías y visor modal, catálogo de episodios emblemáticos, sección biográfica de sus creadores y un formulario de contacto controlado en React.

---

## 🚀 Tecnologías Utilizadas

- ⚛️ **React 19**
- ⚡ **Vite 8**
- 🧭 **React Router DOM 7** (Navegación declarativa SPA con `Routes`, `Route`, `Outlet`, `NavLink`, `Link`)
- 🎨 **CSS Modular & Scoped**: Archivo `.css` individual por cada componente en `src/styles/`
- 🅱️ **Bootstrap 5.3** (Integración de utilidades complementarias)

---

## 📁 Estructura del Proyecto

El proyecto respeta rigurosamente las pautas de organización solicitadas para el Trabajo Práctico:

```text
mi-proyecto/
├── public/                 # Recursos estáticos servidos directamente (PNGs y JPGs locales)
│   ├── EricCartman.png
│   ├── StanMarsh.png
│   ├── KyleBroflovski.png
│   ├── KennyMcCormick.png
│   ├── ButtersStotch.png
│   ├── randy.png
│   ├── chef.png
│   ├── wendy.png
│   ├── garrison.png
│   ├── mackey.png
│   ├── trey.jpg
│   └── matt.jpg
├── src/
│   ├── assets/             # Fondos y recursos empaquetados por Vite (Fondo.jpg)
│   ├── components/         # Componentes reutilizables
│   │   ├── Navbar.jsx      # Barra de navegación con logo, rutas y menú responsivo
│   │   ├── Layout.jsx      # Contenedor principal con <Outlet /> para páginas dinámicas
│   │   ├── Card.jsx        # Tarjetas configurables con props dinámicas y fallback de imágenes
│   │   ├── Gallery.jsx     # Galería interactiva con filtros y modal lightbox
│   │   ├── Contact.jsx     # Formulario controlado (re-exportación de componente)
│   │   └── Footer.jsx      # Pie de página reutilizable con enlaces y créditos
│   ├── pages/              # Páginas de la aplicación enrutadas con React Router
│   │   ├── Home.jsx        # Portada, Hero banner, personajes y galería integrada
│   │   ├── About.jsx       # Biografía y tarjetas de los creadores (Trey Parker y Matt Stone)
│   │   ├── Episodes.jsx    # Catálogo de episodios icónicos con enlace oficial de streaming
│   │   ├── GalleryPage.jsx # Página dedicada para la galería completa
│   │   ├── Contact.jsx     # Formulario de contacto controlado
│   │   └── NotFound.jsx    # Manejo de error 404 para rutas inexistentes
│   ├── styles/             # Archivos CSS independientes por cada componente/página
│   │   ├── Navbar.css
│   │   ├── Layout.css
│   │   ├── Card.css
│   │   ├── Gallery.css
│   │   ├── Contact.css
│   │   ├── Footer.css
│   │   ├── Home.css
│   │   ├── About.css
│   │   ├── Episodes.css
│   │   ├── Creadores.css
│   │   └── Hero.css
│   ├── hooks/              # Custom Hooks desarrollados durante el proyecto
│   │   └── useForm.js      # Hook personalizado para control de formularios
│   ├── App.jsx             # Definición de rutas principales con React Router
│   ├── main.jsx            # Punto de entrada de React con BrowserRouter
│   └── index.css           # Reseteo y estilos globales
├── index.html              # Plantilla HTML base de Vite
├── package.json            # Dependencias y scripts
└── vite.config.js          # Configuración del servidor y bundler Vite
```

---

## 🧩 Componentes Implementados

1. **`Navbar`** (`src/components/Navbar.jsx`):
   - Barra de navegación fija con logotipo e icono local de Cartman.
   - Enlaces dinámicos gestionados con `NavLink` (con clase activa `.active`) a Inicio, Personajes, Galería, Capítulos, Creadores y Contacto.
   - Soporte para menú móvil responsive tipo hamburguesa.
2. **`Layout`** (`src/components/Layout.jsx`):
   - Contenedor base de la aplicación que aloja el `Navbar` superior y el `Footer` inferior.
   - Utiliza `<Outlet />` de `react-router-dom` para renderizar el contenido de cada ruta hija.
3. **`Card`** (`src/components/Card.jsx`):
   - Componente genérico para renderizar personajes y elementos informativos mediante props (`nombre`, `imagen`, `episodios`, `descripcion`, `badge`, `enlace`, `textoBoton`).
   - Prevención de imágenes rotas mediante evento `onError` con fallback local.
4. **`Gallery`** (`src/components/Gallery.jsx`):
   - Galería interactiva con filtros por categorías (*Todos*, *Principales*, *Secundarios*, *Adultos*, *Creadores*) usando `useState`.
   - Visor modal (lightbox) interactivo al hacer clic en cualquier tarjeta para ver detalles en tamaño completo.
5. **`Contact`** (`src/pages/Contact.jsx` / `src/components/Contact.jsx`):
   - Formulario 100% controlado mediante `useState`.
   - Registro en la consola del navegador (`console.log`) de los eventos de cambio (`onChange`) y de envío (`onSubmit`).
   - Previene el refresco de página mediante `event.preventDefault()`.
   - Botón para **Resetear** que reestablece los estados a vacío e imprime el evento en consola.
   - Mensajes visuales de confirmación de éxito y reseteo en el frontend.
6. **`Footer`** (`src/components/Footer.jsx`):
   - Pie de página institucional con enlaces rápidos y créditos UTN.

---

## 🛠️ Instalación y Ejecución Local

### Prerrequisitos
- Node.js versión 18 o superior instalado.

### 1. Clonar el repositorio
```bash
git clone https://github.com/TU_USUARIO/TU_REPOSITORIO.git
cd TU_REPOSITORIO
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Iniciar el servidor de desarrollo
```bash
npm run dev
```
Abre en tu navegador la dirección indicada en la terminal (usualmente `http://localhost:5173/`).

### 4. Compilar para producción (Build)
```bash
npm run build
```

---

## ✨ Correcciones Realizadas

- **URLs e Imágenes Rotas Reparadas**: Se eliminaron los enlaces externos de Wikipedia que fallaban por bloqueos de hotlinking (HTTP 403) y se migraron todos los assets de personajes y creadores a la carpeta `/public` local (`/EricCartman.png`, `/trey.jpg`, `/matt.jpg`, etc.).
- **Enrutamiento Completo con React Router**: Se corrigió el uso de `<Outlet />` dentro de `Layout.jsx` y se enlazaron todas las vistas principales (`/`, `/galeria`, `/capitulos`, `/info`, `/contacto`, `*`).
- **Botones Funcionales**: Se reparó el botón faltante de Matt Stone, el enlace mal formateado de Wikipedia, y los enlaces directos a la plataforma oficial de episodios en SouthPark.lat.
- **Formulario Interactivo con Reset**: Se aseguraron los manejadores de eventos con `useState`, la prevención de recarga y el registro en la consola exigido por las pautas del trabajo práctico.
