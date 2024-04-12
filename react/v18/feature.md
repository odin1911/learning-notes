# react 18 新特性笔记

## React 18 的严格模式将通过两次调用功能组件、初始化器以及更新器

React 18 中的一大性能提升就在于并发，但它也要求组件能与可复用的状态兼容。为了实现并发，我们需要能够中断正在进行的渲染，同时复用旧的状态以保持 UI 一致性。

解决方法：
要求组件、初始化器和更新器都是幂等的。替换数据，不要直接改变状态。

```js
// 错误
setTodos(prevTodos => {
  prevTodos.push(createTodo()); // 同一个 Todo 会被添加两次
});
// 正确
setTodos(prevTodos => {
  return […prevTodos, createTodo()];
});
```

## transition

[「React18 新特性」深入浅出用户体验大师—transition](https://juejin.cn/post/7027995169211285512)
这篇说的很清楚

```js
// startTransition
const handleChange = () => {
  /* 高优先级任务 —— 改变搜索条件 */
  setInputValue(e.target.value);
  /* 低优先级任务 —— 改变搜索过滤后列表状态  */
  startTransition(() => {
    setSearchQuery(e.target.value);
  });
};
```

```js
// useTransition
const [isPending, startTransition] = React.useTransition();
const handleChange = (e) => {
  setInputValue(e.target.value);
  startTransition(() => {
    setSearchQuery(e.target.value);
  });
};
```

```js
// useDeferredValue
const [value, setInputValue] = React.useState('');
const query = React.useDeferredValue(value);
const handleChange = (e) => {
  setInputValue(e.target.value);
};
```

## flushSync

退出批处理的口子