# sass 简单语法

[playground](https://sass-lang.com/playground/)

## 插值

```
SCSS 社会保障体系 SYNTAX
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

> @at-root 猜测是把最内层选择器当做根，不要包括更上层?

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

