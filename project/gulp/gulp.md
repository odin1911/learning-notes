# gulp

2022-09-30

使用 gulp 过程中遇到 del@7 只支持 esm 了，记录一下迁移 esm 迁移过程。

1. 降到v6
2. 使用.mjs

gulp 英文文档有关于使用 .esm.js 来处理的方案，部分页面还在重写中

## refs

<https://stackoverflow.com/questions/69862766/getting-error-err-require-esm-while-running-gulp-command>

<https://gist.github.com/noraj/007a943dc781dc8dd3198a29205bae04>
