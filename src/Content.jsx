import React from 'react'

function Content() {
  const handleNameChange = () => {
    const names = ['SPAUPA', 'Juna', 'Yahiamice'];
    const num = Math.floor(Math.random() * 3);
    return names[num];
  }

  const handleClick = () => {
    console.log("Clicked it!");
  }

  const handleClick2 = (name) => {
    console.log(`${name} clicked it!`);
  }

  const handleClick3 = (e) => {
    console.log(`${e.target.innerText} clicked it!`);
  }

  return (
    <div className='content'>
        <p>
          Hello {handleNameChange()}
        </p>
        <button onClick={handleClick}>Click 1</button>
        <button onClick={() => handleClick2("SPAUPA")}>Click 2</button>
        <button onClick={(e) => handleClick3(e)}>ClickytyClacky</button>
    </div>
  )
}

export default Content