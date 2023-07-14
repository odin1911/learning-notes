# 下载csv

## refs

[参考1](https://www.cnblogs.com/liangping/p/12041015.html)

[参考2](https://www.jianshu.com/p/cc36ee9ab95e)

## 实现方案

[json2csv](https://github.com/juanjoDiaz/json2csv)

[node-csv](https://github.com/adaltas/node-csv)（未测试）

## codes

```js
import { Parser } from '@json2csv/plainjs';

// 生成csv
const parser = new Parser({});
const csv = parser.parse(data)
console.log('csv', csv);

// '\uFEFF'是给csv加BOM
const blob = new Blob(['\uFEFF' + csv], {
  type: 'text/plaincharset=utf-8'
})
FileSaver.saveAs(blob, fileName)
```

## warning

> 中文编码
> 最初在生成csv之后，使用文本编辑器都是可以正常显示的，使用的是UTF-8的编码，但是用excel打开csv文件就会乱码
>
> 解决方法
> excel不能识别无BOM的UTF-8编码，需要转为带BOM的UTF-8编码，就是在文件头加上\ufeff即可

## 相关

[CSVTOJSON](https://www.npmjs.com/package/csvtojson)

## 其它实现

利用
