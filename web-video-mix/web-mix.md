# 纯前端实现音视频合成

## ffmpeg.wasm 方案

体积大，8.5m，要缩减体积要自己编译，参考[3]

移动端兼容性不太好 <https://caniuse.com/wasm>

需要处理跨域：

响应用户的 HTTP 请求时，增加 HTTP header, coop + coep 这两个响应头。

Response Headers

cross-origin-embedder-policy: require-corp

cross-origin-opener-policy: same-origin

### 缺点

[纯前端实现音视频合成\_ffmpeg-core.js-CSDN 博客](https://blog.csdn.net/qq_42415326/article/details/124771223)

[ffmpeg.wasm 踩坑体验 - Lewin's Blog](https://www.lewinblog.com/blog/page/2022/221028-ffmpeg-wasm.md)

[3] [前端 webassembly+ffmpeg+web worker 视频抽帧 - 掘金](https://juejin.cn/post/6998876488451751973)

[ffmpeg.wasm 处理视频-CSDN 博客](https://blog.csdn.net/yinshipin007/article/details/130115687)

[基于 FFmpeg 和 Wasm 的 Web 端视频截帧方案 - 掘金](https://juejin.cn/post/7219124460803833913)

[编译 WebAssembly 版本的 FFmpeg（ffmpeg.wasm）：（1）准备 - 知乎](https://zhuanlan.zhihu.com/p/497721007)
[编译 WebAssembly 版本的 FFmpeg（ffmpeg.wasm）：（2）使用 Emscripten 编译 - 知乎](https://zhuanlan.zhihu.com/p/501443854)

[借助 ffmpeg.wasm 纯前端实现多音频和视频的合成 « 张鑫旭-鑫空间-鑫生活](https://www.zhangxinxu.com/wordpress/2021/03/ffmpeg-wasm-audio-video-merge/)

## WebCodecs 方案

Chrome 94 开始支持，21 年 9 月份

原生，速度快

api 很新，而且看介绍文章，对音频采样有要求

[JS audio 加图片序列或 canvas 转 webM/MP4 的实现 « 张鑫旭-鑫空间-鑫生活](https://www.zhangxinxu.com/wordpress/2023/05/mp4-video-api-webcodecs-webm/)

[音视频 Tag | 风痕 · 術&思](https://hughfenghen.github.io/tag/%E9%9F%B3%E8%A7%86%E9%A2%91/)

[hughfenghen/WebAV: Process audio/video data in the browser using WebCodecs. 基于 WebCodecs 在浏览器中处理音视频数据。](https://github.com/hughfenghen/WebAV)
