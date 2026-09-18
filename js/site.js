/* In-page navigation for the About / Publications sections.
   The HomePage template keeps the page in a fixed 100vh viewport until the
   intro animation finishes, so any anchor link has to (1) relax that layout,
   (2) trigger the template's own loadAll(), and only then (3) scroll. */
document.addEventListener('DOMContentLoaded', function () {
  var INTRO_MS = 1150;

  function enableAboutLayout() {
    document.body.classList.add('about-open');
  }

  function openMainIfNeeded() {
    if (typeof window.loadAll === 'function') window.loadAll();
  }

  function scrollTo(hash) {
    var id = (hash || '#about').slice(1);
    var target = document.getElementById(id) || document.getElementById('about');
    if (!target) return false;
    enableAboutLayout();
    var nav = document.querySelector('.site-nav');
    var navH = nav ? nav.getBoundingClientRect().height : 0;
    var top = window.scrollY + target.getBoundingClientRect().top - navH - 12;
    window.scrollTo({ top: top, behavior: 'smooth' });
    if (location.hash !== hash) history.replaceState(null, '', hash);
    return true;
  }

  function go(hash) {
    var alreadyOpen = document.body.classList.contains('about-open');
    enableAboutLayout();
    openMainIfNeeded();
    // If the intro has already played, scroll straight away.
    setTimeout(function () { scrollTo(hash); }, alreadyOpen ? 60 : INTRO_MS);
  }

  Array.from(document.querySelectorAll('a[href^="#"]')).forEach(function (a) {
    var hash = a.getAttribute('href');
    if (!hash || hash === '#') return;
    a.addEventListener('click', function (e) {
      e.preventDefault();
      go(hash);
    });
  });

  if (location.hash && document.getElementById(location.hash.slice(1))) {
    go(location.hash);
  }
});
