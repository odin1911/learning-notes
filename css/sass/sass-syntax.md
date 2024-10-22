# sass 简单语法

[playground](https://sass-lang.com/playground/)

## CSS 变量

```
$primary: #81899b;
$accent: #302e24;
$warn: #dfa612;

:root {
  --primary: #{$primary};
  --accent: #{$accent};
  --warn: #{$warn};

  // Even though this looks like a Sass variable, it's valid CSS so it's not
  // evaluated.
  --consumed-by-js: $primary;
}
```

> css 变量要用插值传递

## 父选择器

```
.alert {
  // The parent selector can be used to add pseudo-classes to the outer
  // selector.
  &:hover {
    font-weight: bold;
  }

  // It can also be used to style the outer selector in a certain context, such
  // as a body set to use a right-to-left language.
  [dir=rtl] & {
    margin-left: 0;
    margin-right: 10px;
  }

  // You can even use it as an argument to pseudo-class selectors.
  :not(&) {
    opacity: 0.8;
  }
}
```

```
.accordion {
  max-width: 600px;
  margin: 4rem auto;
  width: 90%;
  font-family: "Raleway", sans-serif;
  background: #f4f4f4;

  &__copy {
    display: none;
    padding: 1rem 1.5rem 2rem 1.5rem;
    color: gray;
    line-height: 1.6;
    font-size: 14px;
    font-weight: 500;

    &--open {
      display: block;
    }
  }
}
```

## 占位符选择器

```
.alert:hover, %strong-alert {
  font-weight: bold;
}

%strong-alert:hover {
  color: red;
}
```

```
%toolbelt {
  box-sizing: border-box;
  border-top: 1px rgba(#000, .12) solid;
  padding: 16px 0;
  width: 100%;

  &:hover { border: 2px rgba(#000, .5) solid; }
}

.action-buttons {
  @extend %toolbelt;
  color: #4285f4;
}

.reset-buttons {
  @extend %toolbelt;
  color: #cddc39;
}
```

## 变量

> Sass 变量一次只能有一个值
> Sass 变量是命令式的，这意味着如果您使用变量然后更改其值，则先前的使用将保持不变。

```
$variable: value 1;
.rule-1 {
  value: $variable;
}

$variable: value 2;
.rule-2 {
  value: $variable;
}
```

> Sass 提供了 !default 标志。仅当该变量未定义或其值为 null 时，才会为该变量赋值。
> @use <url> with (<variable>: <value>, <variable>: <value>) 。配置的值将覆盖变量的默认值。只能配置在样式表顶层带有 !default 标志编写的变量。

```
// _library.scss
$black: #000 !default;
$border-radius: 0.25rem !default;
$box-shadow: 0 0.5rem 1rem rgba($black, 0.15) !default;

code {
  border-radius: $border-radius;
  box-shadow: $box-shadow;
}
```

```
// style.scss
@use 'library' with (
  $black: #222,
  $border-radius: 0.1rem
);
```

> !global 标志。标记为 !global 的变量声明将始终分配给全局范围。
> !global 标志只能用于设置已在文件顶层声明的变量。它不能用于声明新变量。
> 流控制作用域中的变量可以分配给外部作用域中的现有变量，但在流控制作用域中声明的新变量将无法在外部作用域中访问。确保在分配变量之前已经声明该变量，即使您需要将其声明为 null 。

## 处理变量的高级函数

> meta.variable-exists() 函数返回给定名称的变量是否存在于当前作用域中，
> meta.global-variable-exists() 函数执行相同的操作，但仅适用于全局作用域。

> 有时希望使用插值来根据另一个变量定义变量名称。 Sass 不允许这样做。
> 可以定义一个从名称到值的映射，然后您可以使用变量访问该映射。

```
@use "sass:map";

$theme-colors: (
  "success": #28a745,
  "info": #17a2b8,
  "warning": #ffc107,
);

.alert {
  // Instead of $theme-color-#{warning}
  background-color: map.get($theme-colors, "warning");
}
```

## 插值  #{}

```
@mixin prefix($property, $value, $prefixes) {
  @each $prefix in $prefixes {
    -#{$prefix}-#{$property}: $value;
  }
  #{$property}: $value;
}

.gray {
  @include prefix(filter, grayscale(50%), moz webkit);
}
```

```
@mixin corner-icon($name, $top-or-bottom, $left-or-right) {
  .icon-#{$name} {
    background-image: url("/icons/#{$name}.svg");
    position: absolute;
    #{$top-or-bottom}: 0;
    #{$left-or-right}: 0;
  }
}

@include corner-icon("mail", top, left);
```

## @use

> @use 加载的样式表称为“模块”

```
// 在给定的 URL 加载模块
@use "<url>"

// 别名
@use "<url>" as <namespace>

// 加载没有命名空间的模块，可能会引入新成员，导致姓名冲突！
@use "<url>" as *

// 配置的值将覆盖变量的默认值。
@use <url> with (<variable>: <value>, <variable>: <value>) 
```

> 您可以通过编写 <namespace>.<variable> 、 <namespace>.<function>() 或 @include <namespace>.<mixin>() 从另一个模块访问变量、函数和 mixin。

```
// src/_corners.scss
$radius: 3px;

@mixin rounded {
  border-radius: $radius;
}
```

```
// style.scss
@use "src/corners";

.button {
  @include corners.rounded;
  padding: 5px + corners.$radius;
}
```

> 通过以 - 或 _ 开头的名称来定义私有成员。

```
$-radius: 3px;

@mixin rounded {
  border-radius: $-radius;
}
```

> 加载模块后，您可以重新分配其变量。

```
// _library.scss
$color: red;
```

```
// _override.scss
@use 'library';
library.$color: blue;
```

> 内置模块变量（例如 math.$pi ）无法重新分配。

## @forward

用于跨多个文件组织 Sass 库，同时允许其用户加载单个入口点文件。

```
// src/_list.scss
@mixin list-reset {
  margin: 0;
  padding: 0;
  list-style: none;
}
```

```
// bootstrap.scss
@forward "src/list";
```

```
// styles.scss
@use "bootstrap";

li {
  @include bootstrap.list-reset;
}
```

> 添加前缀

```
// src/_list.scss
@mixin reset {
  margin: 0;
  padding: 0;
  list-style: none;
}
```

```
// bootstrap.scss
@forward "src/list" as list-*;
```

```
// styles.scss
@use "bootstrap";

li {
  @include bootstrap.list-reset;
}
```

> 可以通过编写 @forward "<url>" hide <members...> 或 @forward "<url>" show <members...> 来准确控制转发哪些成员。

```
// src/_list.scss
$horizontal-list-gap: 2em;

@mixin list-reset {
  margin: 0;
  padding: 0;
  list-style: none;
}

@mixin list-horizontal {
  @include list-reset;

  li {
    display: inline-block;
    margin: {
      left: -2px;
      right: $horizontal-list-gap;
    }
  }
}
```

```
// bootstrap.scss
@forward "src/list" hide list-reset, $horizontal-list-gap;
```

> @forward 规则还可以加载具有配置的模块。这通常与 相同 @use ，但增加了一个： @forward 规则的配置可以在其配置中使用 !default 标志。这允许模块更改上游样式表的默认值，同时仍允许下游样式表覆盖它们。

```
// _library.scss
$black: #000 !default;
$border-radius: 0.25rem !default;
$box-shadow: 0 0.5rem 1rem rgba($black, 0.15) !default;

code {
  border-radius: $border-radius;
  box-shadow: $box-shadow;
}
```

```
// _opinionated.scss
@forward 'library' with (
  $black: #222 !default,
  $border-radius: 0.1rem !default
);
```

```
// style.scss
@use 'opinionated' with ($black: #333);
```

## @import

Sass 团队不鼓励继续使用该 @import 规则。Sass将在未来几年内逐步淘汰它，并最终将其从语言中完全删除。相反， @use 更喜欢规则。（请注意，目前只有 Dart Sass 支持 @use 。其他实现的用户必须改用该 @import 规则。

## @mixin

```
@mixin reset-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

@mixin horizontal-list {
  @include reset-list;

  li {
    display: inline-block;
    margin: {
      left: -2px;
      right: 2em;
    }
  }
}

nav ul {
  @include horizontal-list;
}
```

> 参数

```
@mixin rtl($property, $ltr-value, $rtl-value) {
  #{$property}: $ltr-value;

  [dir=rtl] & {
    #{$property}: $rtl-value;
  }
}

.sidebar {
  @include rtl(float, left, right);
}
```

> 可选参数

```
@mixin replace-text($image, $x: 50%, $y: 50%) {
  text-indent: -99999em;
  overflow: hidden;
  text-align: left;

  background: {
    image: $image;
    repeat: no-repeat;
    position: $x $y;
  }
}

.mail-icon {
  @include replace-text(url("/images/mail.svg"), 0);
}
```

> 受任意数量的参数

```
@mixin order($height, $selectors...) {
  @for $i from 0 to length($selectors) {
    #{nth($selectors, $i + 1)} {
      position: absolute;
      height: $height;
      margin-top: $i * $height;
    }
  }
}

@include order(150px, "input.name", "input.address", "input.zip");
```

> 任意关键字参数

```
@use "sass:meta";

@mixin syntax-colors($args...) {
  @debug meta.keywords($args);
  // (string: #080, comment: #800, variable: #60b)

  @each $name, $color in meta.keywords($args) {
    pre span.stx-#{$name} {
      color: $color;
    }
  }
}

@include syntax-colors(
  $string: #080,
  $comment: #800,
  $variable: #60b,
)
```

> 内容块

```
@mixin hover {
  &:not([disabled]):hover {
    @content;
  }
}

.button {
  border: 1px solid black;
  @include hover {
    border-width: 2px;
  }
}
```

## @mixin 和 @include 缩写

@mixin 缩写 =
@include 缩写 +

```
=reset-list
  margin: 0
  padding: 0
  list-style: none

=horizontal-list
  +reset-list

  li
    display: inline-block
    margin:
      left: -2px
      right: 2em

nav ul
  +horizontal-list
```

## @function @return

```
@function pow($base, $exponent) {
  $result: 1;
  @for $_ from 1 through $exponent {
    $result: $result * $base;
  }
  @return $result;
}

.sidebar {
  float: left;
  margin-left: pow(4, 3) * 1px;
}
```

> 推荐：使用mixins来产生副作用，并使用函数来计算值。
> 参数基本同@minix

## @extend

告诉 Sass 一个选择器应该继承另一个选择器的样式。

```
.error {
  border: 1px #f00;
  background-color: #fdd;

  &--serious {
    @extend .error;
    border-width: 3px;
  }
}

```

> 选择器

```
.error:hover {
  background-color: #fee;
}

.error--serious {
  @extend .error;
  border-width: 3px;
}
```

## 占位符选择器

```
.alert:hover, %strong-alert {
  font-weight: bold;
}

%strong-alert:hover {
  color: red;
}
```

## @at-root

放弃当前的嵌套层级

## 2023-09-07
