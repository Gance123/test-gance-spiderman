// const swiper = new Swiper('.swiper1', {
//   // Optional parameters
//   // direction: 'vertical',
//   loop: true,
//   effect: 'fade',
//   grabCursor: true,
//   centeredSlides: true,
//   slidesPerView: 1,
//   speed: 1000,
//   autoplay: {
//     delay:2700,
//     disableOnInteraction: false
//   },

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   }
// });


class SpiderSlider {
  constructor(el){
    this.el = el;
    this.swiper = this._initSlider();
  }
  _initSlider() {
    return new Swiper(this.el, {
      // Optional parameters
      // direction: 'vertical',
      loop: true,
      effect: 'fade',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 1,
      speed: 1000,
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },      
    });    
  }
  start(options = {}){
    //assign (defalt , {})//重複した内容は右が優先//option引数はmainで決める
    options = Object.assign({ 
      delay:4600,
      disableOnInteraction: false
    }, options);
    this.swiper.params.autoplay = options;
    this.swiper.autoplay.start();
  }
  stop(){
    this.swiper.autoplay.stop();
  }
}


class AdSlider {
  constructor(el){
    this.el = el;
    this.swiper = this._initSlider();
  }
  _initSlider() {
    return new Swiper(this.el, {
      // Optional parameters
      // direction: 'vertical',
      loop: true,
      effect: 'slide',
      grabCursor: true,
      centeredSlides: true,
      speed: 1000,
      breakpoints: {//breakpoints
        320:{
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 3,
        },
        1080: {
          slidesPerView: 5,
        },
      },
    });    
  }
  start(options = {}){
    //assign (defalt , {})//重複した内容は右が優先//option引数はmainで決める
    options = Object.assign({ 
      delay: 3200,
      disableOnInteraction: false
    }, options);
    this.swiper.params.autoplay = options;
    this.swiper.autoplay.start();
  }
  stop(){
    this.swiper.autoplay.stop();
  }
}