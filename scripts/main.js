document.addEventListener('DOMContentLoaded', function(){
  const header = document.querySelector(".header");
  
  const _inviewAnimation = function(el, inview){
    if(inview){
      el.classList.add('inview');
    }else{
      el.classList.remove('inview');
    }
  }

  const _invisible = function(el, inview){
    if(inview){
      header.classList.remove('triggered');
    }else{
      header.classList.add('triggered');
    }
  }

  
  const spiderslider = new SpiderSlider('.slider1');
  spiderslider.start();
  // spiderslider.stop();
  const Adslider = new AdSlider('.slider2');
  Adslider.start();
  // Adslider.stop();

  const so = new ScrollObserver('.swiper-slide', _inviewAnimation);
  const so2 = new ScrollObserver('.story__header', _inviewAnimation, {once:false});
  const so3 = new ScrollObserver('.invisible', _invisible, {once:false});
  const so4 = new ScrollObserver('.Avengers__explanation', _inviewAnimation, {once:false});
  const so5 = new ScrollObserver('.tomholand__explanation', _inviewAnimation, {once:false});
  const so6 = new ScrollObserver('.guruto__explanation', _inviewAnimation, {once:false});
  new MobileMenu();
});