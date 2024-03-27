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

각 목록의 렌더린, 체크박스, 그리고 삭제 기능을 구현한다.

또한 react-icons 라이브러리와 css 관련 지식을 알 수 있었다.

## 기타

**!!!: React Icons**

?: `npm -D` flag?
- `-D` == `--save-dev` [#](https://stackoverflow.com/a/23177406)
- ?: `--save-dev`? `--save`?
  - `save-dev`는 개발 중에만 필요한 모듈들을 저장한다.
    - ex: 테스팅
    - [#](https://stackoverflow.com/questions/22891211/what-is-the-difference-between-save-and-save-dev)

?: `role`?

?: `tabIndex="0"`?

`key` => React.js가 각 리스트 요소의 변경을 감지하도록 돕는다.

## `li`, `ul`에서 bullet point 삭제하기

https://stackoverflow.com/a/36351009

``` css
ul {
    list-style-type: none;
}
```

## `checked` 구현

```jsx
const listItems = items.map((item) => item.id === id ? {
  ...item,
  checked: !item.checked
} : item)
```

- id 비교를 굉장히 간결하게 적은 것을 볼 수 있다.
- id가 대상과 다르다면 그대로 유지된다.
- `...item` !!!

## `localStorage`

```js
localStorage.setItem('shoppingList', JSON.stringify(listItems));
```

- !!!: `JSON.stringify`

## Nesting CSS

https://developer.mozilla.org/en-US/docs/Web/CSS/Nesting_selector
2023년 이후부터 가능해졌다고...

```css
.item {
  background: var(--ui-1);
  padding: 4px;
  display: flex;
  align-items: center;
  gap: 4px;

  & svg {
    color: var(--accent);
    width: 1.5em;
    height: 1.5em;

    &:hover {
      color: red;
    }
  }

  & label {
    flex-grow: 1;
  }

  & input {
    width: 2em;
    height: 2em;
  }
}
```
