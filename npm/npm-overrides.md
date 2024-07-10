# overrides

2022-07-13

Overrides provide a way to replace a package in your dependency tree with another version, or another package entirely.

```json
// package.json
{
  "overrides": {
    "msw": {
      "headers-polyfill": "3.0.10"
    }
  }
}
```

<https://docs.npmjs.com/cli/v8/configuring-npm/package-json#overrides>

## 使用的场景

<https://github.com/mswjs/headers-polyfill/issues/36>

某个依赖版本不可用时，临时固定到旧版本

## in yarn

<https://classic.yarnpkg.com/lang/en/docs/selective-version-resolutions/>

<https://blog.csdn.net/qq_28586119/article/details/129097762>

```json
// package.json
{
  "resolutions": {
    "msw/headers-polyfill": "3.0.8"
  }
}
```

## refs

[字节的一个小问题npm 和 yarn不一样吗？](https://juejin.cn/post/7060844948316225572)

[字节的一个小问题npm 和 yarn不一样吗？(续篇)](https://juejin.cn/post/7071659901654827039/)

[yarn 使用 resolutions 解决版本依赖固化以及依赖的依赖版本不一致问题 - 掘金](https://juejin.cn/post/7205181884590276669)