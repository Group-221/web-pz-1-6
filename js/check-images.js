(function(){
  // Simple diagnostic: find <img> and <source srcset> inside .app-bg-cont and check load
  function log(msg){
    try{ console.log('[check-images] ' + msg); } catch(e){}
  }

  function checkImgEl(img){
    if(!img) return;
    // If image already loaded OK, skip
    if(img.complete && img.naturalWidth > 0){
      log(img.getAttribute('src') + ' loaded OK');
      return;
    }
    // Listen for error
    img.addEventListener('error', function(){
      log('FAILED to load: ' + img.getAttribute('src'));
      // Try common extension fallback (.jpeg <-> .jpg)
      var src = img.getAttribute('src');
      if(!src) return;
      if(src.match(/\.jpeg$/i)){
        var alt = src.replace(/\.jpeg$/i, '.jpg');
        log('Trying fallback: ' + alt);
        img.src = alt;
      } else if(src.match(/\.jpg$/i)){
        var alt2 = src.replace(/\.jpg$/i, '.jpeg');
        log('Trying fallback: ' + alt2);
        img.src = alt2;
      }
    });
    // Also log if it eventually loads
    img.addEventListener('load', function(){
      log('Loaded after retry: ' + img.getAttribute('src'));
    });
  }

  document.addEventListener('DOMContentLoaded', function(){
    var container = document.querySelectorAll('.app-bg-cont');
    if(!container.length){ log('No .app-bg-cont found'); }
    container.forEach(function(c){
      var imgs = c.querySelectorAll('img');
      imgs.forEach(checkImgEl);
      // check <source srcset>
      var sources = c.querySelectorAll('source');
      sources.forEach(function(s){
        var ss = s.getAttribute('srcset');
        if(ss) log('Source candidate: ' + ss);
      });
    });
  });
})();
