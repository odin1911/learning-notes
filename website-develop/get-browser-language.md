# 取用户语言

## 自己撸

```js
function getLanguage() {
  var uri = new URL(window.location.hash.slice(1), "http://localhost");
  return (
    uri.searchParams.get("language") ||
    uri.searchParams.get("lang") ||
    navigator.language
  );
}

function setLang() {
  window.document.body.dataset.lang =
    getLanguage().split("-")[0] === "zh" ? "zh-CN" : "en-US";
}

"complete" === window.document.readyState
  ? setLang
  : window.document.addEventListener("DOMContentLoaded", setLang, !1);
```

## npm

<https://www.npmjs.com/package/get-user-locale>

<https://www.npmjs.com/package/preferred-locale>
