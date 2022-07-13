# react-router 6

一共有三个包：react-router、react-router-dom和react-router-native

## Router

NavigationContext 和 LocationContext，存储全局的路由导航对象以及导航位置的上下文

三个 hooks：useInRouterContext、useNavigationType与useLocation

高阶路由其实就是将history库与我们声明的Router组件绑定起来，当history.listen监听到路由改变后重新设置当前的location与action

## Route

Route 不能够被渲染，只会被Routes接受并解析

定义三种props类型：路径路由、布局路由和索引路由

[布局路由](https://reactrouter.com/docs/en/v6/getting-started/concepts#layout-routes)

> 布局路由在 useRoutes 里能用吗？应该可以，因为 Route 经 Routes 转换成 useRoutes 的配置参数

## Routes

用于在内部解析传入Route的props，将children转换为了useRoutes的配置参数

## useRoutes

RouteContext，它存储了两个属性：outlet与matches

useRoutes是整个react-router v6的核心所在，内部包含了大量的解析与匹配逻辑。

整个流程对应三个阶段：路由上下文解析阶段，路由匹配阶段，路由渲染阶段。

细节再看

## Outlet

Outlet 中可以传入上下文信息，在子路由中使用 useOutletContext 获取。

```javascript
import { Outlet, useOutlet, useOutletContext } from 'react-router';

function Parent() {
  const [count, setCount] = React.useState(0);
  // 下面两种方式等同
  // const outlet = useOutlet([count, setCount])
  return <Outlet context={[count, setCount]} />;
}

// 在子路由中获取传入的上下文信息
function Child() {
  const [count, setCount] = useOutletContext();
  const increment = () => setCount(c => c + 1);
  return <button onClick={increment}>{count}</button>;
}
```

内部实际就是渲染RouteContext中的outlet属性。

## Navigate

内部使用 history 的 navigator 跳转

可以使用相对路径

## refs

[React-Router v6 完全解读指南 - react-router 篇](https://juejin.cn/post/7067436563457638413)
