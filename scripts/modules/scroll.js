class ScrollObserver {
  constructor(els, cb, options){
    this.els = document.querySelectorAll(els);
    const defaultOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
      once: true
     };
    this.options = Object.assign(defaultOptions, options);
    this.once = this.options.once;
    this.cb = cb;
    this._init()
  }
  _init(){
    const callback = function(entries, obserber){
      entries.forEach(entry => {
        if (entry.isIntersecting){
          this.cb(entry.target, true)
          if(this.once){
            obserber.unobserve(entry.target);
          }
        }else{
          this.cb(entry.target, false)
        }
        
      });
    };

    this.io = new IntersectionObserver(callback.bind(this));
    this.els.forEach(el => this.io.observe(el));
  }
}