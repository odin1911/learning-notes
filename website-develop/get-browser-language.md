# 取用户语言

## 自己撸

```js
(function () {
  function getLanguage(
    supportedLngs = ["zh-CN", "en-US"],
    fallbackLng = "en-US"
  ) {
    var uri = new URL(window.location.hash.slice(1), "http://localhost");
    var resLang =
      uri.searchParams.get("language") ||
      uri.searchParams.get("lang") ||
      navigator.language;
    return supportedLngs.includes(resLang) ? resLang : fallbackLng;
  }
  function setLang() {
    window.document.body.dataset.lang = getLanguage();
  }

  "complete" === window.document.readyState
    ? setLang
    : window.document.addEventListener("DOMContentLoaded", setLang, !1);
})();
```

## npm

<https://www.npmjs.com/package/get-user-locale>

<https://www.npmjs.com/package/preferred-locale>
