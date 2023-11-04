# 奇奇怪怪问题

dev question

## 不同地域的同事访问oss地址404

开发一个项目，部署在oss上，使用内网环境解析的域名。在公司内部访问是正常的，但是杭州同事通过vpn访问就404。

同时，平级的项目部署在k8s上，杭州同事就能正常访问。

结论：是不同的vpn解析的ip不同，运维特殊处理。并表示k8s环境之前配置过。

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
