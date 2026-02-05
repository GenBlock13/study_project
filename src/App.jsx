import React from 'react';
import './index.css'
import Num from './test'

const App = () => {

    const name = 'Alex';
    const age = 16;

    const attr = 'hello'

    function testGood(age) {
        let result;

        if (age >= 18) {
            result = 'good'
        } else if (age < 18) {
            result = 'bad'
        }

        return result;
    }

    return (
        <div>
            <div className={attr}>
                <p>Just a text for our component</p>
                <p>{name}</p>
                <p>{testGood(age)}</p>
            </div>

            <div>{Num}</div>

        </div>
    )
};

export default App;