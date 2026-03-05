document.addEventListener('DOMContentLoaded', function () {
  var aboutLinks = Array.from(document.querySelectorAll('a[href="#about"], #nav-about'));
  function scrollToAbout() {
    var target = document.getElementById('about');
    if (!target) return false;
    var nav = document.querySelector('.site-nav');
    var navH = nav ? nav.getBoundingClientRect().height : 0;
    var top = window.scrollY + target.getBoundingClientRect().top - navH - 8;
    window.scrollTo({ top: top, behavior: 'smooth' });
    if (location.hash !== '#about') history.replaceState(null, '', '#about');
    return true;
  }
  aboutLinks.forEach(function (a) {
    a.addEventListener('click', function (e) {
      if (scrollToAbout()) e.preventDefault();
    });
  });
  if (location.hash === '#about') {
    setTimeout(scrollToAbout, 0);
  }
});
