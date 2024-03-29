import './App.css';
import ColorInput from './ColorInput';
import ColorView from './ColorView';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState("royalBlue")
  return (
    <div className='app'>
      <ColorView
      color={color}
      />
      <ColorInput
      color={color}
      setColor={setColor}
      />
    </div>
  );
}

export default App;
