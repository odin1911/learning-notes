# uni-app 微信小程序

## 使 vue-cli 命令行创建 uni-app

```
npx degit dcloudio/uni-preset-vue#vite my-vue3-project
```

## 使用 miniprogram-ci 上传出错

代码中有async await 时，可能会报错。通过修改 rollup 配置的解决办法

```
const buildOpts = isDev
  ? { sourcemap: true }
  : {
      rollupOptions: {
        // make sure to externalize deps that shouldn't be bundled
        // into your library
        external: [],
        output: {
          plugins: [
            getBabelOutputPlugin({
              allowAllFormats: true,
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: '> 0.25%, not dead, IE 11',
                    useBuiltIns: false, // Default：false
                    // // https://babeljs.io/docs/en/babel-preset-env#modules
                    modules: false
                  }
                ]
              ]
            })
          ]
        }
      }
    };
```
