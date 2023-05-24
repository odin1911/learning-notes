# svg基础

## 绘制一个播放图标

```
<body>
    <svg>
        <circle cx="50" cy="50" r="50"  fill="lightblue"/>
        <line x1="35" y1="30" x2="35" y2="70" stroke-width="5" stroke="white"></line>
        <line x1="65" y1="30" x2="65" y2="70" stroke-width="5" stroke="white"></line>
    </svg>
</body>
```

首先，使用`<circle>`标签绘制播放图标浅蓝色的背景，然后用`<line>`绘制两条竖线。

下面是一些值得注意的点：

svg元素的一个显示规则是 “后来居上”（当图形坐标重叠，写在后面的标签的图形会显示在更上层），所以`<line>`标签绘制白色线段会显示在`<circle>`标签的蓝色圆形上面。

在 svg 中，你可以指定值的单位，也可以不指定值的单位。如果不指定值的单位，则默认使用像素 (px) 作为单位。

`<svg>` 元素可以通过 width 和 height设置宽高，如不设置，默认是 300px * 150px，上面的蓝色边框区域。

## svg中的坐标

```
<circle cx="50" cy="50" r="50"  fill="lightblue"/>
```

在上面这行代码中，我们知道圆心的位置坐标是（50,50），圆半径是50。
而坐标原点，是svg标签的左上角。

## 如果图形的坐标超过svg的宽高

```
<svg height="100" width="100">
    <circle cx="60" cy="60" r="50"  fill="lightblue"/>
</svg>
```

如上所示，如果图形的坐标超过svg的宽高，那么超出部分会被裁切，不会显示。

我们可以把svg的绘制和显示分成两个部分：画布和可见区域。
画布可以看成是一个大大的二维平面（甚至可以是无限大的），以`<svg>`元素的左上角为原点，在这个平面上的图形（如上面例子中的circle、line）可以将坐标定位在平面的任意位置。
而可见区域，在这个例子中，是`<svg>`元素宽高（height和width属性）限制的区域，只有这个区域内的图形才会被显示出来。

## 一次绘制，自适应多种容器大小

我们知道想要让图形完全显示，就必须让图形每一点的坐标都处在可见区域内。
但是，我们更常见的需求是，绘制好一个图标后，在多个地方使用，A页面、B页面、C页面...

每次使用图标的尺寸可能都不同，也就是`<svg>`元素的宽高有不同的值。这时，怎样保证图形完全显示呢？从另一方面，作为矢量图，通过`<svg>`绘制的图标的最大优点之一，就是它可伸缩。

## viewBox

这就需要用到`<svg>`元素的viewBox属性了。它规定了新的可见区域规则。

我们先来看使用：

```
<svg height="120" width="120" viewBox="0 0 100 100"> 
  <circle cx="50" cy="50" r="50"  fill="lightblue"/>
</svg>
<svg height="80" width="80" viewBox="0 0 100 100"> 
  <circle cx="50" cy="50" r="50"  fill="lightblue"/>
</svg>
<svg height="50" width="50" viewBox="0 0 100 100"> 
   <circle cx="50" cy="50" r="50"  fill="lightblue"/>
</svg>
```

viewBox属性有四个值:

```
viewBox="x, y, width, height"  
// x:左上角横坐标，y:左上角纵坐标，width:宽度，height:高度
```

设置了viewBox属性的`<svg>`元素是“更加智能”的，它对画布表示，我的宽高你不用管了，我现在告诉你一块区域，在这个区域内的图形我将完全显示，这块区域就是：左上角坐标（x,y），往右走width，往下走height。这块矩形区域会铺满我的宽高（先这么理解吧），你就在它里面绘图！

viewBox="0 0 100 100"表示画布中x方向0~100， y方向0~100这个矩形区域成为“新的可见区域”，里面的图形会完全显示。

不管`<svg>`元素的宽高是多少，都会把“新的可见区域”中的内容映射到`<svg>`元素中，映射有一些规则，下面我们再详细了解，这个案例是比较简单的等比缩放，把“新的可见区域”放大或缩小，铺满`<svg>`元素。
可以类比qq截图，整个画布是原图片，“新的可见区域”是截图选中的范围，`<svg>`元素是截好的图要粘贴到的地方。

没有设置viewBox属性的`<svg>`元素，它的viewBox属性默认值就是：

```
viewBox="0, 0, width of svg, height of svg"
```

viewBox属性的左上角坐标（x、y）也可以不是（0，0），比如：

```
<svg height="120" width="120" viewBox="10 10 100 100"> 
   <circle cx="50" cy="50" r="50"  fill="lightblue"/>
</svg>
```

这时，画布中x方向0~10， y方向0~10这个区域中不是可见区域，其中的图形就不会显示。

### preserveAspectRatio

除上面的等比缩放之外，另一种常见的情形是viewBox属性的width, height的比例，与`<svg>`元素的width, height的比例不一样。
假如有这样一个需求，A页面需要你绘制一个正方形的购物车图标（w:h=1:1），B页面的购物车图标是扁一点的（w:h=5:4），其他都一样。这时就需要对svg图标进行拉伸了，并且长宽的拉伸比还不同，非等比伸缩。

案例：

```
<svg height="100" width="100" viewBox="0 0 100 100"> 
   <circle cx="50" cy="50" r="50"  fill="lightblue"/>
</svg>
<svg height="50" width="100" viewBox="0 0 100 100">  
   <circle cx="50" cy="50" r="50"  fill="lightblue"/>
</svg>
```

默认情况下，当viewBox属性的width/height，与`<svg>`元素的width/height不一样时，会保持viewBox区域的长宽比，然后viewBox区域去适应`<svg>`元素，和短边方向（height）重合，长边方向（width）位于中央。

这是由preserveAspectRatio属性决定的。

preserveAspectRatio是`<svg>`元素的属性，但作用的对象是viewBox。

```
//默认值是preserveAspectRatio="xMidYMid meet"
<svg height="50" width="100" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">  
   <circle cx="50" cy="50" r="50"  fill="lightblue"/>
</svg>
```

它的值为空格分隔的两个值组合而成。第1个值表示，viewBox如何与`<svg>`元素对齐；第2个值表示，如何维持高宽比。

先来看第2个值。有三种情况：meet、slice、none。

meet：保持viewBox区域的长宽比，缩小viewBox区域，使其全部在`<svg>`元素内，缩小的比例取值是：长宽两个方向伸缩比例中的最小值（下面例子中：50/100 vs 120/100，取50/100）。

slice：保持viewBox区域的长宽比，放大viewBox区域，填满`<svg>`元素，放大的比例取值是：长宽两个方向伸缩比例中的最大值（下面例子中：50/100 vs 120/100，取120/100）。但是超出`<svg>`元素的部分会被裁剪。

none：不保持viewBox区域的长宽比，viewBox区域和`<svg>`元素完全重叠。

示例如下：

```
<svg height="100" width="100" viewBox="0 0 100 100"> 
   <circle cx="50" cy="50" r="50"  fill="lightblue"/>
</svg>
<svg height="50" width="120" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">  
   <circle cx="50" cy="50" r="50"  fill="lightblue"/>
</svg>
<svg height="50" width="120" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">  
   <circle cx="50" cy="50" r="50"  fill="lightblue"/>
</svg>
<svg height="50" width="120" viewBox="0 0 100 100" preserveAspectRatio="none">  
   <circle cx="50" cy="50" r="50"  fill="lightblue"/>
</svg>
```

再来看第一个值：xMidYMid。它定义viewBox区域相对`<svg>`元素的位置。在x、y方向分别有（Min、Mid、Max）三种情况。以x方向为例，分别是左端对齐，中间对齐，右端对齐。

当preserveAspectRatio="none"时，不用设置相对位置。官方文档中，把"none"作为preserveAspectRatio的第一个值。我们上面把它作为第二个值，只是帮助理解。

问题：A页面需要你绘制一个正方形的购物车图标（w:h=1:1），B页面的购物车图标是扁一点的（w:h=5:4）

回答：绘制图标时，设置viewBox和preserveAspectRatio="none"，使用时，根据需要设置svg的宽高。

## 图标颜色自适应

我们上面绘制的播放图标是蓝色的，如果换个页面需要橙色的，我们不希望改svg绘制的代码，图标的颜色怎样由外部来控制呢？

将需要动态改变的颜色设置为currentColor，在使用svg图标时，颜色就会从父元素继承。

```
<svg height="50" width="50" style="color: rgb(210, 105, 30);"  viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="50"  fill="currentColor"/>
    <line x1="35" y1="30" x2="35" y2="70" stroke-width="5" stroke="white"></line>
    <line x1="65" y1="30" x2="65" y2="70" stroke-width="5" stroke="white"></line>
</svg>

<svg height="50" width="50" style="color: rgb(210, 30, 114);" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="50"  fill="currentColor"/>
    <line x1="35" y1="30" x2="35" y2="70" stroke-width="5" stroke="white"></line>
    <line x1="65" y1="30" x2="65" y2="70" stroke-width="5" stroke="white"></line>
</svg>

<svg height="50" width="50" style="color: rgb(30, 210, 84);" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="50"  fill="currentColor"/>
    <line x1="35" y1="30" x2="35" y2="70" stroke-width="5" stroke="white"></line>
    <line x1="65" y1="30" x2="65" y2="70" stroke-width="5" stroke="white"></line>
</svg>
```

## svg组件封装

我们上面使用图标都是复制粘贴svg绘制代码，这是低效的，并且不优雅。接下来我们把图标进行组件封装，以便一次定义，多处引用。所幸，svg有一系列内置标签支持组件化。

### `<use>`

```
<svg>     
   <line id="ALine" x1="35" y1="30" x2="35" y2="70" stroke-width="5" stroke="coral"></line>
</svg>
<svg>
   <use href="#ALine"></use>
</svg>
<svg>
   <use href="#ALine"></use>
</svg>
```

我们用line标签绘制了一条直线，如果我们想在其他地方绘制相同的直线，就可以为line标签指定一个id。而在需要使用的地方，通过`<use>`标签设置href属性为之前定义的id即可。

`<use>`是svg的内置标签，它能获取href属性指向的目标节点，并在别的地方复制它们。

它的效果等同于这些节点被深克隆到一个不可见的DOM中，然后将其粘贴到use标签的位置，很像HTML5中的克隆模板元素。

### `<g>`

一个图标的绘制往往需要不止一个标签。这时怎么指定id呢？
我们可以将所有标签放到一个group中，然后给这个group加id。
绘制多种颜色的播放图标，代码就可以简化成下面这样：

```
<svg>
   <g id="play">
        <circle cx="50" cy="50" r="50"  fill="currentColor"/>
        <line x1="35" y1="30" x2="35" y2="70" stroke-width="5" stroke="white"></line>
        <line x1="65" y1="30" x2="65" y2="70" stroke-width="5" stroke="white"></line>
    </g>
</svg>
<svg style="color: rgb(210, 105, 30);">
    <use href="#play"></use>
</svg>
<svg style="color: rgb(210, 30, 114);">
    <use href="#play"></use>
</svg>
<svg style="color: rgb(30, 210, 84);">
    <use href="#play"></use>
</svg>
```

第一个黑色按钮主要作用是定义组件，我们并不希望它页面中出现。我们可以修改它的css属性使其隐藏，但更推荐使用`<defs>`标签。

### `<defs>`

svg 允许我们定义以后需要重复使用的图形元素。 建议把所有需要再次使用的引用元素定义在`<defs>`标签里面。这样做可以增加 svg 内容的易读性和可访问性。 在`<defs>`标签中定义的图形元素不会直接呈现。 你可以在你的视口的任意地方利用 `<use>`标签呈现这些元素。

```
<svg> 
   <defs>
       <g id="play">
            <circle cx="50" cy="50" r="50"  fill="currentColor"/>
            <line x1="35" y1="30" x2="35" y2="70" stroke-width="5" stroke="white"></line>
            <line x1="65" y1="30" x2="65" y2="70" stroke-width="5" stroke="white"></line>
        </g>
    </defs>
</svg> 
<svg style="color: rgb(210, 105, 30);">
    <use href="#play"></use>
</svg>
<svg style="color: rgb(210, 30, 114);">
    <use href="#play"></use>
</svg>
<svg style="color: rgb(30, 210, 84);">
    <use href="#play"></use>
</svg>
```

`<defs>`中的图标不显示了，但svg还在。我们可以修改svg的css属性使其隐藏，或者尺寸置为0。

```
<svg width="0" height="0"> 
   <defs>
        <g id="play">
            <circle cx="50" cy="50" r="50"  fill="currentColor"/>
            <line x1="35" y1="30" x2="35" y2="70" stroke-width="5" stroke="white"></line>
            <line x1="65" y1="30" x2="65" y2="70" stroke-width="5" stroke="white"></line>
        </g>
    </defs>
</svg>
```

### `<symbol>`

为了使图标自适应容器大小，我们使用viewBox属性。

```
<svg width="0" height="0" viewBox="0 0 100 100"> 
   <defs>
       <g id="play">
            <circle cx="50" cy="50" r="50"  fill="currentColor"/>
            <line x1="35" y1="30" x2="35" y2="70" stroke-width="5" stroke="white"></line>
            <line x1="65" y1="30" x2="65" y2="70" stroke-width="5" stroke="white"></line>
       </g>
   </defs>
</svg>
```

第一直觉是在定义组件的svg标签上使用viewBox属性，但它不起作用。

```
<svg height="50" width="50" style="color: rgb(210, 105, 30);">
    <use href="#play"></use>
</svg>
<svg height="100" width="100" style="color: rgb(210, 30, 114);">
    <use href="#play"></use>
</svg>
<svg height="200" width="200" style="color: rgb(30, 210, 84);">
    <use href="#play"></use>
</svg>
```

`<use>`能获取href属性指向的目标节点，并在别的地方复制它们。它并没有复制定义组件外层的svg标签。

这种情况下，就要用到symbol了。

symbol元素用来定义一个图形模板对象，它可以用一个use元素实例化。symbol元素对图形的作用是在同一文档中多次使用，添加结构和语义。结构丰富的文档可以更生动地呈现出来，类似讲演稿或盲文，从而提升了可访问性。注意，一个symbol元素本身是不呈现的（类似defs）。只有symbol元素的实例（亦即，一个引用了symbol的use元素）才能呈现。

最重要的是，在`<symbol>`标签上，可以定义viewBox和preserveAspectRatio两个属性，完美解决了图标组件自适应的问题。

```
<svg width="0" height="0"> 
    <symbol id="play" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="50"  fill="currentColor"/>
        <line x1="35" y1="30" x2="35" y2="70" stroke-width="5" stroke="white"></line>
        <line x1="65" y1="30" x2="65" y2="70" stroke-width="5" stroke="white"></line>
    </symbol>
</svg>
<svg height="50" width="50" style="color: rgb(210, 105, 30);">
    <use href="#play"></use>
</svg>
<svg height="100" width="100" style="color: rgb(210, 30, 114);">
    <use href="#play"></use>
</svg>
<svg height="200" width="200" style="color: rgb(30, 210, 84);">
    <use href="#play"></use>
</svg>
```
