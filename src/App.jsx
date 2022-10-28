import React from 'react';
import Options from './Options/Options';

import './App.css';


function App() {

  return (
    <div className="App">
      {/* <header className="App-header">
        <h1>Pick a Pumkin</h1>
      </header> */}
      <main>
        <div className='zone-container'>
          <div id='canvas' className='creation-zone'>
          
          </div>
        </div>
       
       <Options/>

      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
