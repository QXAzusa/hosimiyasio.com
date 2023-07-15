var script = document.createElement('script');
script.innerHTML = `
document.body.onselectstart = function() {
    return false
}
;
jQuery("img").on("dragstart", function() {
    return false
});
window.oncontextmenu = function() {
    return false
}
;
document.onkeydown = function(e) {
    if (e.ctrlKey && (e.keyCode === 65 || e.keyCode === 67 || e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 80 || e.keyCode === 83 || e.keyCode === 85 || e.keyCode === 86 || e.keyCode === 117)) {
        return false
    }
    ;if (e.keyCode == 123) {
        return false
    }
}
;
document.addEventListener('dragstart', function(event) {
    event.preventDefault();
});
window.addEventListener('devtoolsOpened', function() {
    setInterval(function () {
      document.body.innerHTML = "";
      document.head.innerHTML = "";
      debugger;
    }, 100);
  });
`;
document.head.appendChild(script);