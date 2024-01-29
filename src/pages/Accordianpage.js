import React from 'react'
import Accordion from "../Components/Accordion";
function Accordianpage() {

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

  return (
    <><Accordion items={items}/></>
  )
}

export default Accordianpage