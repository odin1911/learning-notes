# 记重新安装 macox 环境

2021-12-22

## 过程

### 安装 Command Line Tools

> 安装 brew 脚本会自动安装 Command Line Tools

使用 `xcode-select --install` 安装失败， 提示 `不能安装该软件 因为当前无法从软件更新服务器获得`

### 离线安装 Command Line Tools

[Downloads](https://developer.apple.com/download/all/)，过滤 `Command Line Tools`

Q：获取系统对应的 xcode 版本

A：app store 里找到 xcode，在历史版本中找到支持当前系统的最后一个xcode版本

### 安装 Homebrew

[brew.md](brew.md)

使用镜像安装，现在不用改脚本了，可以使用环境变量

## iterm

[iTerm.md](iTerm.md)

[配置](https://sspai.com/post/63241)，配置就按这个文档内的选择，还不错，文章有点旧了，界面不一样了

## zsh

发现 macos 自带了，就不装了

### 安装 oh-my-zsh

使用脚本直接安装失败，改用镜像安装

[镜像](https://gitee.com/mirrors/oh-my-zsh/)

设置环境变量

```shell
export REPO="mirrors/oh-my-zsh"
export REMOTE="https://gitee.com/${REPO}.git"
```

执行脚本

```shell
sh -c "$(curl -fsSL https://gitee.com/mirrors/oh-my-zsh/raw/master/tools/install.sh)"
```

[oh my zsh 插件安装详细教程及常用插件](https://segmentfault.com/a/1190000039860436)

> 环境变量名太普通了，安装完成后去掉环境变量，以防万一

## vscode

系统升级后，启动vscode提示
`Git not found. Install it or configure it using the 'git.path' setting" on brand new, fresh, shiny, Git-less installations of VSCode`，
安装`Command Line Tools`后解决
