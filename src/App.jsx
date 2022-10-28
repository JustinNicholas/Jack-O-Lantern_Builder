import React from 'react';
import Options from './Options/Options';

import './App.css';


function App() {

  return (
    <div className="App">
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
