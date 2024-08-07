# 使用Markdown页面

[ref](https://docusaurus.io/zh-CN/docs/create-doc)

## 标题

会显示在右上方的目录

这样，你的用户不用通读全文就可以知晓这篇文章的主要内容。

### 目录默认只包括 h2 和 h3 标题

你可以在每个文档或主题配置中设置目录包含的标题层级。

标题会保持恰当的间距，让文章看起来层级清晰。

- 列表将帮助你
- 阐述让用户牢记的关键点
  - 你还可以将其嵌套
    - 很多次

### 自定义标题 ID {#custom-id}

你可以用 `{#custom-id}` 语法自定义标题 ID。

在 docs 目录下所有带有下划线（_）前缀的文件都会被当作页面「片段」，并被默认忽略

## 文档前言

前言是用来为你的文档页面提供额外的元数据的

### 文档 ID

```
---
id: part1
---
```

### 文档 URL

```
---
slug: /bonjour
---
```

slug 会被添加到文档插件的 routeBasePath 后面

## 侧边栏

自动生成侧边栏切片，可以进行组合

[文档项目元数据](https://docusaurus.io/zh-CN/docs/sidebar/autogenerated#autogenerated-sidebar-metadata)

使用前言

- sidebar_label
- sidebar_class_name
- sidebar_custom_props
- sidebar_position 相对位置

[类别元数据](https://docusaurus.io/zh-CN/docs/sidebar/autogenerated#category-item-metadata)

在类别相对应的文件夹里新建一个 _category_.json 或 _category_.yml 文件

用 generated-index 链接来快速生成介绍文档

用 link: null 来防止 Docusaurus 应用任何惯例

## 自定义分页导航

使用前言 pagination_next 和 pagination_prev
