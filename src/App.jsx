import React from 'react';
import './index.css'
import './UserName'
import UserName from "./UserName";
import Item from "./Item"

let USERS = [
    {id: 1, name: 'Alex', age: 20, car: 'BMW'},
    {id: 2, name: 'John', age: 20, car: 'Opel'},
    {id: 3, name: 'Marley', age: 27, car: 'Chevrolet'},
    {id: 4, name: 'Chris', age: 18, car: 'Ford'},
]

const App = () => {

    const onClickHandler = (event) => {
        console.log('click', event)
    }

    const onChangeHandler = (event) => {
        console.log('change', event.target.value);
        return event.target.value
    }


    const changeName = (id, newName) => {

        return () => {
            console.log(id, newName);
            // const giveName = onChangeHandler()
            USERS = USERS.map((user) => {
                if (user.id === id) {
                    return {
                        id: user.id,
                        name: newName,
                        age: user.age,
                        car: user.car,
                    }
                }
                return user;
            })
            console.log(USERS);
        };
    }

    const data = [];
    USERS.forEach((user) => {
        const key = generateKey(user);
        data.push(
            <div key={key}>
                <UserName
                    userName={user.name}
                    userID={user.id}
                    userCar={user.car}
                    userAge={user.age}
                    changeName={changeName}
                    // test={4565656}
                    // test2={true}
                    // test3={false}
                    // test4={() => {return 100500}}
                    // test5="Hello World"
                />


            </div>
        );
    })

    return (
        <div>
            {data}
            <input type={"text"} onChange={onChangeHandler}/>
            <button onClick={onClickHandler}>Press the button</button>

        </div>


    )
}

function generateKey(user) {
    return `${user.name}_${user.id}_${user.car}`
}

export default App;