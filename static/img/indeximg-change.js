var htmlElement = document.querySelector('html');
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (mutation.attributeName === 'data-theme') {
      var imgElement = document.getElementById('indexImg');
      if (imgElement != null){
        var newValue = htmlElement.getAttribute('data-theme');
        imgElement.src = 'https://static.hosimiyasio.com/image/illustration_hsio_wm.'+ newValue +'.png?eo-img.format=webp';}
        console.info('Switch To ' + newValue)
    }
  });
});
var config = { attributes: true };
observer.observe(htmlElement, config);