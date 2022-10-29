import React from 'react';
import Options from './Options/Options';

import './App.css';


function App() {

  return (
    <div className="App">
      <main>
        <img className='logo' src={process.env.PUBLIC_URL + '/Images/logo.png'} alt="" />
        <imgc className='byoj' src={process.env.PUBLIC_URL + '/Images/byoj.png'} alt="" />
        <div className='zone-container'>
          <div id='canvas' className='creation-zone'>
            <img className='glow' src={process.env.PUBLIC_URL + '/Images/Glow.png'} alt="" />
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
