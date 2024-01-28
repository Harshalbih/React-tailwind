import React from 'react';
import { useState } from 'react';
import { ImCircleDown } from "react-icons/im";
import { ImCircleRight } from "react-icons/im";

function Accordion ({items}){
    const [expandedIndex, setExpnadedIndex] =useState(-1) //-1 will keep index unselected
    

    const renderedItems = items.map((item, index)=>{
        const isExpanded = index === expandedIndex;
        const Icon =<span>{isExpanded ? <ImCircleDown /> : <ImCircleRight />}</span>

        const handleAccordion = ()=> {
            if (expandedIndex === index){
                setExpnadedIndex(-1) //for closing
            }else{
            setExpnadedIndex(index); //for opening
            }
        }


        return(
            
                <div key={item.id}>
                <div className="flex p-3 bg-gray-50 border-b items-center"onClick={handleAccordion}>
                    {Icon}{item.label}</div>
                {isExpanded && <div className='border-b p-5'>{item.content}</div>}
                </div>
            
        )
    })

    return (
        <div className='border-x border-t rounded m-8'>{renderedItems}</div>
    )
}
export default Accordion;