# ssl 开发笔记

## ref

[本地 https 快速解决方案——mkcert](https://blog.dteam.top/posts/2019-04/%E6%9C%AC%E5%9C%B0https%E5%BF%AB%E9%80%9F%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88mkcert.html)

## 生成证书

[mkcert](https://github.com/FiloSottile/mkcert)

```shell
mkcert -install
mkcert example.com "*.example.com" example.test localhost 127.0.0.1 ::1
```

## mac 证书信任

使用 safari 打开一次，会把证书加入钥匙串

在钥匙串里信任证书，完成

## 局域网内使用

给 ip 生成证书

```shell
mkcert localhost 127.0.0.1 ::1 192.168.31.170
```

使用 mkcert -CAROOT 命令可以列出 CA 证书的存放路径

```shell
ls $(mkcert -CAROOT)
```

测试机信任根证书

> 可以看到 CA 路径下有两个文件 rootCA-key.pem 和 rootCA.pem 两个文件，用户需要信任 rootCA.pem 这个文件。将 rootCA.pem 拷贝一个副本，并命名为 rootCA.crt(因为 windows 并不识别 pem 扩展名，并且 Ubuntu 也不会将 pem 扩展名作为 CA 证书文件对待)，将 rootCA.crt 文件分发给其他用户，手工导入。
>
> windows 导入证书的方法是双击这个文件，在证书导入向导中将证书导入受信任的根证书颁发机构
>
> MacOS 的做法也一样，同样选择将 CA 证书导入到受信任的根证书办法机构。
>
> Ubuntu 的做法可以将证书文件(必须是 crt 后缀)放入/usr/local/share/ca-certificates/，然后执行 sudo update-ca-certificates
>
> Android 和 IOS 信任 CA 证书的做法参考官方文档

测试

```shell
curl -I https://192.168.31.170
```

> 无警告，加上-v 参数输出还会告诉证书是可信的。

## 报错 unable to verify the first certificate

网上说是证书链不完整

[OpenSSL：无法使用 OpenSSL 验证第一个证书 |帕沃尔·库塔杰 (Pavol Kutaj) |中等的 --- OpenSSL: Unable to Verify the First Certificate with OpenSSL | by Pavol Kutaj | Medium](https://pavolkutaj.medium.com/unable-to-verify-the-first-certificate-with-openssl-47eecb652a9b)
