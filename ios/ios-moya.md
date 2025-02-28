# Moya + Alamofire

[从 Moya 到 Alamofire | 红红の](https://redye.github.io/2023/08/08/%E4%BB%8EMoya%E5%88%B0Alamofire/)

[【翻译】iOS Swift Moya从入门到精通，优雅、安全的Alamofire-CSDN博客](https://blog.csdn.net/zgpeace/article/details/107747785)

[Moya 教程：iOS 入门 | Kodeco --- Moya Tutorial for iOS: Getting Started | Kodeco](https://www.kodeco.com/5121-moya-tutorial-for-ios-getting-started)

## Alamofire

```swift
Alamofire.request("https://httpbin.org/get", parameters: ["foo": "bar"])
  .validate(statusCode: 200..<300)
  .validate(contentType: ["application/json"])
  .response { response in
  // response handling code
}
<!-- 或者router经过封闭 -->
Alamofire.request(ImaggaRouter.tags(contentID))
```

## Moya

结构看
[Moya/docs_CN/Examples/README.md at master · Moya/Moya](https://github.com/Moya/Moya/blob/master/docs_CN/Examples/README.md)

```swift
provider.request(.zen) { result in
    switch result {
    case let .success(moyaResponse):
        let data = moyaResponse.data // Data, your JSON response is probably in here!
        let statusCode = moyaResponse.statusCode // Int - 200, 401, 500, etc

        // do something in your app
    case let .failure(error):
        // TODO: handle the error == best. comment. ever.
    }
}
```

## Result

[antitypical/Result at 4.1.0](https://github.com/antitypical/Result/tree/4.1.0)
项目里用的版本是4
Moya 返回的是结构，提供了一些工具方法，如 map。
