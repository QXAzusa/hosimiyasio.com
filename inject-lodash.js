// inject-lodash.js
import _ from 'lodash';

console.log('Lodash version:', _.VERSION);
document.onkeydown = function(e) {
    window.addEventListener('keydown', function(e) {
        if (e.ctrlKey && (e.key === 'a' || e.key === 'c' || e.key === 'i' || e.key === 'j' || e.key === 'p' || e.key === 's' || e.key === 'u' || e.key === 'v' || e.key === 'F6')) {
            e.preventDefault();
        }
        if (e.key === 'F12') {
            document.body.innerHTML = "";
            document.head.innerHTML = "";
            debugger;
        }
    });    
};
document.body.onselectstart = function() {
    return false;
};
jQuery("img").on("dragstart", function() {
    return false;
});
window.oncontextmenu = function() {
    return false;
};
document.addEventListener('dragstart', function(event) {
    event.preventDefault();
});
setInterval(function () {debugger}, 100);