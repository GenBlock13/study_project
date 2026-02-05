import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {testMessage} from "./test";
import {TEST1, TEST2} from "./test";


console.log(testMessage);
console.log(TEST1, TEST2);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <div>
            Test
        </div>

        <App/>
    </React.StrictMode>
);
