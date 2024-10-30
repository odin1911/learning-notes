# 从 generate 了解异步编程

## generate

[阮一峰](https://www.ruanyifeng.com/blog/2015/04/generator.html)

Generator 函数将异步操作表示得很简洁，但是流程管理却不方便（即何时执行第一阶段、何时执行第二阶段）

Generator 函数就是一个异步操作的容器。它的自动执行需要一种机制，当异步操作有了结果，能够自动交回执行权。(co)

[The Modern JavaScript Tutorial](https://zh.javascript.info/generators)

generator 是可迭代的，值都要使用 yield 返回，当 done: true 时，for..of 循环会忽略最后一个 value（retrun 返回的值）

generator 组合，yield* 指令将执行 委托 给另一个 generator

yield 是一条双向路（two-way street）：它不仅可以向外返回结果，而且还可以将外部的值传递到 generator 内。
调用 generator.next(arg)，我们就能将参数 arg 传递到 generator 内部。这个 arg 参数会变成 yield 的结果。

generator.throw

generator.return

```js
function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) yield i;
}

function* generatePasswordCodes() {

  // 0..9
  yield* generateSequence(48, 57);
  // 同 
  // for (let i = 48; i <= 57; i++) yield i;

  // A..Z
  yield* generateSequence(65, 90);

  // a..z
  yield* generateSequence(97, 122);

}
```

## co

[co](https://github.com/tj/co)
co 是 Generator 函数的自动执行工具，也支持 Promise

两种方法可以做到这一点。

- （1）回调函数。将异步操作包装成 Thunk 函数，在回调函数里面交回执行权。
- （2）Promise 对象。将异步操作包装成 Promise 对象，用 then 方法交回执行权。

## async

async 函数就是 Generator 函数的语法糖。

async 函数就是将 Generator 函数的星号（*）替换成 async，将 yield 替换成 await

async 函数的实现，就是将 Generator 函数和自动执行器，包装在一个函数里

## refs

<https://zh.javascript.info/generators>
