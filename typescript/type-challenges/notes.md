# 类型笔记

[Ts 高手篇：22 个示例深入讲解 Ts 最晦涩难懂的高级类型工具深入讲解 Typescript 高级类型工具实现原理和编程技巧。全 - 掘金](https://juejin.cn/post/6994102811218673700?utm_source=gold_browser_extension#heading-8)

keyof T 的结果为该类型上所有公有属性 key 的联合
T[keyof T]的方式，可以获取到 T 所有 key 的类型组成的联合类型
T[keyof K]的方式，获取到的是 T 中的 key 且同时存在于 K 时的类型组成的联合类型

extends
如果用于简单的条件判断，则是直接判断前面的类型是否可分配给后面的类型
若 extends 前面的类型是泛型，且泛型传入的是联合类型时，则会依次判断该联合类型的所有子类型是否可分配给 extends 后面的类型（是一个分发的过程）。

子类型比父类型更加具体,父类型比子类型更宽泛

只看了基础部分，对每个例子有详细说明，如果确实有需要，再去学习吧

[TypeScript 类型体操 | 茂茂物语](https://notes.fe-mm.com/fe/typescript/challenges)
>记录一些常用的类型写法，但使用的机会不大，当做快速查阅用
>文档中有一些写法的说明，当作公式来记

K extends keyof T 表示 K 是 keyof T 的子类型
P in K 遍历类型 K 拿到具体属性键
K extends keyof any 用于将 K 限制为 string | number | symbol 中的一种
keyof T | K 将 T 的所有属性和 K 合并为一个联合类型

## Pick 选取

```js
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}
```

## TupleToObject 元组转对象

```js
type TupleToObject<T extends readonly any[]> = {
  [K in T[number]]: K
}
```

## First 数组的第一个元素

```js
/* 使用索引实现 */
type First<T extends any[]> = T extends [] ? never : T[0]
type First<T extends any[]> = T['length'] extends 0 ? never : T[0]
type First<T extends any[]> = T[0] extends T[number] ? T[0] : never

/* 使用 infer 占位实现 */
type First<T extends any[]> = T extends [infer F, ...infer Rest] ? F : never
```

判断 T 是否是一个空数组
T extends []
T['length'] extends 0
T[0] extends T[number]

## Length 元组的长度

```js
type Length<T extends any> = T extends { length: number } ? T['length'] : never
```

## Exclude 排除

```js
type MyExclude<T, U> = T extends U ? never : T
```

## Awaited 获取 Promise 返回值类型

```js
type MyAwaited<T> = T extends Promise<infer R> ? MyAwaited<R> : T
```

## If 判断

```js
type If<C extends boolean, T, F> = C extends true ? T : F
```

## Concat 数组的 concat 方法

```js
type Concat<T extends any[], U extends any[]> = [...T, ...U]
```

## Includes 数组的 includes 方法

```js
/* 递归完善版 */
type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
  ? true
  : false
type Includes<T extends any[], U> = T extends [infer F, ...infer Rest]
  ? Equal<F, U> extends true
    ? true
    : Includes<Rest, U>
  : false
```

## Push 数组 push 方法

```js
type Push<T extends any[], U> = [...T, U]
```

## Unshift 数组的 unshift 方法

```js
type Unshift<T extends any[], U> = [U, ...T]
```

## Parameters 函数的参数类型

```js
type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer R) => any
  ? R
  : never
```

## ReturnType 函数返回类型

```js
type MyReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R
  ? R
  : never
```

## Omit 移除

```js
type MyOmit<T, K extends keyof any> = MyPick<T, MyExclude<keyof T, K>>
```

## DeepReadonly 深度只读

```js
type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends { [key: string]: any } ? DeepReadonly<T[P]> : T[P]
}
```

## TupleToUnion 元组转联合类型

```js
/* 使用 T[number] */
type TupleToUnion<T extends readonly any[]> = T[number]

/* 使用 infer R */
type TupleToUnion<T> = T extends Array<infer R> ? R : never
```

## Chainable 链式调用

```js
type Chainable<T> = {
  option<K extends string, V>(key: K, value: V): Chainable<Omit<T, K> & { [P in K]: V }>
  get(): T
}
```

## Last 数组的最后一个元素

```js
/* 使用 infer 占位实现 */
type Last<T extends any[]> = T extends [...infer Rest, infer L] ? L : never
```

## Pop 数组的 pop 方法

```js
type Pop<T extends any[]> = T extends [] ? [] : T extends [...infer Rest, infer L] ? Rest : never
```

## PromiseAll 获取 Promise.all 的返回值类型

```js
type MyAwaited<T> = T extends Promise<infer R> ? MyAwaited<R> : T

declare function PromiseAll<T extends any[]>(
  values: readonly [...T],
): Promise<{
  [K in keyof T]: MyAwaited<T[K]>
}>
```

## LookUp 查找

```js
type LookUp<U extends { type: string }, T extends string> = U extends { type: T } ? U : never
```

## TrimLeft TrimRight Trim

```js
type Space = ' ' | '\n' | '\t'

type TrimLeft<S extends string> = S extends `${Space}${infer R}` ? TrimLeft<R> : S

type TrimRight<S extends string> = S extends `${infer R}${Space}` ? TrimRight<R> : S

type Trim<S extends string> = S extends `${Space}${infer R}` | `${infer R}${Space}` ? Trim<R> : S
```

## Capitalize 首字母大写和 Uncapitalize 首字母小写

```js
type MyCapitalize<S extends string> = S extends `${infer L}${infer R}` ? `${Uppercase<L>}${R}` : S

type MyUncapitalize<S extends string> = S extends `${infer L}${infer R}` ? `${Lowercase<L>}${R}` : S
```

## Replace 替换

```js
type Replace<S extends string, From extends string, To extends string> = From extends ''
  ? S
  : S extends `${infer L}${From}${infer R}`
  ? `${L}${To}${R}`
  : S
```

## ReplaceAll 替换所有

```js
type ReplaceAll<S extends string, From extends string, To extends string> = From extends ''
  ? S
  : S extends `${infer L}${From}${infer R}`
  ? `${L}${To}${ReplaceAll<R, From, To>}`
  : S
```

## AppendArgument 追加参数

```js
type AppendArgument<Fn, A> = Fn extends (...args: infer Args) => infer T
  ? (...args: [...Args, A]) => T
  : never
```

## Permutation 全排列

```js
type Permutation<T, K = T> = [T] extends [never]
  ? []
  : T extends T
  ? [T, ...Permutation<Exclude<K, T>>]
  : never
```

## LengthOfString 字符串长度

```js
type LengthOfString<S extends string, T extends string[] = []> = S extends `${infer Char}${infer R}`
  ? LengthOfString<R, [...T, Char]>
  : T['length']
```

## Flatten 数组扁平化

```js
type Flatten<T extends any[]> = T extends [infer L, ...infer R]
  ? L extends any[]
    ? [...Flatten<L>, ...Flatten<R>]
    : [L, ...Flatten<R>]
  : []
```

## AppendToObject 给对象追加属性

```js
type AppendToObject<T, K extends keyof any, V> = {
  [P in keyof T | K]: P extends keyof T ? T[P] : V
}
```

## Absolute 绝对值

```js
type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer R}` ? R : `${T}`
```

## StringToUnion 字符串转联合类型

```js
type StringToUnion<T extends string> = T extends `${infer L}${infer R}`
  ? L | StringToUnion<R>
  : never
```

## Merge 合并对象

```js
type Merge<F, S> = {
  [P in keyof F | keyof S]: P extends keyof S ? S[P] : P extends keyof F ? F[P] : never
}
```

## KebabCase 驼峰转短横线

```js
type KebabCase<S extends string> = S extends `${infer L}${infer R}`
  ? R extends Uncapitalize<R>
    ? `${Uncapitalize<L>}${KebabCase<R>}`
    : `${Uncapitalize<L>}-${KebabCase<R>}`
  : S
```

## Diff 获取两个类型的差异属性

```js
type Diff<O1, O2> = Omit<O1 & O2, keyof O1 & keyof O2>
```

## AnyOf 数组元素真值判断

```js
type False = 0 | '' | false | undefined | null | [] | { [key: string]: never }
type AnyOf<T extends readonly any[]> = T[number] extends False ? false : true
```

## IsNever 是否是 Never 类型

```js
type IsNever<T> = [T] extends [never] ? true : false
```

## IsUnion 是否是联合类型

```js
type IsUnion<T, C = T> = (T extends T ? (C extends T ? true : unknown) : never) extends true
  ? false
  : true
```

## ReplaceKeys 类型替换

```js
type ReplaceKeys<U, T, Y> = {
  [P in keyof U]: P extends T ? (P extends keyof Y ? Y[P] : never) : U[P]
}
```

## RemoveIndexSignature 移除索引签名

```js
type RemoveIndexSignature<T> = {
  [K in keyof T as string extends K
    ? never
    : number extends K
    ? never
    : symbol extends K
    ? never
    : K]: T[K]
}
```

as 关键字可以用来重命名属性名称，这里将索引签名的属性名称重命名为 never，这样就可以移除索引签名

## PercentageParser 百分比解析

```js
type CheckPrefix<T extends string> = T extends '+' | '-' ? T : never
type CheckSuffix<T extends string> = T extends `${infer L}%` ? [L, '%'] : [T, '']
type PercentageParser<A extends string> = A extends `${CheckPrefix<infer L>}${infer R}`
  ? [L, ...CheckSuffix<R>]
  : ['', ...CheckSuffix<A>]
```
