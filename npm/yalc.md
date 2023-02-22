# yalc

npm link 替代方案

[home](https://github.com/wclr/yalc)

## refs

<https://segmentfault.com/a/1190000039658156>

## usage

```
<!-- install -->
npm i yalc -g
```

在库项目中

```
<!-- cd package -->
yalc publish
<!-- publish without running scripts -->
yalc publish --no-scripts

<!-- publish your package to the store and propagate all changes to existing yalc package installations -->
yalc publish --push 
yalc push
```

在目标项目中

```
<!-- at project -->
yalc add [my-package]
yalc add [my-package@version]

<!-- updata -->
yalc update
yalc update [my-package]

<!-- remove -->
yalc remove [my-package]
yalc remove --all
```

```
<!-- repository -->
yalc installations show
yalc installations clean [my-package]
```

## 2023-02-14

在bio-iframe使用时，发生query-string找不到的问题，后续关注一下目前的可用性
