import React from 'react'
import { useState } from 'react';

function Content() {
  const [name, setName] = useState("SPAUPA");
  const [count, setCount] = useState(0);

  const handleNameChange = () => {
    const names = ['SPAUPA', 'Juna', 'Yahiamice'];
    const num = Math.floor(Math.random() * 3);
    setName(names[num]);
  }

  const handleClick = () => {
    setCount(count + 1); // <== Not added immediately
    setCount(count + 1); // <== Not added immediately

    console.log(count); 
    // ex: if count was = 0 before `setCount(...)`
    // console will print `0` instead of `1`

    // multiple setCount 증감 => 한 번만 적용됨!
  }

  const handleClick2 = (name) => {
    console.log(`${name} clicked it!`);
  }

  const handleClick3 = (e) => {
    console.log(`${e.target.innerText} clicked it!`);
  }

  return (
    <div className='content'>
        <p onDoubleClick={handleClick}>
          Hello {name} / Count = {count}
        </p>
        <button onClick={handleNameChange}>Click 1</button>
        <button onClick={() => handleClick2("SPAUPA")}>Click 2</button>
        <button onClick={(e) => handleClick3(e)}>ClickytyClacky</button>
    </div>
  )
}

export default Content