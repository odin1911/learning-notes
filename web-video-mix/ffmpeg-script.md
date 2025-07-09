# ffmpeg 脚本记录

## 去视频黑边

```sh
#!/bin/bash

# 如果任何命令失败，立即退出脚本
set -e

# 检查参数数量是否正确
if [ "$#" -ne 2 ]; then
    echo "用法: $0 <输入文件> <输出文件>"
    echo "示例: ./run.sh media1.mp4 cropped_video.mp4"
    exit 1
fi

INPUT_FILE="$1"
OUTPUT_FILE="$2"

# --- 步骤 1: 检测黑边尺寸 ---
echo "🔍  正在为'$INPUT_FILE'检测黑边..."

# 运行 ffmpeg 的 cropdetect 功能并捕获标准错误输出
# 我们从第20秒开始，分析10秒的片段来确定裁切尺寸
CROP_DETECT_OUTPUT=$(ffmpeg -ss 20 -i "$INPUT_FILE" -t 10 -vf "cropdetect=24:16:0" -f null - 2>&1)

# 从输出中解析出最后一行 'crop=...' 的值
CROP_VALUE=$(echo "$CROP_DETECT_OUTPUT" | grep "crop=" | awk '{print $NF}' | tail -n 1)

if [ -z "$CROP_VALUE" ]; then
    echo "❌  无法检测到裁切尺寸，脚本中止。"
    exit 1
fi

echo "✅  成功检测到裁切参数: $CROP_VALUE"


# --- 步骤 2: 应用裁切 ---
echo "✂️  正在裁切视频并保存到'$OUTPUT_FILE'..."

# 应用检测到的裁切值，并跳过开头的0.1秒以避免黑屏
# 同时，我们直接复制音频流(-c:a copy)以加快速度并保持音频质量
ffmpeg -y -i "$INPUT_FILE" -ss 0.1 -vf "$CROP_VALUE" -c:a copy "$OUTPUT_FILE"

echo "🎉  处理完成！已裁切的视频另存为 '$OUTPUT_FILE'."
```
