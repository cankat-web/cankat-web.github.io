// Ortak davranış: mobil menü, örnek iletişim düğmeleri, yıl.
(function () {
  var btn = document.querySelector('.menu-btn');
  var nav = document.querySelector('.nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.textContent = open ? 'Kapat' : 'Menü';
    });
  }

  var toastEl;
  window.toast = function (msg) {
    if (!toastEl) { toastEl = document.createElement('div'); toastEl.className = 'toast'; toastEl.setAttribute('role', 'status'); document.body.appendChild(toastEl); }
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toastEl._t);
    toastEl._t = setTimeout(function () { toastEl.classList.remove("show"); }, msg.length > 90 ? 5000 : 2600);
  };

  // Şablonda gerçek numara yok: arama ve WhatsApp düğmeleri ne yapacağını söyler.
  document.addEventListener('click', function (e) {
    var a = e.target.closest('[data-demo]');
    if (!a) return;
    e.preventDefault();
    var kind = a.getAttribute('data-demo');
    window.toast(kind === 'call' ? 'Gerçek sitede bu düğme işletmeyi tek dokunuşla arar.'
      : kind === 'wa' ? 'Gerçek sitede bu düğme WhatsApp sohbetini hazır mesajla açar.'
      : 'Örnek şablon.');
  });

  // Harita tıklanınca yüklenir: Google'ın çerezleri ziyaretçi istemeden gelmesin.
  document.querySelectorAll('iframe.map[data-src]').forEach(function (fr) {
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'map-load'; b.setAttribute('style', fr.getAttribute('style') || '');
    b.innerHTML = '<b>Haritayı göster</b><span>Google Haritalar yüklenir</span>';
    b.addEventListener('click', function () { fr.src = fr.dataset.src; b.replaceWith(fr); });
    fr.replaceWith(b);
  });

  document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
