# 奇奇怪怪问题

dev question

## 不同地域的同事访问 oss 地址 404

开发一个项目，部署在 oss 上，使用内网环境解析的域名。在公司内部访问是正常的，但是杭州同事通过 vpn 访问就 404。

同时，平级的项目部署在 k8s 上，杭州同事就能正常访问。

结论：是不同的 vpn 解析的 ip 不同，运维特殊处理。并表示 k8s 环境之前配置过。

## JavaScript Heap out of memory

```
NODE_OPTIONS=--max-old-space-size=4096
```

<https://bobbyhadz.com/blog/javascript-heap-out-of-memory>

<https://segmentfault.com/a/1190000017972349>

## 端口占用

```shell
lsof -i tcp:9001

kill -9 3210
```

## ios safari 上字体变大

ios safari 横屏时字体变大，竖屏时正常。

```css
body {
  -webkit-text-size-adjust: 100%;
}
```

text-size-adjust 在 iPhone 上默认值为 auto，iPad 上的默认值为 none。
这个存疑，自己看了一个 ipad 上的 body 上也是 auto。

[css - Fix font size issue on Mobile Safari (iPhone) where text is rendered inconsistently and some fonts are larger than others? - Stack Overflow](https://stackoverflow.com/questions/5303263/fix-font-size-issue-on-mobile-safari-iphone-where-text-is-rendered-inconsisten)

[text-size-adjust - 知乎](https://zhuanlan.zhihu.com/p/36545720)

[text-size-adjust bug 分析 - 掘金](https://juejin.cn/post/6844903648103759880)
