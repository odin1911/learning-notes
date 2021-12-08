# react-spring

date: 2021-12-07

一个 react 动画库

## basics

> Do not think of the values you pass as "styles" per se

不要将值理解成样式

### View interpolation

插值方法：to

```javascript
{
  // If you can, use plain animated values like always, ...
  // You would do that in all cases where values "just fit"
  color,
  // Unless you need to interpolate them
  background: o.to(o => `rgba(210, 57, 77, ${o})`),
  // Which works with arrays as well
  transform: xyz.to((x, y, z) => `translate3d(${x}px, ${y}px, ${z}px)`),
  // If you want to combine multiple values use the "interpolate" helper
  border: to([o, color], (o, c) => `${o * 10}px solid ${c}`),
  // You can also form ranges, even chain multiple interpolations
  padding: o
    .to({ range: [0, 0.5, 1], output: [0, 0, 10] })
    .to(o => `${o}%`),
  // Interpolating strings (like up-front) through ranges is allowed ...
  borderColor: o.to({ range: [0, 1], output: ['red', '#ffaabb'] }),
  // There's also a shortcut for plain, optionless ranges ...
  opacity: o.to([0.1, 0.2, 0.6, 1], [1, 0.1, 0.5, 1]),
}
```

### 支持 deps

### 使用 forwardRef 要注意

> This means that if you use forwardRef on a component wrapped with animated and then pass that ref onto a DOM node, animated will treat that component as though it were a DOM node itself, and will stop triggering React updates to interpolate when the animated props change.

使用 forwardRef 会阻止触发 react 更新

要将 ref 做为常规属性传递

```javascript
const AnimatedComponent = animated(({ value, forwardedRef }) => (
  <div ref={forwardedRef}>{value}</div>
));

const AnimatedComponentWithRefForwarding = useRef((props, ref) => (
  <AnimatedComponent {...props} forwardedRef={ref} />
));
```

## API

### Common

#### Props

Default props 部分没有看懂，只了解到有个显示的 default 属性可定义默认值

#### Configs

提供一些可配置值，但是没有感觉到明显区别

提供了几个预设值

#### Imperatives & Refs

说明了一下和上个版本的不同，以及 API object 的结构

介绍了 useSpringRef

#### Interpolations

介绍 value.to 方法

### Hooks

#### useChain

顺序执行，可以指定每个动画的时间

timeSteps 和 timeFrame 没有详细说明

#### useSpring

处理值变化

#### useSprings

创建多个 spring，每个有自己的配置

#### useTrail

创建多个 spring，用 1 个配置

#### useTransition

> An animated TransitionGroup. Feed it your items and lifecycles. Whenever items are added or removed, it will animate these changes.

一个变化组，需要传入你自己的 items（一般是个数据 Array） 和 lifecycles（enter/leave）

通过 useTransition 来定义一组 animated-values ，enter/leave 里的属性值不要理解成样式（在例子中的起名容易误解）

通过 useTransition 返回的 transitions 方法接收一个 callback，这个 callback 接收 4 个参数

第一个参数是当前 lifecycles 下定义的值

第二个参数是调用 useTransition 传入的 items 项（如果 items 不是 Array，则是 items 本身）

callback 返回一个 animated.div 之类的 Element

### Render Props

#### Parallax

滚动区，目前不会用到，没看

#### Spring

与 useSpring 一样，当组件用

#### SpringContext

Context，只对`useSpring`和`<Spring>`有影响，支持：

- cancel?: boolean
- config?: SpringConfig (see configs for more information)
- immediate?: boolean
- pause?: boolean

#### Trail

同 useTrail

#### Transition

同 useTransition

### Additional Classes

#### Controller

The Controller is react-spring's heart.

提供对动画的完全控制

#### SpringValue

Create an animated value.

The animatable types are:

- number
- string
- named colors
- and arrays of the preceding types

## 2021-12-08

动画不是基于时间的，和传统动画库不一样，config 有提供 duration 项，没尝试

更新是脱离开 react 更新机制的，这个可以深入了解一下，是基于 requestAnimationFrame 的？
