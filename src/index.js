import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {testMessage} from "./test";
import {TEST1, TEST2} from "./test";
import Item from "./Item";
import AppMovies from "./AppMovies";



console.log(testMessage);
console.log(TEST1, TEST2);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <div>
            React App
        </div>
        {/*<App />*/}
        {/*<Item />*/}
        <AppMovies/>
    </div>
);
