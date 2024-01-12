# saga

[1](https://tsejx.github.io/react-guidebook/ecosystem/data-flow/redux-saga/)

## Effect

Sagas 都是 Generator 函数实现，可以用 yield 对 JavaScript 对象来表达 Saga 的逻辑，这些对象就是 Effect。

- Sagas 都是用 Generator 函数实现的
- 在 Generator 函数中，yield 右边的任何表达式都会被求值，结果会被 yield 给调用者
- 用 yield 对 Effect（简单对象），进行解释执行
- Effect 是一个简单的对象，这个对象包含了一些给 middleware 解释执行的信息。 你可以把 Effect 看作是发送给 middleware 的指令以执行某些操作（调用某些异步函数，发起一个 action 到 store 等等）

[2](https://juejin.cn/post/6844903840395821064)
saga由来，系列文章

