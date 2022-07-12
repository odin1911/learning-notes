# history library

一个最基础的history对象包含：

- 两个属性：当前路由对应的跳转行为（action）与导航对象（location）
- createHref用于用户将history内部定义的Path对象转换为原始的 url
- 五个路由跳转方法：push、replace、go、back与forward用于在路由栈中进行路由跳转。
- 两个路由监听方法：监听路由跳转的钩子（类似后置守卫）listen与阻止路由跳转的钩子（如果想正常跳转必须要取消监听，可以封装成类似前置钩子的功能）block。

## refs

[github](https://github.com/remix-run/history)

[React-Router v6 完全解读指南 - history 篇](https://juejin.cn/post/7065599937265795109)
