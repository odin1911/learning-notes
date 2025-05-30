# UV

是一个 python 环境管理工具

[使用 uv 管理 Python 環境 - DEV Community](https://dev.to/codemee/shi-yong-uv-guan-li-python-huan-jing-53hg)

[UV：Python生态的下一代包管理革命 - YetAnotherSpace](https://hinnuryuu.cc/index.php/archives/53/)

## 项目实践

```sh
# 安装uv
curl -LsSf https://astral.sh/uv/install.sh | sh

# 查看可用python
uv python list

# 安装最新python
uv python install
# 安装指定版本
# uv python install 3.10.10

# 预设python版本，会创建 .python-version 文件。删除文件可还原
uv python pin 3.10

# 可以用单一文件方式，会把环境写入文件头部
# uv add --script cow3.py cowsay rich

# 用目录方式，会创建 pyproject.toml .python-version 等
uv init test_uv

# 执行，会创建 .venv 目录，安装依赖。创建 uv.lock 文件
uv run main.py

# 安装依赖
uv add cowsay rich
# 移除依赖
uv remove cowsay

```

## 安装

根据官网方法安装，配置代码提示。
官网有卸载方法。

## usage

```sh
# 显示可安装和已安装的版本
uv python list

# 显示全部修定版本
uv python list --all-versions

# 显示已安装的版本
uv python list --only-installed

# 安装最新版本
uv python install

# 安装指定版本
uv python install 3.10.10

# 卸载指定版本
uv python uninstall 3.10.10

```

```sh
# 运行python脚本
uv run ./show_version.py

# 指定版本运行
uv run --python 3.10 ./show_version.py

# 预设版本（.python-version）
uv python pin 3.10
# 移除预设
rm .\.python-version

```

```sh
# 指定需要的套件。會建立一個臨時的虛擬環境，即時下載安裝指定的套件
uv run --with cowsay ./cow.py

# 查看虚拟环境的缓存目录
uv cache dir

# 清除临时建立的虚拟环境
uv cache clean
```

```sh
# 將虛擬環境建立在當前資料夾下的 .venv 資料夾中
uv venv --python 3.10

# 激活
source .venv/bin/activate

# 退出虚拟环境
deactivate

# 安装依赖
uv pip install cowsay
# remove
uv pip uninstall cowsay

# 查看包关系
uv pip tree
```

单文件

```sh
# 建立程式檔
uv init --script cow3.py --python 3.13
# 移除套件
uv remove --script cow3.py rich
```

项目

```sh
# 建立项目
uv init uv-proj

# 执行代码
uv run main.py 
# 首次執行時，uv 會依據專案內的設定，建立虛擬環境，放在 .venv 資料夾內，之後所有的操作都是利用這個虛擬環境
# 還會增加 uv.lock 檔

# 安裝套件
uv add cowsay rich
# 移除套件
uv remove cowsay

# 更新特定套件
uv lock --upgrade-package cowsay
# 更新所有套件
uv lock --upgrade

# 手動修改 pyproject.toml 檔后，執行 uv lock 指令，讓 uv.lock 檔的內容與 pyproject.toml 檔一致
uv lock

# 要依照 uv.lock 內容增刪套件，就必須再執行 uv sync 讓實際的 Python 環境與 uv.lock 檔的內容一致
uv sync

# 查看目前安裝的套件
uv pip list
```

使用套件提供的工具指令

```sh
# 執行指令
uvx cowsay -t 'hello, uv'
uvx --from httpie http -p=b GET https://flagtech.github.io/flag.txt

# 將套件提供的指令安裝到系統上
uvx install cowsay
uvx install httpie
# 安装后执行
http -p=b GET https://flagtech.github.io/flag.txt

# 查看安装路径
uv tool dir

# 更新
uv tool upgrade httpie

# 移除
```
