# 防抖（Debouncing）和节流（Throttling）

debounce: 把多个顺序地调用合并成一次

```
touch - touch - touch - - run
```

throttle: 只允许一个函数在 X 毫秒内执行一次

```
touch - run - touch - touch - touch - run
```
