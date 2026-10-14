# NOVA Academy — Sitio web estático

Sitio demostrativo de cursos, inspirado en tendencias visuales de interfaces tecnológicas oscuras. Identidad y contenido originales.

## Estructura

```text
nova-academy/
├── index.html          # Contenido y estructura semántica
├── css/
│   └── styles.css      # Estilos, animaciones y responsive
├── js/
│   └── main.js         # Menú móvil, filtros y formulario
├── assets/             # Carpeta reservada para imágenes y recursos propios
└── README.md           # Instrucciones
```

## Abrir el sitio

1. Descomprime el archivo ZIP.
2. Abre la carpeta `nova-academy` en Visual Studio Code.
3. Abre `index.html` en tu navegador o usa la extensión Live Server.

## Personalización

- Modifica los textos, cursos y precios en `index.html`.
- Cambia colores en las variables CSS al inicio de `css/styles.css`.
- Sustituye `contacto@ejemplo.com` en `js/main.js` por el correo real.
- Coloca tus imágenes en `assets/` y enlázalas desde HTML/CSS.

## Importante

El formulario usa `mailto:` y requiere una aplicación de correo configurada en el dispositivo del visitante. No guarda ni envía datos por sí solo. Los precios, duración y cursos son ejemplos, no una oferta comercial real.

## GitHub + Vercel

1. Crea un repositorio de GitHub.
2. Sube el contenido de la carpeta `nova-academy` a la raíz del repositorio.
3. En Vercel selecciona **Add New → Project** e importa el repositorio.
4. Selecciona **Other** como framework si se solicita, deja el directorio raíz en `./` y despliega.

No se necesita `npm install` ni proceso de compilación.

## Dependencias

Sin librerías JavaScript externas. Las tipografías de Google Fonts requieren conexión a Internet; el navegador utilizará fuentes alternativas si no están disponibles.
