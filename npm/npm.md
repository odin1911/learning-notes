# npm 相关杂项

## 常用包

git-cz npm-why ntl rimraf yalc yarn yrm git-open

npm install --global git-open

## nrm

nrm ls 不带星（\*）并且 nrm current 没有任何输出

> npm install Pana/nrm -g

## 查看包为什么被安装

```shell
yarn why lodash
```

## store2 本地存储

[store2 - npm](https://www.npmjs.com/package/store2)

```js
store.session.get(REFRESH_MARKER);
store.session.set(REFRESH_MARKER, true);
store.session.remove(REFRESH_MARKER);
```

## refs

[没想到你是这样的 npm install | Maoli](https://jackym06.github.io/2021/11/16/%E6%B2%A1%E6%83%B3%E5%88%B0%E4%BD%A0%E6%98%AF%E8%BF%99%E6%A0%B7%E7%9A%84npm%20install/)
说明 npm lock 机制，缓存，
