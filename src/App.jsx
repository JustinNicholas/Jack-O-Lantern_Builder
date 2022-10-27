import {exportComponentAsPNG} from 'react-component-export-image';
import React from 'react';
import { useRef } from 'react';

import './App.css';

const ComponentToPrint = React.forwardRef((props, ref) => (
  <div className='creation-zone' ref={ref}>
    <img src={process.env.PUBLIC_URL + '/Images/' + 'example.png'}/>
  </div>
));

function App() {
  const componentRef = useRef();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Pick a Pumkin</h1>
      </header>
      <main>
        <p>Your Masterpiece</p>
      <button onClick={() => exportComponentAsPNG(componentRef)}>
        Export As PNG
      </button>
      <div className='zone-container'>

        <ComponentToPrint ref={componentRef} />

        <div className='options-zone'>

        </div>
      </div>

      </main>
    </div>
  );
}

export default App;
