(function () {
    function checkWebpSupport() {
      return new Promise(function (resolve) {
        var img = new Image();
        img.onload = function () {
          resolve(img.width > 0 && img.height > 0);
        };
        img.onerror = function () {
          resolve(false);
        };
        img.src =
          'data:image/webp;base64,UklGRiQAAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
      });
    }
  
    checkWebpSupport().then(function (isWebpSupported) {
      if (isWebpSupported) {
        var images = document.querySelectorAll('.indexImg');
        images.forEach(function (image) {
          image.src = image.src + '?eo-img.format=webp';
        });
      }
    });
  })();