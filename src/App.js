
import './App.css';
import { Message } from './components/Message.js'
import { useState } from "react";
import { Counter } from './components/Counter';

let textInitial = "New Message";
function App() {
  const [text, setText] = useState(textInitial);

  const handleClick = () => {
    console.log("Handle click");
    setText("Updated message " + Math.floor(Math.random() * 100))
  }

  return (
    <div className="App">
      <header className="App-header">
        <Message className="Message" message={text} onButtonClick={handleClick} />
        <Counter className="Message" />

      </header>
    </div>
  );
}

export default App;
