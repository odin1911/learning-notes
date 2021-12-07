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

一个变化组，需要传入你自己的 items 和 lifecycles
