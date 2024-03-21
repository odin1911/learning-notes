# 升级react18记录

## StrictMode 中会调2次 effect

[如何在 Effects 中支持可重用状态·reactwg/react-18·讨论 #18·GitHub --- How to support Reusable State in Effects · reactwg/react-18 · Discussion #18 · GitHub](https://github.com/reactwg/react-18/discussions/18)

推荐写法

```jsx
// Use a Ref to hold the value, but initialize it in an effect.
const ref = useRef(null);

useEffect(() => {
  // Initialize an imperative API inside of the same effect that destroys it.
  // This way it will be recreated if the component gets remounted.
  const someImperativeThing = ref.current = new SomeImperativeThing();

  return () => {
    someImperativeThing.destroy();
  };
}, []);

const handeThing = (event) => {
  const someImperativeThing = ref.current;
  // Now we can call methods on the imperative API...
};
```

不在 effect 中初始化 ref 的写法

```jsx
// This ref holds the imperative thing.
// It should only be referenced by the current component.
const ref = useRef(null);

// This lazy init function ref can be shared with other components,
// although it should only be called from an effect or an event handler.
// It should not be called during render.
const getterRef = useRef(() => {
  if (ref.current === null) {
    ref.current = new SomeImperativeThing();
  }
  return ref.current;
});

useEffect(() => {
  // This component doesn't need to (re)create the imperative API.
  // Any code that needs it will do this automatically by calling the getter.

  return () => {
    // It's possible that nothing called the getter function,
    // in which case we don't have to cleanup the imperative code.
    if (ref.current !== null) {
      ref.current.destroy();
      ref.current = null;
    }
  };
}, []);
```

## typescript

[使用 TypeScript – React --- Using TypeScript – React](https://react.dev/learn/typescript)

[React TypeScript Cheatsheets | React TypeScript Cheatsheets](https://react-typescript-cheatsheet.netlify.app/)

## transform

[HTML to JSX](https://transform.tools/html-to-jsx)