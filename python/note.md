# python notes

[中文 doc](https://docs.python.org/zh-cn/3/)

[Mac VS Code 上的 Python 开发环境构建](https://www.codenong.com/cd4e574d0f237c4e1356/)

[vscode 配置 Python 开发环境](https://www.mzh.ren/vscode-python-env-setup.html)

[python viz](https://pythonviz.com/category/basic/)，一个教程网站，东西很基础也不多

## 安装 python 途径

- Linux 上的内置 Python 安装。
- MacOS 上使用 brew 安装。brew install python3
- 从 [python.org](https://www.python.org/downloads/) 下载。
- 从 [Anaconda](https://www.anaconda.com/download/) 下载（用于数据科学目的）。

## python version management

pyenv：从网上评论看，是推荐使用的

## refs

[Pyenv 的安装配置与国内镜像加速](https://www.mywaiting.com/weblogs/pyenv-install-for-virtualenv-and-accelerate-in-mainland-china/)，内有 pip 安装国内加速

[pip/pyenv 国内镜像加速源](https://zhuanlan.zhihu.com/p/408705543)

## python versions

[Pipenv 虛擬環境](https://iter01.com/604178.html)，venv 暂时可能还用不上，pipenv 有不少负面评价，慎用

[不用 pip install，你养我吗？](https://zhuanlan.zhihu.com/p/357912989)，支持 pipenv，较新

[终于可以摆脱 Pipenv 这坑货了](https://zhuanlan.zhihu.com/p/398511535)，poetry 介绍，还有 3 本书

[Python 项目脚手架](https://zhuanlan.zhihu.com/p/423280686)，别人的总结，可以参考

[pipenv 维护者 blog](https://frostming.com/tags?name=Python)

> [ref](https://sspai.com/post/68097)
>
> 老手的话可以实装 Github copilot，可以体验到一个 tab 输出一整行的自动完成，极爽；非老手不建议用，因为用来训练的代码很多都有 bug，不知道自己想写什么就随意 tab tab tab 很快会变成 bug 输出机。
> 如果写包的话，poetry 是首荐的包管理器。有很多有趣的功能，比如通过插件能将 git tag 自动转换成包版本号发布。
> pytest 可以让单元测试更轻松；tox 可以让你多版本 python 同时测试；
> 选个 CI 自动化测试、部署很关键，没 CI 寿命就少了一半。不想用托管的也可以用自托管的，比如 nektos/act。

[Python 生态发展之路](https://zhuanlan.zhihu.com/p/398406235)，生态

[Python 计算生态中有哪些领域？](https://zhuanlan.zhihu.com/p/369869926)，生态

[Python 学习路线与生态](https://cloud.tencent.com/developer/article/1835442)，生态
