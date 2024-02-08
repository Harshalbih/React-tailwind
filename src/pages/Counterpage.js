import React from 'react';
import {useState} from 'react';
import Button from '../Components/Button';
import Sidebar from '../Components/Sidebar';

function Counterpage({initialCount}) {
const [count, setCount] = useState(initialCount);
const [valueToAdd, setValueToAdd] = useState();

function increament (){
    setCount(count+1);
}
function decreament (){
    setCount(count-1);
}
const handleChnage = (event) =>{
    const value = parseInt(event.target.value) || 0;
    setValueToAdd(value);
}
const handleSubmit = (event)=>{
    event.preventDefault();
    setCount(count + valueToAdd);
    setValueToAdd(0);
}
  return (
    <div>
        <Sidebar />
        <p className='text-lg text-white m-2 pt-10 pl-5'>Count is {count}</p>
        <div className='flex flex-row p-2'>
        <Button primary onClick={increament}>Increament</Button>
        <Button primary onClick={decreament}>Decreament</Button>
        </div>

        <form onSubmit={handleSubmit}>
            <label className='text-lg text-white m-2 pt-10 pl-5'>Add a lot!</label>
            <input type='number' onChange={handleChnage} className='p-1 m-3 bg-gray-50 border border-gray-300'/>
            <Button primary >Add it</Button>
        </form>
        </div>
  )
}

export default Counterpage;