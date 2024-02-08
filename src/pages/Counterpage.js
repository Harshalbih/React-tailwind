import React from 'react';
import {useState} from 'react';
import Button from '../Components/Button';

function Counterpage({initialCount}) {
const [count, setCount] = useState(initialCount);

function handleClick (){
    setCount(count+1);
}
  return (
    <div>
        <h1>Counter {count}</h1>
        <Button primary onClick={handleClick}>Increament</Button>
        </div>
  )
}

export default Counterpage;