# redux source code

## createStore.ts

提供`createStore`接口，分析入参确定`reducer`、`preloadedState`和`enhancer`

`preloadedState`为 state 初始值

`reducer`用于产生新的 state

`enhancer`用于增强 createStore, 中间件就是通过`enhancer`注入的

`subscribe` 和 `unsubscribe` 时通过`ensureCanMutateNextListeners`防止 dispatch 过程中 listeners 变化引发 bug。很传统的一种侦听处理方式

`getState`得到最新的 state，一般用不到

`dispatch`关键方法，默认的 dispatch 只处理原生对象，通过`isPlainObject`判断，内部调用 reducer 获取最新 state，遍历调用 listeners。中间件就是通过重写 dispatch 实现的

`replaceReducer`用于动态更换当前的 reducer

`observable`一种简单的 rxjs 实现？我没用过

## combineReducers.ts

高阶函数，组合多个 reducer。

使用`!==`比较 reducer 的返回结果是否变化

## applyMiddleware.ts

中单件应用逻辑，返回一个 enhancer

内部重写了 store 的 dispatch

## types/

类型声明

## utils/

工具方法，compose.ts 也是工具方法
