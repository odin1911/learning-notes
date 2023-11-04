# hsts

tags: https

HTTP Strict Transport Security（通常简称为HSTS）

相关 response header `Strict-Transport-Security: max-age=<expire-time>`，
设置在浏览器收到这个请求后的`<expire-time>`秒的时间内凡是访问这个域名下的请求都使用HTTPS请求。

## 问题表现

> 某次访问无https的测试环境时，显示无响应 ERR_CONNECTION_RESET. 仔细一看，网址被跳转到了<https://test-api.demo.example.com>. 由于测试环境并未配置https，所以无法访问.

## refs

<https://segmentfault.com/a/1190000023603672>

[《你的连接不是专用连接怎么解决》](https://wen.baidu.com/question/208072704999962965.html)

> 提示访问非信任CA签发证书的网站时，浏览器都会提示你的连接不是专用连接，且无法进入。这时我们用键盘输入“thisisunsafe” 即可正常进入
