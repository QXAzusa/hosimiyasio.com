window.addEventListener('DOMContentLoaded', function() {
    // 获取当前网页中的所有超链接
    var links = document.getElementsByTagName('a');
  
    // 遍历超链接
    for (var i = 0; i < links.length; i++) {
      var link = links[i];
      var hostname = link.hostname.toLowerCase();
  
      // 检查超链接的域名是否不属于 *.hosimiyasio.com
      if (!isHosimiyaDomain(hostname)) {
        // 构建目标URL
        var targetUrl = 'https://link.hosimiyasio.com/?target=' + encodeURIComponent(link.href);
  
        // 设置超链接的新URL
        link.href = targetUrl;
      }
    }
  
    // 检查域名是否属于 *.hosimiyasio.com
    function isHosimiyaDomain(hostname) {
      var regex = /^([a-z0-9]+(-[a-z0-9]+)*\.)?hosimiyasio\.com$/;
      return regex.test(hostname);
    }
  });