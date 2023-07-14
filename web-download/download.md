# 流览器内下载

```js
window.location.href = downloadUrl;
```

一般文件使用上述方式就可以下载，有些情况下（比如reponse.hand内配置）会在页面内打开，以下方式强制下载

## refs

<https://github.com/rndme/download>
<https://github.com/eligrey/FileSaver.js>

[自己实现](https://segmentfault.com/a/1190000015026760)

## codes

```js
// manual
async function download(downloadUrl: string, downloadFileName?: string) {
  try {
    const { pathname } = new URL(downloadUrl);
    const originFilename = decodeURI(pathname.slice(pathname.lastIndexOf('/') + 1));
    const filename = downloadFileName || originFilename;

    const res = await fetch(downloadUrl);
    if (res.status === 200) {
      const blob = await res.blob();
      const url = global.URL.createObjectURL(blob);
      const tmp = document.createElement('a');
      tmp.href = url;
      tmp.hidden = true;
      tmp.download = filename;
      document.body.appendChild(tmp);
      tmp.click();
      tmp.remove();
      global.URL.revokeObjectURL(url);
    }
  } catch (e) {}
}
```

### 使用`FileSaver.js`

[FileSaver.js](https://github.com/eligrey/FileSaver.js)

### 大文件使用`StreamSaver.js`

[StreamSaver.js](https://github.com/eligrey/FileSaver.js)
