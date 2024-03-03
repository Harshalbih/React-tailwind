import React from 'react';
import { Link } from 'react-router-dom';
import { GiClick } from "react-icons/gi";

function Sidebar() {
  return (
    <div>
      <ul className="space-y flex flex-y gap-4 ml-8 pt-2 text-white">
        <li>
          <Link to="/" className="hover:text-blue-300 flex flex-y">Buttons <GiClick className='mt-1'/></Link>
        </li>
        <li>
          <Link to="/accordian" className="hover:text-blue-300 flex flex-y">Accordion <GiClick className='mt-1'/></Link>
        </li>
        <li>
          <Link to="/dropdown" className="hover:text-blue-300 flex flex-y">Dropdown <GiClick className='mt-1'/></Link>
        </li>
        <li>
          <Link to="/slider" className="hover:text-blue-300 flex flex-y">Slider <GiClick className='mt-1'/></Link>
        </li>
        <li>
          <Link to="/modal" className="hover:text-blue-300 flex flex-y">Modal <GiClick className='mt-1'/></Link>
        </li>
        <li>
          <Link to="/table" className="hover:text-blue-300 flex flex-y">Table <GiClick className='mt-1'/></Link>
        </li>
        <li>
          <Link to="/counter" className="hover:text-blue-300 flex flex-y">Counter <GiClick className='mt-1'/></Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
