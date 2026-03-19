import React from "react";

const UserName = (props) => {

    return (
        props.userAge > 20 ? (
            <p>
                {props.userName}
                <button onClick={props.changeName(props.userID, 'Test Name')}>
                    _ Change name _
                </button>
                {props.userID}
            </p>
        ) : (
            <p>{props.userName} {props.userAge}</p>
        )
    )
}

export default UserName