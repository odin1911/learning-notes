# css snippets

```css
  position: relative;
  background-color: red;
  width: 80%;
  --bs-aspect-ratio: 90%; /* width: 80%;的 90% */
  &::before {
    display: block;
    padding-top: var(--bs-aspect-ratio);
    content: '';
  }
```
