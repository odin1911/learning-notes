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
