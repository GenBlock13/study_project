import React from 'react';
import ReactDOM from 'react-dom/client';
import { TEST_1, TEST_2} from './test';

import Bat from './media/bat.png';
import { names } from './test'; 
import './media/styles.css'

console.log(TEST_1, TEST_2, names);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <p>Hello, World!</p>
    </div>

    <div className="hello">
      <img src={Bat}/>
    </div>
    
    
  </React.StrictMode>
);
