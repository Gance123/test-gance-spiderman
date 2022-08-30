class TextAnimation {
  constructor(el){
    this.DOM = {};
    this.DOM.el = el instanceof HTMLElement ? el : document.querySelector(el);
    this.chars = this.DOM.el.innerHTML.trim().split("");
  }
  _splitText(){
    return this.chars.reduce((accu, curr)=>{
      curr = curr.replace(/\s+/,'&nbsp;');
      return `${accu}`
    })
  }
}