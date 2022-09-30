# use git-cz

基于nodejs项目使用git-cz

## git-cz

git-cz是一个简化版的commitizen+cz-conventional-changelog组合，提供了开箱即用的功能，默认使用Angular规范，默认模板不填写scope部分内容。

```shell
# 安装git-cz包
npm install -g git-cz

# 以后所有使用git commit的地方都用git-cz或git cz命令提交代码
git cz [-a] [--amend] [...]
```

[配置文件](https://github.com/streamich/git-cz/blob/1da51c529277d468020dff58130ccad766696ebe/lib/getConfig.js#L7)

[package.json配置](https://github.com/streamich/git-cz/blob/1da51c529277d468020dff58130ccad766696ebe/lib/getConfig.js#L31)

## commitlint 验证是否符合规范

```shell
# 安装commitlint命令行和验证使用的规则config-conventional
npm install -g @commitlint/config-conventional @commitlint/cli

# 添加全局默认配置，以后commitlint命令都不用加 -x "@commitlint/config-conventional"
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > ~/commitlint.config.js

# 验证最新一条提交记录(必须添加上述配置，否则需要加上 -x "@commitlint/config-conventional")
commitlint -e
```

## git hook 自动验证

```shell
npm install -D husky
```

然后在package.json添加 husky 配置: **注意：适用于 husky@4，husky@5后配置不同**

```json
{
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -x @commitlint/config-conventional -E HUSKY_GIT_PARAMS"
    }
  }
}
```

## refs

[ref1][]

[ref1]: https://blog.dteam.top/posts/2019-04/%E8%A7%84%E8%8C%83%E5%8C%96git-commit%E4%BF%A1%E6%81%AF.html "规范化git commit信息"

[git-cz]: https://github.com/streamich/git-cz "[github]git-cz"

[commitlint]: https://github.com/conventional-changelog/commitlint "[github]commitlint"
