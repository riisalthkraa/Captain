// Cap'taine — site vitrine
(function () {
  var toggle = document.querySelector('.menu-toggle');
  var menu = document.getElementById('menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
    });
  }
  var copyBtns = document.querySelectorAll('[data-copy]');
  for (var k = 0; k < copyBtns.length; k++) {
    copyBtns[k].addEventListener('click', function (e) {
      var btn = e.currentTarget, text = btn.getAttribute('data-copy');
      var out = btn.parentNode.querySelector('.copy-ok');
      function done(ok) { if (out) out.textContent = ok ? 'Adresse copiée' : 'Sélectionne l\'adresse pour la copier'; }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () { done(true); }, function () { done(false); });
      } else { done(false); }
    });
  }
  var y = document.querySelectorAll('[data-year]');
  for (var i = 0; i < y.length; i++) y[i].textContent = new Date().getFullYear();
})();
