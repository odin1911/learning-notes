# macos 安装 python 开发环境

## ref

[Python 杂记之 如何使用 pyenv 管理 python 版本管理与如何使用 virtualenv 创建 python 虚拟运行环境](https://zicowarn.github.io/2020/09/22/0809-python-hwoto-install-pyevn-virtualenv/)

[2021 年了，該如何配置 Python 開發環境 - Part 1 Python 版本管理](https://mcko.me/python-runtime-management.html)

[2021 年了，該如何配置 Python 開發環境 - Part 2 Python 套件管理](https://mcko.me/python-package-management-2021.html)

## 安装 pyenv

Pyenv 主要是用于 Python 版本隔离

参考官方文档，以 brew 方式安装

## 安装 pyenv-virtualenv

虚拟环境

参考官方文档，以 brew 方式安装

使用 pyenv virtualenv，不要用 pyenv-virtualenv，brew 安装的缺少 pyenv-root 环境变量

## pyenv 与 pyenv-virtualenv 一起使用

先建立一個新的 virtualenv，然後在專案目錄執行 pyenv local a-new-venv 來設定環境

```shell
pyenv virtualenv 3.7.12 venv37

pyenv local venv37
```

## Python Package Management

pip-tools、Pipenv、Poetry、conda-lock
