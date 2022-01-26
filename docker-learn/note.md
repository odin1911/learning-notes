# docker 学习笔记

[学习资料](https://dockertips.readthedocs.io/en/latest/index.html)

## install

在官网下载 dmg 安装

`docker image pull nginx` 拉取 image

## 基本操作

| 操作                   | 命令(全)                             | 命令(简)                             |
| ---------------------- | ------------------------------------ | ------------------------------------ |
| 容器的创建             | `docker container run <image name>`  | `docker run <image name>`            |
| 容器的列出(up)         | `docker container ls`                | `docker ps`                          |
| 容器的列出(up 和 exit) | `docker container ls -a`             | `docker ps -a`                       |
| 容器的停止             | `docker container stop <name or ID>` | `docker stop <container name or ID>` |
| 容器的删除             | `docker container rm <name or ID>`   | `docker rm <container name or ID>`   |

## 连接容器的 shell

`docker container run -it` 创建一个容器并进入交互式模式

`docker container exec -it` 在一个已经运行的容器里执行一个额外的 command
