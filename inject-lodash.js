if (typeof window !== 'undefined') {
    console.log('Website Version: 2025-02-03');
    window.addEventListener('keydown', function (e) {
        if (e.ctrlKey && (e.key === 'a' || e.key === 'c' || e.key === 'i' || e.key === 'j' || e.key === 'p' || e.key === 's' || e.key === 'u' || e.key === 'v' || e.key === 'F6')) {
            e.preventDefault();
        }
        if (e.key === 'F12') {
            console.warn('F12 is pressed, self destroyed');
            setTimeout(function () {
                document.body.innerHTML = "";
                document.head.innerHTML = "";
            }, 0);
        }
    });

    document.body.onselectstart = function () {
        return false;
    };

    document.querySelectorAll("img").forEach(function(img) {
        img.addEventListener("dragstart", function (e) {
            e.preventDefault();
        });
    });

    window.oncontextmenu = function () {
        return false;
    };

    document.addEventListener('dragstart', function (event) {
        event.preventDefault();
    });
    setInterval(function () {
        debugger;
    }, 100);
}
