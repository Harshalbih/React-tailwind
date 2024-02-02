import React from 'react';
import Modal from '../Components/Modal'
import Sidebar from '../Components/Sidebar';
import { useState } from 'react';
import Button from '../Components/Button';

function Modalpage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () =>{
        setShowModal(true);
    }
  return (
    <div className='relative'>
        <Sidebar />
        <Button onClick={handleClick} primary>Open Modal</Button>
        {showModal && <Modal />}
        </div>
  )
}

export default Modalpage