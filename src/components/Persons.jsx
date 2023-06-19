import React, { useState} from 'react'

const Person = (props) => {
    const [currentAge, setNewAge] = useState(props.initialAge);
    return (
    <div>
        <h1>{props.fullName}</h1>
        <p>Age: {currentAge}</p>
        <button onClick ={ (event) => setNewAge(currentAge + 1)}>Add 1 year</button>
        <p>Hair Color: {props.hairColor}</p>
    </div>
    );
}


export default Person;