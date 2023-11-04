# 网站导行条开发

在开发官网过程中接触了一些导行需要，做一些记录

## 滚动监控

根据页面滚动位置，更新导行元素

### gumshoe

<https://github.com/cferdinandi/gumshoe/blob/master/src/js/gumshoe/gumshoe.js>

gumshoe是一个滚动监控库

只能适用于原始的锚点跳转场景，

样式是加到`li`元素上的

### 原理

根据构造函数中传入的selector抓取全部导行元素，再根据导行元素的hash属性与content一一绑定

利用scroll和resize事件触发detect方法来检测当前激活的元素，设置相应样式

```js
// 判断是否在可视区
var isInView = function (elem, settings, bottom) {
  var bounds = elem.getBoundingClientRect();
  var offset = getOffset(settings);
  if (bottom) {
    return parseInt(bounds.bottom, 10) < (window.innerHeight || document.documentElement.clientHeight);
  }
  return parseInt(bounds.top, 10) <= offset;
};
```

### 其他

有个IntersectionObserver方案，不考虑兼容可以看一下

<https://www.zhangxinxu.com/wordpress/2020/12/js-intersectionobserver-nav/>

## 使用reactrouter模拟锚点

使用v6版本

使用NavLink显示样式，根据pathname分析滚动位置，利用scrollIntoView实现滚动

```js
// router
export function Router() {
  let element = useRoutes([
    {
      element: <Layout />,
      children: [
        { index: true, element: <Navigate to={'/home'} /> },
        { path: '/home', element: <Home /> },
        { path: '/knowledge/*', element: <Knowledge /> },
        { path: '/tool/*', element: <Tool /> },
        { path: '/about', element: <About /> },
        { path: '/join', element: <Join /> },
        {
          path: '*',
          element: <Navigate to={'/home'} />,
        },
      ],
    },
  ]);

  return element;
}
```

```js
// navigation
<NavLink
  is-top="true"
  to={item.href}
  className={({ isActive }) => {
    return isActive ? 'is-top is-active' : 'is-top';
  }}
  {...other}
>
  {item.text}
</NavLink>
```

```js
// hook
export function useScrollToAnchor() {
  const { pathname } = useLocation();
  const $isFirstScroll = useRef<boolean>(true);

  useEffect(() => {
    const smooth = !$isFirstScroll.current;
    const id = pathname.split('/')[2];
    if (id) {
      // pathname中的子路径视作锚点
      const ele = document.getElementById(id);
      if (ele) {
        const top = (ele as HTMLElement).offsetTop - 100;
        scrollTo(top, smooth);
      }
    } else {
      scrollToTop(smooth);
    }
    $isFirstScroll.current = false;
  }, [pathname]);
}

export function scrollTo(pos: number, smooth: boolean = false) {
  if (smooth) {
    window.scrollTo({
      top: pos,
      behavior: 'smooth',
    });
  } else {
    document.documentElement.scrollTop = pos;
  }
}

export function scrollToTop(smooth: boolean = false) {
  scrollTo(0, smooth);
}
```
