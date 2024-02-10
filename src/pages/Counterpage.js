import React from 'react';
// import {useState} from 'react';
import { useReducer } from 'react';
import Button from '../Components/Button';
import Sidebar from '../Components/Sidebar';

const reducer = (state, action) =>{
    switch (action.type) {
        case 'increment':
            return {
                ...state,
                count: state.count + 1, // Update count by adding valueToAdd
            };
            case 'decrement':
            return {
                ...state,
                count: state.count - 1, // Update count by adding valueToAdd
            };
            case 'change-value-to-add':
            return {
                ...state,
                count: state.count + state.valueToAdd, // Update count by adding valueToAdd
                valueToAdd: ''
            };
            case 'set-value-to-add':
            return {
                ...state,
                valueToAdd: action.payload, // Update count by adding valueToAdd
            };
    
        default:
            return state;
    }
    // if(action.type === 'increment'){
    //     return {
    //         ...state,
    //         count: state.count + 1, // Update count by adding valueToAdd
    //     };
    // }
    // if (action.type === 'decrement'){
    //     return {
    //         ...state,
    //         count: state.count - 1, // Decrement count by 1
    //     };
    // }
    // if (action.type === 'change-value-to-add'){
    //     return {
    //         ...state,
    //         count: state.count + state.valueToAdd,
    //         valueToAdd: 0,  
    //     };
    }
    

function Counterpage({initialCount}) {
// const [count, setCount] = useState(initialCount);
// const [valueToAdd, setValueToAdd] = useState();
const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: '',
});

function increment (){
//     setCount(count+1);
      dispatch({
        type: 'increment',
      });
}
function decrement (){
//     setCount(count-1);
dispatch({
    type: 'decrement',
  });
}
const handleChange = (event) =>{
   const value = parseInt(event.target.value) || 0;
//     setValueToAdd(value);
dispatch({
    type: 'set-value-to-add',
    payload: value,
  });
}
const handleSubmit = (event)=>{
    event.preventDefault();
    dispatch({
        type: 'change-value-to-add',
    })
//     setCount(count + valueToAdd);
//     setValueToAdd(0);
}

  return (
    <div>
        <Sidebar />
        <p className='text-lg text-white m-2 pt-10 pl-5'>Count is {state.count}</p>
        <div className='flex flex-row p-2'>
        <Button primary onClick={increment}>Increment</Button>
        <Button primary onClick={decrement}>Decrement</Button>
        </div>

        <form onSubmit={handleSubmit}>
            <label className='text-lg text-white m-2 pt-10 pl-5'>Add a lot!</label>
            <input 
            value = {state.valueToAdd}
            type='number' 
            onChange={handleChange} 
            className='p-1 m-3 bg-gray-50 border border-gray-300'/>
            <Button primary >Add it</Button>
        </form>
        </div>
  )
}

export default Counterpage;