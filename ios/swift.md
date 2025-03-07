# swift5

[Swift 与 Objective-C 区别是什么](https://blog.wyan.vip/2023/12/oc_swift.html)
[README | SwiftGG](https://gitbook.swiftgg.team/swift)
[关于 Swift | Swift 编程语言中文教程（The Swift Programming Language）](https://swift.bootcss.com/)
[Swift 入门教程、读书笔记 Swift 入门教程、读书笔记](https://wangchujiang.com/swift-tutorial/)
[关于 Swift - Swift 5.1 教程 - Swift 编程](http://m.swift51.com/swift5.1/01_welcome_to_swift/01_about_swift.html)
[最近忙里偷闲看了一些 IOS APP 开发的教程，粗略整理了一下相关的教程 - V2EX](https://www.v2ex.com/t/934494)

## Optional

[Optional中的Map和FlatMap · Swift知识学习](https://leon_lizi.gitbooks.io/swift-/content/chapter2.html)
[Swift 函数式编程：从 map、flatMap 和 compactMap 开始在 Swift 标准库里提供了 ma - 掘金](https://juejin.cn/post/6844904167824162824#heading-7)
[Swift 烧脑体操（四） - map 和 flatMap · 唐巧的博客](https://blog.devtang.com/2016/03/05/swift-gym-4-map-and-flatmap/)

## OC调用Swift

[Swift 与 OC相互调用1、创建桥接文件 在创建另一种语言的文件时XCode会提示创建项目名-Bridging-He - 掘金](https://juejin.cn/post/7136961571313418271)

必须继承于 NSObject，类、结构体等才会公开给OC
必须使用 @objc 修饰，属性、方法等才会公开给OC

## SwiftyJSON

[SwiftyJSON解读(4.0.0) | Cyrill](https://cyrill.win/articles/2017/12/13/swiftyjson-read)

## camelCaseToSnakeCase

[驼峰命名法转换为蛇形命名法在 Swift 中 --- Camel case to snake case in Swift](https://gist.github.com/dmsl1805/ad9a14b127d0409cf9621dc13d237457)

```swift
extension String {
  
  func snakeCased() -> String? {
    let pattern = "([a-z0-9])([A-Z])"

    let regex = try? NSRegularExpression(pattern: pattern, options: [])
    let range = NSRange(location: 0, length: count)
    return regex?.stringByReplacingMatches(in: self, options: [], range: range, withTemplate: "$1_$2").lowercased()
  }
}
```
