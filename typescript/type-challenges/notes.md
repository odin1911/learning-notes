# 类型笔记

[Ts高手篇：22个示例深入讲解Ts最晦涩难懂的高级类型工具深入讲解Typescript高级类型工具实现原理和编程技巧。全 - 掘金](https://juejin.cn/post/6994102811218673700?utm_source=gold_browser_extension#heading-8)

keyof T的结果为该类型上所有公有属性key的联合
T[keyof T]的方式，可以获取到T所有key的类型组成的联合类型
T[keyof K]的方式，获取到的是T中的key且同时存在于K时的类型组成的联合类型

extends
如果用于简单的条件判断，则是直接判断前面的类型是否可分配给后面的类型
若extends前面的类型是泛型，且泛型传入的是联合类型时，则会依次判断该联合类型的所有子类型是否可分配给extends后面的类型（是一个分发的过程）。

子类型比父类型更加具体,父类型比子类型更宽泛

只看了基础部分

[TypeScript 类型体操 | 茂茂物语](https://notes.fe-mm.com/fe/typescript/challenges)
这有比较详细的分解

K extends keyof T 表示 K 是 keyof T 的子类型
P in K 遍历类型 K 拿到具体属性键
