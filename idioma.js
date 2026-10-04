// Muestra el bloque del idioma del navegador (es, en o pt) y deja cambiarlo.
// Cada página tiene un bloque por idioma: <div data-idioma="es">…</div>.
(function () {
  var disponibles = ['es', 'en', 'pt'];
  function elegir(idioma) {
    if (disponibles.indexOf(idioma) < 0) idioma = 'es';
    document.documentElement.lang = idioma === 'pt' ? 'pt-BR' : idioma;
    document.querySelectorAll('[data-idioma]').forEach(function (bloque) {
      bloque.hidden = bloque.getAttribute('data-idioma') !== idioma;
    });
    document.querySelectorAll('nav.idiomas button').forEach(function (boton) {
      boton.setAttribute('aria-pressed', String(boton.value === idioma));
    });
    try { localStorage.setItem('idioma', idioma); } catch (e) {}
    document.dispatchEvent(new CustomEvent('idioma', { detail: idioma }));
  }
  var guardado = null;
  try { guardado = localStorage.getItem('idioma'); } catch (e) {}
  var inicial = guardado || (navigator.language || 'es').slice(0, 2).toLowerCase();
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('nav.idiomas button').forEach(function (boton) {
      boton.addEventListener('click', function () { elegir(boton.value); });
    });
    elegir(inicial);
  });
})();
