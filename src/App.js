import Button from "./Components/Button";
import Accordion from "./Components/Accordion";
import Dropdown from "./Components/Dropdown";
import Slider from "./Components/Slider";

import { MdAddTask } from "react-icons/md";
import { MdAssistantDirection } from "react-icons/md";
import { MdBackHand } from "react-icons/md";
import { MdAdsClick } from "react-icons/md";
import { useState } from "react";

function App() {

  //For Button
  const[text, setText] = useState('Buy Now')
  const handleClick = () =>{
    setText((currentText)=> currentText==='Buy Now' ? 'Done' : 'Buy Now')
  }

  //For Accordion
  const items = [
    {
      id: 'eubc',
      label: 'How are you Harshal?',
      content: 'Im doing great what about you, Aniket'
    },
    {
      id: 'eubcc',
      label: 'How are you Aniket?',
      content: 'Im doing great what about you, Shubham'
    },
    {
      id: 'eubec',
      label: 'How are you Shubham?',
      content: 'Im doing great what about you, Harshal'
    }
  ]

  //For Dropdown
  const options = [
    {label:'Green', value:'Green'},
    {label:'Red', value:'Red'},
    {label:'Yellow', value:'Yellow'}
  ]

  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
     {/* Button */}
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

    {/* Accordion */}
    <Accordion items={items}/>

    {/* Dropdown */}
    <Dropdown options={options}/>

    {/*Slider*/}
    <Slider />
    </div>
  );
}

export default App;
