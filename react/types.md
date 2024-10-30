# react with typescript

## typescript guide

[oida.dev | TypeScript, JavaScript, Rust](https://fettblog.eu/)

[Matt Pocock 的专业 TypeScript 培训 |总打字稿 --- Professional TypeScript Training by Matt Pocock | Total TypeScript](https://www.totaltypescript.com/)

## forwardRef

[TypeScript + React：输入通用的 forwardRefs --- TypeScript + React: Typing Generic forwardRefs](https://fettblog.eu/typescript-react-generic-forward-refs/)

```ts
// Redecalare forwardRef
declare module "react" {
  function forwardRef<T, P = {}>(
    render: (props: P, ref: React.Ref<T>) => React.ReactNode | null
  ): (props: P & React.RefAttributes<T>) => React.ReactNode | null;
}
```
