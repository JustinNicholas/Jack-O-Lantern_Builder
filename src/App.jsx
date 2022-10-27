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

  const addPumpkin = (pumpkin) => {
    const node = document.createElement("img");
    node.src = process.env.PUBLIC_URL + '/Images/' + pumpkin

    document.getElementById('canvas').appendChild(node)

  }

  const selectedPumpkin = 'example.png'

  return (
    <div className="App">
      <header className="App-header">
        <h1>Pick a Pumkin</h1>
      </header>
      <main>
        <p>Your Masterpiece</p>
        <button onClick={() => addPumpkin('example.png')}>Add Pumpkin</button>
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
