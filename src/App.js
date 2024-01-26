import Button from "./Button";
import Accordion from "./Accordion";
import { MdAddTask } from "react-icons/md";
import { MdAssistantDirection } from "react-icons/md";
import { MdBackHand } from "react-icons/md";
import { MdAdsClick } from "react-icons/md";

function App() {

  //For Button
  const handleClick = () =>{
    console.log('click');
  }

  //For Accordion
  const items = [
    {
      id: 'eubc',
      label: 'How are you Harshal?',
      content: 'Im doing great what about you'
    },
    {
      id: 'eubcc',
      label: 'How are you Aniket?',
      content: 'Im doing great what about you'
    },
    {
      id: 'eubec',
      label: 'How are you Shubham?',
      content: 'Im doing great what about you'
    }
  ]

  return (
    <>
     {/* Button */}
    <div>
      <div>
        <Button primary rounded onClick={handleClick}>
          <MdAdsClick />Buy Now</Button>
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
    </>
  );
}

export default App;
