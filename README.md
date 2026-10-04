# Sitio de Qué tengo en casa?

Sitio estático publicado con GitHub Pages en `https://martinsosa42.github.io`. El código de la app está en el repo privado `que-tengo-en-casa`.

- `index.html`: inicio.
- `404.html`: la página de los links de invitación. GitHub Pages la sirve para cualquier ruta que no existe, así `/invitacion/K7Q4MX` llega acá. Si la app está instalada, Android la abre antes (App Links).
- `privacidad.html`, `terminos.html` y `eliminar-cuenta.html`: los legales, en español, inglés y portugués (la app los abre desde Ayuda y los paywalls; Google Play y el App Store piden sus direcciones).
- `.well-known/assetlinks.json`: Android verifica con este archivo que el sitio y la app son del mismo dueño. Tiene que estar en la raíz del host. `.nojekyll` hace que GitHub Pages publique la carpeta `.well-known`.

## Pendiente

1. Sumar a `assetlinks.json` la huella SHA-256 del certificado de publicación (Play App Signing, en la consola de Google Play). La que está es la de la clave de depuración.
2. iOS: `.well-known/apple-app-site-association` con el Team ID de Apple (con la cuenta de Apple Developer).
3. Que un abogado revise la política de privacidad y los términos antes del lanzamiento.
