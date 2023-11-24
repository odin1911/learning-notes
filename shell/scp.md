# shell scp 命令

```sh
# (文件)本地 --> 远程服务器
scp test.txt root@192.168.1.1:/home/
# 将test.txt文件复制到目标服务器（192.168.1.1）下的home文件夹下。

# (文件夹)本地 --> 远程服务器
scp -r test root@192.168.1.1:/home/
# 将test整个文件夹复制到目标服务器下的home文件夹下。

# (文件)远程服务器 --> 本地
scp root@192.168.1.1:/home/test.txt test
# 将远程服务中home目录下的test.txt文件，复制到本地的test目录下

# (文件夹)远程服务器 --> 本地
scp -r root@192.168.1.1:/home/test /Users/jjz
# 将远程服务器中home目录下的test整个目录复制到本地的jjz目录下
```

## scp命令指定密钥文件

```sh
scp test.txt root@192.168.1.1:/home/ -i ~/.ssh/id_rsa.1
```

## 使用 SCP 将文件从本地服务器复制到远程服务器

如果你只指定目标目录，SCP 将保留文件名原样

要更改文件名，请在目标中定义一个新文件名

## 使用 SCP 将文件从远程复制到本地

如果未指定路径，则默认路径为远程用户的主目录
