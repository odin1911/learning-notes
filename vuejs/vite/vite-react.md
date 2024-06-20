# vite react

## vite https

### vite config

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mkcert from 'vite-plugin-mkcert';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), mkcert()],
});
```

### mkcert

```sh
brew instal mkcert
brew install nss # 如果电脑中有 Firefox，还需要这一步骤，否则会报错

mkcert -install

# 插件会自动创建证书，可以指定位置
# mkcert localhost 127.0.0.1 ::1

```

localhost 127.0.0.1 ::1
