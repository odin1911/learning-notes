# 官方文档

## ref

[en](https://docs.docker.com/language/nodejs/)

[cn](https://dockerdocs.cn/language/nodejs/)

[cn1](https://docker-doc.readthedocs.io/zh_CN/latest/index.html)

[cn2](https://www.docker.org.cn/book/docker/what-is-docker-16.html)

## language-specific guides/node.js 记录

```shell
# 查看端口占用
lsof -i:3000

# build
docker build --tag node-docker .

# 分离模式运行
docker run -dp 3030:8000 node-docker

# 指定名字
docker run -dp 3000:8000 --name node-server  node-docker

# 列出容器
docker ps
docker ps -a

# 停止容器
docker stop nostalgic_maxwell

# 重新启动
docker restart nostalgic_maxwell

# 删除容器
docker rm nostalgic_maxwell
```

nodemon 开发工具，代替 node，简单用了一下，结合 node 再看一下参数

docker-compose 配置 docker，要看下详细文档

mongo 数据库要看一下，结合 fastify
