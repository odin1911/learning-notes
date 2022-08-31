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

```
<!-- cd package -->
yalc publish
<!-- publish without running scripts -->
yalc publish --no-scripts

<!-- publish your package to the store and propagate all changes to existing yalc package installations -->
yalc publish --push 
yalc push
```

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