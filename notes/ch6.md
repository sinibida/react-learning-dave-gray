
# Chapter 6 useState

```jsx
const handleClick = () => {
  setCount(count + 1); // <== Not added immediately
  setCount(count + 1); // <== Not added immediately

  console.log(count); 
  // ex: if count was = 0 before `setCount(...)`
  // console will print `0` instead of `1`

  // multiple setCount 증감 => 한 번만 적용됨!
}
```
