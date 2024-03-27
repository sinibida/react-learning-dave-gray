# Chapter 5 Click Events

element의 click event를 다룸

`onClick={...}`
!!: `e.target.innerText`

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

# !!! Chapter 7 Lists & Keys

Grocery List의 각 목록을 구현하며 List를 React에서 사용하는 법을 배운다.


