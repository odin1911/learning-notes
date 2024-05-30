# ffmpeg mac note

[home](https://ffmpeg.org)

[编译指南/macOS – FFmpeg --- CompilationGuide/macOS – FFmpeg](https://trac.ffmpeg.org/wiki/CompilationGuide/macOS)

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

### 查看文件信息

```sh
ffmpeg -i input.mp4

ffmpeg -i input.mp4 -hide_banner // 只显示元信息
```

[FFmpeg 引言 — FFmpeg 教程 文档](https://wklchris.github.io/blog/FFmpeg/Intro.html)

## 音视频合成

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

```sh
ffmpeg \
-y
-i ca777ded.mp4 -i 20240421210258.aac \
-c:v copy -c:a aac -strict experimental \
output.mp4
```

## 字幕

FFmpeg 不好处理字幕，要借助其他工具

[Aegisub · 强大的音视频处理工具：FFmpeg](https://book.crifan.com/books/media_process_ffmpeg/website/subtitle/edit/aegisub.html)
