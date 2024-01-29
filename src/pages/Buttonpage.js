import React from 'react';
import Button from "../Components/Button";
import { MdAddTask } from "react-icons/md";
import { MdAssistantDirection } from "react-icons/md";
import { MdBackHand } from "react-icons/md";
import { MdAdsClick } from "react-icons/md";
import { useState } from "react";

function Buttonpage() {

  const[text, setText] = useState('Buy Now')
  const handleClick = () =>{
    setText((currentText)=> currentText==='Buy Now' ? 'Done' : 'Buy Now')
  }

  return (
    <div>
      <div>
        <Button primary rounded onClick={handleClick}>
          <MdAdsClick />{text}</Button>
      </div>
      <div>
        <Button secondary outline onMouseOver={handleClick}>
        <MdAssistantDirection />Sell</Button>
      </div>
      <div>
        <Button success rounded>
        <MdAddTask />Continue</Button>
      </div>
      <div>
        <Button error>
        <MdBackHand />Click here!</Button>
      </div>
   </div>
  )
}

export default Buttonpage