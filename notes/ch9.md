# !!! Ch9 Controled Component Inputs

- (Form)
  - Using Form
  - Adding element feature
- (Additional Feature)
  - Adding element to list state
  - Loading localStorage
  - Searching
  - Input Re-focusing
    - Using useRef();

## Moving npm dev dependency to production dependency

`npm i --save-dev <package>`

## Creating form

```jsx
<form className='add-form' onSubmit={handleSubmit}>
  <label htmlFor='add-item'>Add Item</label>
  <input
    autoFocus
    id='add-item'
    type='text'
    placeholder='Add Item'
    value={newItem}
    onChange={(e) => setNewItem(e.target.value)}
  />
  <button
    type='submit'
    aria-label='Add Item'
    onClick={handleSubmit}
  >
    <FaPlus/>
  </button>
</form>
```
- button을 누를 시 from의 onSumbit(handleSubmit) 실행
  - handleSubmit 내 e.preventDefault 사용 잊지 말기!

### 과정

add form => add label inside => set 'htmlFor' att. => add input => set following att.s

- autoFocus
- id
  - Should match with previous 'htmlFor' att.
- type
- placeholder
- required

## List State에 추가하기

```js
const listItems = [ // !!!
  ...items,
  newItem
]
setAndSaveItems(listItems);
```

## 검색 알고리즘

```jsx
<Content
  items={items.filter((x) => (
    x.item.toLowerCase().includes(search.toLowerCase()) // !!
  ))}
  handleCheck={handleCheck}
  handleDelete={handleDelete}
/>
```
- `.toLowerCase()`
- `.includes(...)`
  - ~~`.contains(...)`~~ 아님

## UseRef

```jsx
const inputRef = useRef(); // 1)
return (
  <form className='add-form' onSubmit={handleSubmit}>
    <label htmlFor='add-item'>Add Item</label>
    <input
      autoFocus
      id='add-item'
      type='text'
      placeholder='Add Item'
      required
      value={newItem}
      onChange={(e) => setNewItem(e.target.value)}
      ref={inputRef} // 2)
    />
    <button
      type='submit'
      aria-label='Add Item'
      onClick={() => {
        inputRef.current.focus(); // 3)
      }}
    >
      <FaPlus/>
    </button>
  </form>
)
```
1. `useRef` 함수로 ref 생성
2. `ref={<ref>}` 구문으로 ref 설정하기
3. `ref` 사용
