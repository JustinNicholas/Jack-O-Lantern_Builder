import React from 'react';
import html2canvas from 'html2canvas';

import './App.css';


function App() {

  const handleDownload = async () => {
    const element = document.getElementById('canvas'),
    canvas = await html2canvas(element),
    data = canvas.toDataURL('image/jpg'),
    link = document.createElement('a');
 
    link.href = data;
    link.download = 'downloaded-image.jpg';
 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const addPumpkin = (event) => {
    if (event.target.value === 'none') {

    } else {
    const element = document.getElementById('canvas')
    for ( const child of element.children ){
      console.log(child);
      if (child.classList.contains('pumpkin')) {
        element.removeChild(child)
      }
    }

    console.log(event.target.value);
    const node = document.createElement("img");
    node.src = process.env.PUBLIC_URL + '/Images/' + event.target.value

    node.classList.add("pumpkin")
    document.getElementById('canvas').appendChild(node)

  }
  }

  const addEyes = (event) => {
    if (event.target.value === 'none') {

    } else {
    const element = document.getElementById('canvas')
    for ( const child of element.children ){
      console.log(child);
      if (child.classList.contains('eyes')) {
        element.removeChild(child)
      }
    }

    console.log(event.target.value);
    const node = document.createElement("img");
    node.src = process.env.PUBLIC_URL + '/Images/' + event.target.value

    node.classList.add("eyes")
    document.getElementById('canvas').appendChild(node)

  }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Pick a Pumkin</h1>
      </header>
      <main>
        <p>Your Masterpiece</p>
        {/* Pumpkin Selection */}
        <select onChange={(event) => addPumpkin(event)}>
          <option value="none">select a pumpkin</option>
          <option value="Black_Fat.png">Wide Black Pumpkin</option>
          <option value="Green_Fat.png">Wide Green Pumpkin</option>
          <option value="Pink_Fat.png">Wide Pink Pumpkin</option>
          <option value="Orange_Fat.png">Wide Orange Pumpkin</option>
          <option value="Black_Pear.png">Gord Black Pumpkin</option>
          <option value="Green_Pear.png">Gord Green Pumpkin</option>
          <option value="Pink_Pear.png">Gord Pink Pumpkin</option>
          <option value="Orange_Pear.png">Gord Orange Pumpkin</option>
          <option value="Black_Simple.png">Simple Black Pumpkin</option>
          <option value="Green_Simple.png">Simple Green Pumpkin</option>
          <option value="Pink_Simple.png">Simple Pink Pumpkin</option>
          <option value="Orange_Simple.png">Simple Orange Pumpkin</option>
          <option value="Black_Tall.png">Tall Black Pumpkin</option>
          <option value="Green_Tall.png">Tall Green Pumpkin</option>
          <option value="Pink_Tall.png">Tall Pink Pumpkin</option>
          <option value="Orange_Tall.png">Tall Orange Pumpkin</option>
        </select>
        {/* Eye Selection */}
        <select onChange={(event) => addEyes(event)}>
          <option value="none">select the Eyes</option>
          <option value="Traditional.png">Traditional Eyes</option>
          <option value="angry.png">Angry Eyes</option>
          <option value="cartoon.png">Cartoon Eyes</option>
          <option value="Circle.png">Circle Eyes</option>
        </select>
        <button onClick={() => handleDownload()}>
          Export As PNG
        </button>
        <div className='zone-container'>
          <div id='canvas' className='creation-zone'>
          
          </div>
          <div className='options-zone'>

          </div>
        </div>

      </main>
    </div>
  );
}

export default App;
