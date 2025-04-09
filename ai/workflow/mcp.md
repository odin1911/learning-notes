# 工作流如何使用MCP

使用场景：为一个你不能控制的 agent 引入工具时，MCP 就会派上用场。

比较 MCP 和 Function Calling ，这个我也分不清楚，基础还是太差了。

看看 Cursor 的 AI Agent 发展过程，我们会发现整个 AI 自动化的过程发展会是从 Chat 到 Composer 再进化到完整的 AI Agent。

AI Chat 只是提供建议，如何将 AI 的 response 转化为行为和最终的结果，全部依靠人类，例如手动复制粘贴，或者进行某些修改。

AI Composer 是可以自动修改代码，但是需要人类参与和确认，并且无法做到除了修改代码之外的其它操作。

AI Agent 是一个完全的自动化程序，未来完全可以做到自动读取 Figma 的图片，自动生产代码，自动读取日志，自动调试代码，自动 push 代码到 GitHub。

而 MCP Server 就是为了实现 AI Agent 的自动化而存在的，它是一个中间层，告诉 AI Agent 目前存在哪些服务，哪些 API，哪些数据源，AI Agent 可以根据 Server 提供的信息来决定是否调用某个服务，然后通过 Function Calling 来执行函数。

MCP 的主要工作是描述 Server 提供了哪些能力(给 LLM 提供)，需要哪些参数(参数具体的功能是什么)，最后返回的结果是什么。

[一文看懂：MCP(大模型上下文协议) - 知乎](https://zhuanlan.zhihu.com/p/27327515233)
介绍MCP概念，官方示例，除了官方MCP，评论里也有说其它网站

[liaokongVFX/MCP-Chinese-Getting-Started-Guide: Model Context Protocol(MCP) 编程极速入门](https://github.com/liaokongVFX/MCP-Chinese-Getting-Started-Guide)
说了怎么编写MCP，很多例子，还有 VsCode + cline 使用方法
很新，目前看是2天前

[MCP (Model Context Protocol)，一篇就够了。 - 知乎](https://zhuanlan.zhihu.com/p/29001189476)
模型-mcp的原理？一套解决方案
