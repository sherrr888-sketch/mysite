// MUHANDIS HIZMATI — sayt skriptlari

(function () {
  'use strict';

  // 1) Kunduzgi / tungi rejim.
  //    Boshlang'ich holat index.html dagi kichik skriptda o'rnatiladi
  //    (sahifa chaqnab ketmasligi uchun). Bu yerda — almashtirish mantig'i.
  var tugma = document.getElementById('tema-tugma');
  if (tugma) {
    tugma.addEventListener('click', function () {
      var tanlangan = document.documentElement.getAttribute('data-theme');
      var hozir = tanlangan
        ? tanlangan
        : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      var yangi = hozir === 'dark' ? 'light' : 'dark';

      document.documentElement.setAttribute('data-theme', yangi);
      try {
        localStorage.setItem('tema', yangi);
      } catch (e) {}
    });
  }

  // 2) Footer'dagi yilni avtomatik yangilash
  var year = document.getElementById('year');
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // 3) Bo'limlar skroll paytida yumshoq paydo bo'ladi.
  //    JS ishlamasa yoki animatsiya o'chirilgan bo'lsa — hammasi oddiy ko'rinadi.
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!reduceMotion && 'IntersectionObserver' in window) {
    var blocks = document.querySelectorAll('.block, .service, .section-label, footer');

    blocks.forEach(function (el) {
      el.classList.add('reveal');
    });

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    blocks.forEach(function (el) {
      io.observe(el);
    });
  }

  // 4) Loyihalar karuseli (hero rasm) — barcha loyihalar navbat bilan aylanadi
  var karusel = document.getElementById('loyiha-karusel');
  if (karusel) {
    var track = karusel.querySelector('.hc-track');
    var slaydlar = karusel.querySelectorAll('.hc-slide');
    var dotsWrap = karusel.querySelector('.hc-dots');
    var joriy = 0;
    var vaqt;

    slaydlar.forEach(function (_, i) {
      var nuqta = document.createElement('button');
      nuqta.type = 'button';
      nuqta.className = 'hc-dot' + (i === 0 ? ' active' : '');
      nuqta.setAttribute('aria-label', (i + 1) + '-loyihaga o\'tish');
      nuqta.addEventListener('click', function () {
        boradi(i);
        qaytaBoshla();
      });
      dotsWrap.appendChild(nuqta);
    });

    var nuqtalar = dotsWrap.querySelectorAll('.hc-dot');

    function boradi(i) {
      joriy = i;
      track.style.transform = 'translateX(-' + (100 * joriy) + '%)';
      nuqtalar.forEach(function (n, idx) {
        n.classList.toggle('active', idx === joriy);
      });
    }

    function keyingi() {
      boradi((joriy + 1) % slaydlar.length);
    }

    function qaytaBoshla() {
      clearInterval(vaqt);
      if (!reduceMotion) {
        vaqt = setInterval(keyingi, 4500);
      }
    }

    karusel.addEventListener('mouseenter', function () { clearInterval(vaqt); });
    karusel.addEventListener('mouseleave', qaytaBoshla);

    qaytaBoshla();
  }
})();
