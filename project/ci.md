# ci 记录

## 依赖没有变化时跳过依赖安装

把 lock 文件变动做为 node_modules 缓存依据，当 lock 变动时，就找不到 node_modules

```yaml
.cache-key:
  key:
    files:
      - package-lock.json
  paths:
    - node_modules/

...

.build:
  stage: build
  image: registry-mirrors.saybot.net/node:$NODE_VERSION-slim
  script:
    - |
      [ ! -d 'node_modules' ] && npm ci
    - npm run build
```
