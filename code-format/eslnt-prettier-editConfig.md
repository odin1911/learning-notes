# eslnt-prettier-editConfig

[彻底搞懂 ESLint 与 Prettier 之间的关系](https://blog.hyyar.com/2021/08/30/eslint&prettier/)

---

[从项目规范（eslint + prettier）到自动化配置](https://segmentfault.com/a/1190000039880312)

---

[[译] 以和为贵！让 ESlint、Prettier 和 EditorConfig 互不冲突](https://cloud.tencent.com/developer/article/1840432)

## 策略

我们先来明确一下 各司其职 的原则：

EditorConfig 将负责统一各种编辑器的配置，所有和编辑器相关的配置 (行尾、缩进样式、缩进距离...) 都交给它

Prettier 作为 代码格式化 工具

其余的，也就是 代码质量 方面的语法检查，用 ESLint 来做

---

[找到的别人的配置](https://github.com/eyesofkids/react-env/blob/master/CRA-typescript-eslint-prettier/README.md)

---

<https://juejin.cn/post/7006971057466769445>

---

<https://qinmei.org/blog/react/01>
