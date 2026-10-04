# Sitio de Qué tengo en casa?

Sitio estático publicado con GitHub Pages en `https://martinsosa42.github.io`.

- `index.html`: inicio.
- `404.html`: la página de los links de invitación. GitHub Pages la sirve para cualquier ruta que no existe, así `/invitacion/K7Q4MX` llega acá. Si la app está instalada, Android la abre antes (App Links).
- `privacidad.html`, `terminos.html` y `eliminar-cuenta.html`: los legales, en español, inglés y portugués (la app los abre desde Ayuda y los paywalls; Google Play y el App Store piden sus direcciones).
- `.well-known/assetlinks.json`: Android verifica con este archivo que el sitio y la app son del mismo dueño. Tiene que estar en la raíz del host. `.nojekyll` hace que GitHub Pages publique la carpeta `.well-known`.
