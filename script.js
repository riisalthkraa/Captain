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
      function done(ok) { if (out) out.textContent = ok ? (btn.getAttribute('data-copied') || 'Adresse copiée') : 'Sélectionnez le texte pour le copier'; }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () { done(true); }, function () { done(false); });
      } else { done(false); }
    });
  }
  // Version proposée au téléchargement : celle du fichier publié avec le site (2.4.0)
  var versions = document.querySelectorAll('[data-version]');
  if (versions.length && window.fetch) {
    fetch('version.json', { cache: 'no-store' }).then(function (r) { return r.ok ? r.json() : null; }).then(function (data) {
      if (!data || !/^\d+\.\d+\.\d+$/.test(data.version)) return;
      for (var v = 0; v < versions.length; v++) versions[v].textContent = data.version;
    }, function () {});
  }
  // Téléchargement (2.4.1) : sur Windows (ordinateur), « Télécharger » donne directement l'installateur ;
  // sur téléphone ou tablette, jamais de .exe : la section explique qu'il faut un ordinateur Windows
  var ua = navigator.userAgent || '';
  var phone = /Android|iPhone|iPad|iPod|Mobile/i.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1);
  var windows = /Windows NT/.test(ua) && !phone;
  var exe = document.querySelector('[data-exe]');
  if (windows && exe) {
    var direct = document.querySelectorAll('.hero [data-download]');
    for (var d = 0; d < direct.length; d++) direct[d].setAttribute('href', exe.getAttribute('href'));
  }
  if (phone) {
    if (exe) exe.hidden = true;
    var notes = document.querySelectorAll('.phone-only-note');
    for (var n = 0; n < notes.length; n++) notes[n].hidden = false;
  }
  var y = document.querySelectorAll('[data-year]');
  for (var i = 0; i < y.length; i++) y[i].textContent = new Date().getFullYear();
})();
