/////////////////////Home Page Animations///////////////////

//onLoad animations//
animateHome = () => {
  var firstTitles = document.querySelector('.firstTitles');
  var myName = document.querySelector('.myName');
  var scroll = document.querySelector('.scrollHome');
  var nav = document.querySelectorAll('.nav');
  var darkCol = document.querySelectorAll('.darkCol');

  setTimeout(function(){
      darkCol.forEach((col, i) => {
        if (window.innerWidth > 900) {
          col.style.width = '50vw';
        } else if (window.innerWidth < 900) {
          col.style.width = '100vw';
        }
      });
  }, 0);

  setTimeout(function(){
      firstTitles.style.marginLeft = '0px';
      myName.style.opacity = '1';
      myName.style.marginLeft = '0px';
      scroll.style.opacity = '1';
      nav.forEach((item, i) => {
        item.style.opacity = '1';
      });
  }, 500);
}

//Scroll Animations//
const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, scrollOffset = 0) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    ((window.innerHeight || document.documentElement.clientHeight) - scrollOffset)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 100)) {
      displayScrollElement(el);
    }
  })
}

setTimeout(function(){
  window.addEventListener('scroll', () => {
    handleScrollAnimation();
  })
}, 500);
