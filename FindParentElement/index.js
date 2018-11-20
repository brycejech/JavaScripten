/*
  Usage:
  
  const el = document.querySelector('<Some Selector>');
  
  _parents(el, function callback(parentEl){
    // Some logic to determine if this is the parent element you are looking for
  });
  
  - OR -
  
  _parents(el, '<Some Selector>');
*/

// Allows use of HTMLElement.matches() back to IE9
if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}

// Find parent element by selector or callback
function _parents(el, cb){
  // If cb is a string, assume selector and convert to callback function
  const str = cb;
  typeof cb === 'string' && (cb = (el) => el.matches(str));

  if( cb(el) ) return el;

  while(el && el.parentNode !== document){
    el = el.parentNode;
    if( cb(el) ) return el;
  }
  
  return undefined;
}
