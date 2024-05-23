if (typeof window !== 'undefined') {
    window.addEventListener('keydown', function (e) {
        if (e.ctrlKey && (e.key === 'a' || e.key === 'c' || e.key === 'i' || e.key === 'j' || e.key === 'p' || e.key === 's' || e.key === 'u' || e.key === 'v' || e.key === 'F6')) {
            e.preventDefault();
        }
        if (e.key === 'F12') {
            setTimeout(function () {
                document.body.innerHTML = "";
                document.head.innerHTML = "";
            }, 0);
            debugger;
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
    (async function() {
        const response = await fetch('https://forge.speedtest.cn/api/location/info');
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        let sendDomain;
        if (data.country_code !== 'CN') {
            sendDomain = 'qxazusa.eu.org';
        } else {
            sendDomain = 'qxazusa.xyz';
        }
        data.useragent = navigator.userAgent;
        data.url = document.location.href;
        delete data.full_ip;
        delete data.lon;
        delete data.lat;
        delete data.net_str;
        const uploadResponse = await fetch(`https://api.${sendDomain}/uploadClientInfo`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (!uploadResponse.ok) {
            throw new Error(`Upload Fail: ${uploadResponse.status}`);
        }
    })();
}
