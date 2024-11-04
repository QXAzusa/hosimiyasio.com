var script = document.createElement('script');
script.innerHTML = `
setInterval(function () {debugger;}, 100);
`;
document.head.appendChild(script);