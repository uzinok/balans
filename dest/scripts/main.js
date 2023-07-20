"use strict";

window.addEventListener('load', function () {
  document.body.classList.remove('no-js');
  nav();
  if (document.querySelector('.work__slider__list')) {
    var sliderParam = {
      infinite: true,
      prevArrow: $('.work__slider__button-prev'),
      nextArrow: $('.work__slider__button-next'),
      lazyLoad: 'progressive',
      mobileFirst: true,
      centerMode: true,
      centerPadding: '10px',
      responsive: [{
        breakpoint: 768,
        settings: {
          centerPadding: '26px'
        }
      }, {
        breakpoint: 990,
        settings: {
          centerPadding: '58px'
        }
      }]
    };
    $('.work__slider__list').slick(sliderParam);
  }
  if (document.querySelector('.planning__list')) {
    var _sliderParam = {
      infinite: false,
      prevArrow: $('.planning__slider__button-prev'),
      nextArrow: $('.planning__slider__button-next'),
      lazyLoad: 'progressive',
      mobileFirst: true,
      centerPadding: '60px'
    };
    $('.planning__list').slick(_sliderParam);
  }
});
var isMobile = {
  Android: function Android() {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function BlackBerry() {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function iOS() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function Opera() {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function Windows() {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function any() {
    return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
  }
};
var scrollHeight;
function nav() {
  var toggle = document.querySelector('.header__nav-toggle');
  var headerNav = document.querySelector('.header__nav');
  function initNav() {
    if (window.innerWidth >= 768) {
      toggle.classList.add('header__nav-toggle--close');
      headerNav.style.display = '';
      toggle.removeAttribute('aria-controls', 'menu');
      toggle.removeAttribute('aria-haspopup', true);
      headerNav.removeAttribute('aria-labelledby', 'menubutton');
      document.body.classList.remove('scroll-lock-nav');
    } else {
      toggle.classList.add('header__nav-toggle--close');
      headerNav.style.display = 'none';
      toggle.setAttribute('aria-controls', 'menu');
      toggle.setAttribute('aria-haspopup', true);
      headerNav.setAttribute('aria-labelledby', 'menubutton');
      document.body.classList.remove('scroll-lock-nav');
    }
  }
  initNav();
  window.addEventListener('resize', function () {
    initNav();
  });
  function listener() {
    function listenerKey(e) {
      if (e.key == 'Escape') {
        closeNav();
        window.removeEventListener('keydown', listenerKey);
      }
    }
    window.addEventListener('keydown', listenerKey);
  }
  function openNav() {
    headerNav.style.display = '';
    document.body.classList.add('scroll-lock-nav');
    window.setTimeout(function () {
      toggle.classList.remove('header__nav-toggle--close');
      toggle.setAttribute('aria-expanded', true);
    }, 10);
    scrollLock();
    listener();
  }
  toggle.addEventListener('click', function () {
    if (toggle.classList.contains('header__nav-toggle--close')) {
      openNav();
    } else {
      closeNav();
    }
  });
  function closeNav() {
    document.body.classList.remove('scroll-lock-nav');
    toggle.classList.add('header__nav-toggle--close');
    window.setTimeout(function () {
      headerNav.style.display = 'none';
      toggle.setAttribute('aria-expanded', false);
    }, 250);
    scrollLock('un');
  }
  headerNav.addEventListener('click', function (e) {
    if (e.target.nodeName == 'A' && window.innerWidth <= 575) {
      closeNav();
    }
  });
}
function scrollLock(un) {
  if (un) {
    document.body.style.position = '';
    window.scrollTo(0, scrollHeight);
    document.body.style.paddingRight = '';
    document.body.style.top = '';
    console.log(scrollHeight);
    return;
  }
  scrollHeight = window.scrollY || window.pageYOffset;
  document.body.style.top = "-".concat(scrollHeight, "px");
  if (!isMobile.any()) document.body.style.paddingRight = window.innerWidth - document.body.offsetWidth + 'px';
  setTimeout(function () {
    document.body.style.position = 'fixed';
  }, 0);
  console.log(scrollHeight);
  return scrollHeight;
}