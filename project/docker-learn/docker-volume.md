# docker volumn

[docs](https://dockerdocs.cn/storage/volumes/)

## volumn

```shell
# 创建卷
docker volume create todo-db

# list volumes
docker volume ls

# 启动容器，-v指定卷
docker run -dp 3000:3000 -v todo-db:/etc/todos getting-started

# inspect a volume
docker volume inspect todo-db

# remove a volume
docker volume rm my-vol

# Start a container with a volume
# --mount
docker run -d \
  --name devtest \
  --mount source=myvol2,target=/app \
  nginx:latest
# -v
docker run -d \
  --name devtest \
  -v myvol2:/app \
  nginx:latest
# 验证
docker inspect devtest # 查看 Mounts 部分
```

## network

```shell
# 创建网络
docker network create todo-app

```
