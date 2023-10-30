# jsdoc

源于 jsdoc 与 ts 之争

目前了解看来，jsdoc能替代ts类型的一部分功能，但是不完全。
jsdoc无需编译，对旧的js项目来说是个不错的补充。

## 插件

[eslint-plugin-jsdoc](https://www.npmjs.com/package/eslint-plugin-jsdoc)

## ts 官网方案 推荐的 eslint-plugin-jsdoc

[一个blog](https://chengpeiquan.com/article/javascript-with-typescript-type-checking.html)

[ts 官网](https://www.typescriptlang.org/docs/handbook/intro-to-js-ts.html)

[How to Write TypeScript Interfaces in JSDoc Comments](https://goulet.dev/posts/how-to-write-ts-interfaces-in-jsdoc/)

## questions

### 解决 eslint 针对 jsdoc 类型变量 no-unused-vars 的报错

<https://blog.csdn.net/lovefengruoqing/article/details/122327018>

[no-undefined-types](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-undefined-types.md#readme)

### eslint valid-jsdoc 和 jsdoc/check-tag-names 一个要求 return 一个要求 returns

<https://www.zhihu.com/question/464026938/answer/1930748539>

[定义一下 "jsdoc/check-tag-names" 的扩展选项](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/.README/rules/check-tag-names.md)
or
[修改 "valid-jsdom" 的扩展选项](https://eslint.org/docs/latest/rules/valid-jsdoc)
