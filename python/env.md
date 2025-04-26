# macos 安装 python 开发环境

## 2025-04-26

UV和Pixi代表了Python环境管理工具的两种不同技术路线。UV专注于提供高性能的原生PyPI包管理解决方案，而Pixi则致力于桥接Conda生态系统和PyPI。选择时应考虑项目具体需求：

对性能要求高的项目建议选择UV
需要Conda生态系统支持的项目可考虑Pixi
标准Python项目开发推荐使用UV

## 2023-11-29

[pyenv 使用](https://zhuanlan.zhihu.com/p/36402791)

[使用 pyenv 管理 Python 版本](https://einverne.github.io/post/2017/04/pyenv.html)

## 2021-12-29

目前网上的信息来看，python 环境说法不统一，大概总结一下

pyenv 用于管理 python 版本，意见比较一致

每个项目使用自己的虚拟环境，意见比较一致

Anaconda 用于数据科学，优点是使用方便，会安装常用包，缺点是污染全局环境，体积大

虚拟环境使用方式不统一，virtualenv、pyenv、venv、conda 都可以做到

## 2021-12-23

## ref

[Python 杂记之 如何使用 pyenv 管理 python 版本管理与如何使用 virtualenv 创建 python 虚拟运行环境](https://zicowarn.github.io/2020/09/22/0809-python-hwoto-install-pyevn-virtualenv/)

[2021 年了，該如何配置 Python 開發環境 - Part 1 Python 版本管理](https://mcko.me/python-runtime-management.html)

[2021 年了，該如何配置 Python 開發環境 - Part 2 Python 套件管理](https://mcko.me/python-package-management-2021.html)

[在 macOS 上使用 pyenv + pyenv-virtualenv 建立 Python 開發環境](https://blog.kyomind.tw/pyenv-setup/)

## 安装 pyenv

Pyenv 主要是用于 Python 版本隔离

参考官方文档，以 brew 方式安装， [github](https://github.com/pyenv/pyenv)

## 安装 pyenv-virtualenv

虚拟环境

参考官方文档，以 brew 方式安装， [github](https://github.com/pyenv/pyenv-virtualenv)

使用 pyenv virtualenv，不要用 pyenv-virtualenv，brew 安装的缺少 pyenv-root 环境变量

安装完新版本 python 后要记得 rehash

## pyenv 与 pyenv-virtualenv 一起使用

先建立一個新的 virtualenv，然後在專案目錄執行 pyenv local a-new-venv 來設定環境

```shell
pyenv virtualenv 3.7.12 venv37

pyenv local venv37
```

## Python Package Management

pip-tools、Pipenv、Poetry、conda-lock
