# rc-resize-observer

使用`resize-observer-polyfill`处理兼容

对传入的ref和内部ref做了merge，应该是同时对2个ref，具体做了什么事需要再去看工具类

ref相关代码

```js
import { composeRef, supportRef } from 'rc-util/lib/ref';


export default function SingleObserver(props: SingleObserverProps) {
  const elementRef = React.useRef<Element>(null);

  // =========================== Children ===========================
  const isRenderProps = typeof children === 'function';
  const mergedChildren = isRenderProps ? children(elementRef) : children;

  // ============================= Ref ==============================
  const canRef =
    !isRenderProps && React.isValidElement(mergedChildren) && supportRef(mergedChildren);
  const originRef: React.Ref<Element> = canRef ? (mergedChildren as any).ref : null;

  const mergedRef = React.useMemo(
    () => composeRef<Element>(originRef, elementRef),
    [originRef, elementRef],
  );
}
```
