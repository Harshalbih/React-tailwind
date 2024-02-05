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
 
    const handleClose = ()=>{
      setShowModal(false);
    }

    const modal = <Modal onClose={handleClose} actionBar={<Button primary >I accept</Button>}>
      <p>
        Please accept terms and conditions The website you are visiting is protected and accelerated by Incapsula. Your computer may have been infected by malware and therefore flagged by the Incapsula network. Incapsula displays this page for you to verify that an actual human is the source of the traffic to this site, and not malicious software.
        Just click the I'm not a robot checkbox to pass the security check.  to pass the security check. Incapsula w o pass the security check. Incapsula will remember you and will not show this page again. We recommend you run a virus and malware scan on your computer to remove any infection.
      </p>
    </Modal>

  return (
    <div className='relative'>
        <Sidebar />
        <Button onClick={handleClick} primary>Open Modal</Button>
        {showModal && modal}
        </div>
  )
}

export default Modalpage