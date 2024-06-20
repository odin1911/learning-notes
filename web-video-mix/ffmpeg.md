# ffmpeg mac note

[home](https://ffmpeg.org)

[编译指南/macOS – FFmpeg --- CompilationGuide/macOS – FFmpeg](https://trac.ffmpeg.org/wiki/CompilationGuide/macOS)

[通俗易懂的 ffmpeg 笔记- 文集 哔哩哔哩专栏](https://www.bilibili.com/read/readlist/rl191609?spm_id_from=333.999.0.0)

## 在线工具

<https://ffmpeg-online.vercel.app/>

## tutorial

[FFmpeg 视频处理入门教程 - 阮一峰的网络日志](https://www.ruanyifeng.com/blog/2020/01/ffmpeg.html)

[FFmpeg 实用命令 — FFmpeg 教程 文档](https://wklchris.github.io/blog/FFmpeg/FFmpeg.html#id10)

### 命令行参数

```sh
ffmpeg {1} {2} -i {3} {4} {5}
```

1. 全局参数
2. 输入文件参数
3. 输入文件
4. 输出文件参数
5. 输出文件

## 配音服务合成音视频代码

```java
 val ffmpeg: ProcessWrapper = VideoEncoderFactory.fFMPEGLocator.createExecutor()
        ffmpeg.addArgument("-i")
        ffmpeg.addArgument(video.absolutePath)
        ffmpeg.addArgument("-i")
        ffmpeg.addArgument(audio.absolutePath)
        ffmpeg.addArgument("-c:v")
        ffmpeg.addArgument("copy")
        ffmpeg.addArgument("-c:a")
        ffmpeg.addArgument("aac")
        ffmpeg.addArgument("-strict")
        ffmpeg.addArgument("experimental")
        if (needComplex) {
            ffmpeg.addArgument("-filter_complex")
            ffmpeg.addArgument("[0:a:0] [1:a:0] amix=inputs=2:duration=longest")
        }
        ffmpeg.addArgument("-y")
        ffmpeg.addArgument(target.absolutePath)
```

## 字幕

FFmpeg 不好处理字幕，要借助其他工具

[Aegisub · 强大的音视频处理工具：FFmpeg](https://book.crifan.com/books/media_process_ffmpeg/website/subtitle/edit/aegisub.html)

## FFmpeg 和 播放器

[探索 FFmpeg：实现自定义播放速度的全方位指南 - 知乎](https://zhuanlan.zhihu.com/p/655318441)

## mov to mp4

[MOV 与 MP4 格式比较：不再有两种想法](https://video-converter.com/cn/blog/mov-vs-mp4)

> 此网站有在线转换器
