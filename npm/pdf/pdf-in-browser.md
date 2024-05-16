# client 处理 pdf

需求是把 html 转成 pdf，

## client 方案

基于 DOM 的屏幕快照

目前看来，主流方案是用 html2pdf.js（ html2canvas, jspdf ），
把 html 处理成图片再嵌入到 pdf 中。需要处理中文字体问题，手动处理分页（分割图片）

[React 前端 html 导出 pdf，并自动上传到后端服务器\_html2pdf 的 pdf 保存到服务器-CSDN 博客](https://blog.csdn.net/song279811799/article/details/91044455)

[如何用 js 实现 HTML 转 PDF - 掘金](https://juejin.cn/post/7056384329663905805)

## server 方案

别一种方案是把前端标签传给后端，由后端生成 pdf，这样可以利用后端的 pdf 库，比如 wkhtmltopdf, phantomjs, weasyprint 等。
要考虑 css 问题，一般不支持 css3，不支持 js，不支持动态效果。
失去了预览能力

## 前端生成 pdf，展示 pdf

[如何使用 JavaScript 从 PDF 中提取并渲染页面](https://www.freecodecamp.org/chinese/news/extract-pdf-pages-render-with-javascript/)

## Puppeteer 方案

[【译】将 HTML 转为 PDF 的几种实现方案 - 知乎](https://zhuanlan.zhihu.com/p/417597445)
列出了 3 种方案

[HTML 导出为 PDF：前端起飞，node 当家，puppeteer 技惊四座！ - ByteZoneX 社区](https://www.bytezonex.com/archives/lcKqDCm1.html)
还提到了 wkhtmltopdf、Chrome Headless 和 headless-pdf

## Adobe PDF Services API

付费

[使用 PDF 服务 API 和 Node.js，只需几分钟即可从 HTML 或 MS Office 创建 PDF | Adobe Acrobat Services](https://experienceleague.adobe.com/zh-hans/docs/acrobat-services-learn/tutorials/pdfservices/createpdffromhtml)

## groupdocs

付费

[如何在 Node.js 中在线将 PDF 转换为 HTML](https://blog.groupdocs.cloud/zh/conversion/how-to-convert-pdf-to-html-online-in-node.js/)

## PhantomJS 方案？

## node-html-pdf

[html-pdf-node - npm](https://www.npmjs.com/package/html-pdf-node)
