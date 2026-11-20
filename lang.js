// relógio da barra de tarefas falsa: hora e data do visitante
(function () {
  var t = document.getElementById('time'), d = document.getElementById('date'), m = document.querySelector('.mclock');
  if (!t) return;
  function tick() {
    var n = new Date();
    t.textContent = n.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    d.textContent = n.toLocaleDateString();
    if (m) m.textContent = t.textContent;
  }
  tick(); setInterval(tick, 10000);
})();

// troca de idioma (EN / PT); lembra a escolha neste navegador
document.getElementById('lang').addEventListener('click', function () {
  var pt = !document.documentElement.classList.contains('pt');
  document.documentElement.classList.toggle('pt', pt);
  document.documentElement.lang = pt ? 'pt-BR' : 'en';
  try { localStorage.setItem('lang', pt ? 'pt' : 'en'); } catch (e) {}
});

// "Nunca mais seja pego com o ___ descarregado": troca o periférico a cada 2s
document.querySelectorAll('.rot').forEach(function (el) {
  var words = el.getAttribute('data-words').split('|'), i = 0;
  if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  setInterval(function () {
    el.classList.add('out');
    setTimeout(function () { i = (i + 1) % words.length; el.textContent = words[i]; el.classList.remove('out'); }, 300);
  }, 2000);
});
