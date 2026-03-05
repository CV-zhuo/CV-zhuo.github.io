document.addEventListener('DOMContentLoaded', function () {
  var aboutLinks = Array.from(document.querySelectorAll('a[href="#about"], #nav-about'));
  function enableAboutLayout() {
    document.body.classList.add('about-open');
  }
  function openMainIfNeeded() {
    if (typeof window.loadAll === 'function') {
      window.loadAll();
    }
  }
  function scrollToAbout() {
    var target = document.getElementById('education') || document.getElementById('about');
    if (!target) return false;
    enableAboutLayout();
    var nav = document.querySelector('.site-nav');
    var navH = nav ? nav.getBoundingClientRect().height : 0;
    var top = window.scrollY + target.getBoundingClientRect().top - navH - 8;
    window.scrollTo({ top: top, behavior: 'smooth' });
    if (location.hash !== '#about') history.replaceState(null, '', '#about');
    return true;
  }
  aboutLinks.forEach(function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      enableAboutLayout();
      openMainIfNeeded();
      setTimeout(scrollToAbout, 1150);
    });
  });
  if (location.hash === '#about') {
    enableAboutLayout();
    openMainIfNeeded();
    setTimeout(scrollToAbout, 1150);
  }
});
