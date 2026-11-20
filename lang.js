// troca de idioma (EN / PT); lembra a escolha neste navegador
document.getElementById('lang').addEventListener('click', function () {
  var pt = !document.documentElement.classList.contains('pt');
  document.documentElement.classList.toggle('pt', pt);
  document.documentElement.lang = pt ? 'pt-BR' : 'en';
  try { localStorage.setItem('lang', pt ? 'pt' : 'en'); } catch (e) {}
});
