# Guía práctica de Git y GitHub

Landing page educativa en español construida con HTML5, Tailwind CSS (CDN), JavaScript y Google Fonts.

## Archivos
- `index.html`: estructura, contenido y estilos Tailwind.
- `script.js`: menú móvil, copia de comandos, pestañas y preguntas frecuentes.
- `assets/flujo-git-github.png`: infografía de apoyo (si está disponible).

## Ejecutar localmente
1. Descomprime la carpeta.
2. Abre `index.html` en un navegador moderno. Para una experiencia más consistente, abre la carpeta en Visual Studio Code y usa una extensión como Live Server.
3. Se requiere conexión a internet para cargar Tailwind CSS CDN y Google Fonts.

## Publicar en GitHub Pages
1. Crea un repositorio en GitHub y sube `index.html`, `script.js` y la carpeta `assets` (si existe).
2. En el repositorio, abre **Settings → Pages**.
3. Selecciona la rama `main` y la carpeta raíz (`/(root)`) como fuente, si esa opción está disponible.
4. Guarda y espera a que GitHub Pages publique el sitio.

## Personalización
Busca `URL_DEL_REPOSITORIO` en los ejemplos y reemplázalo por la URL real de tu repositorio. Los comandos son ejemplos didácticos y deben adaptarse al estado real del proyecto.

## Consideraciones
- Esta página es estática; no requiere backend.
- GitHub Pages no ejecuta FastAPI, Node.js ni bases de datos.
- No publiques tokens, contraseñas, claves privadas ni archivos `.env`.
