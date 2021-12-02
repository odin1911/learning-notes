# immer

date: 2021-12-02

简化不可变状态处理方式

## opt-in features

- `enableES5()`
- `enableMapSet()`
- `enablePatches()`
- `enableAllPlugins()`

## using

produce(currentState, recipe: (draftState) => void): nextState

`produce`可只接受 recipe function，此时将返回一个执行 recipe 的 function。用于简化使用

## with React

`useImmer` 简化 useState + Immer

`useImmerReducer`简化 useReducer + Immer

Redux + Immer 参考 rtk

## TODO

高级使用还没有看

没看源码，找时间看一下，了解 proxy 的使用方式，及替代方法 feedback
