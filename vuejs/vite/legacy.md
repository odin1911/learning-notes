# 适配传统浏览器

@vitejs/plugin-legacy

```js
  plugins: [
    legacy({
      targets: ['defaults', 'ios>=12', 'ChromeAndroid >= 66'],
      modernPolyfills: true
    }),
    react(),
  ]
```

[vite/packages/plugin-legacy at main · vitejs/vite](https://github.com/vitejs/vite/tree/main/packages/plugin-legacy)

[使用 Vite 支持旧版浏览器 - DEV 社区 --- Supporting Older Browsers using Vite - DEV Community](https://dev.to/solleedata/supporting-older-browsers-using-vite-2ii)

[正确使用 @babel/preset-env - Keenwon's Blog](https://keenwon.com/use-babel-preset-env/)