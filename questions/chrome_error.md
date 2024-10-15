# 遇到的 chrome 版本错误

## 92 某个版本限制了媒体数量

Chrome 92 has introduced a limit on number of audio and video tags that can be allocated in a particular tab. 75 for desktop browsers and 40 for mobile browsers.

报错：

```
Blocked attempt to create a WebMediaPlayer as there are too many WebMediaPlayers already in existence
```

解决方法：

后续版本已放大限制

## 117 开始不支持 SHA-1 证书

<https://chromestatus.com/feature/4832850040324096>

<https://serverfault.com/questions/1144894/https-compatibility-issue-with-chrome-116-117-err-ssl-protocol-error>

<https://support.google.com/chrome/thread/237710147>

报错：

```
ERR_SSL_PROTOCOL_ERROR
```

解决方法：

if toggling chrome://flags/#use-sha1-server-handshakes to "Enabled" (instead of "Default" or "Disabled") makes the issue go away, that is likely the cause.

此方法123版本后将失效


## 解决方案

[简析Chrome ERR_SSL_PROTOCOL_ERROR 协议错误 | NoPanic](https://www.ilikejobs.com/posts/what-is-chrome-going-on/)