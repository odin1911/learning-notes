# got

Human-friendly and powerful HTTP request library for Node.js

<https://github.com/sindresorhus/got>

爱课件2.0在下载book时，使用了这个库，同时也用到了 agant，

爱课件里 agant 使用了 [caw](https://github.com/kevva/caw)，这个6年没有更新了，推荐根据got使用说明自己处理

使用 agant 的作用是不使用 http.globalAgent 的默认值

> 而 http.Agent 主要是为 http.request, http.get 提供代理服务的，用于管理 http 连接的创建，销毁及复用工作。http.request, http.get 默认使用 http.globalAgent 作为代理，每次请求都是“建立连接-数据传输-销毁连接”的过程，如果我们想让多个请求复用同一个 connection，则需要重新定义 agent 去覆盖默认的 http.globalAgent
> <https://www.zhihu.com/question/58996077>

[记录 Got(Node.js) 代理 HTTP 请求的坑](https://claude-ray.com/2021/01/27/node-http-stream-proxy/)
