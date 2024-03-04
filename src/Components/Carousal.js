import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar';

function Carousal() {
 const imageData = [
    "https://loveincorporated.blob.core.windows.net/contentimages/gallery/be1e881a-5e2a-4cb7-8e16-c927afc92f63-River_Clutha.jpg",
    "https://wallpapers.com/images/featured/beach-sunset-pictures-43h9lzv2hp9lycm6.jpg",
    "https://t4.ftcdn.net/jpg/05/12/64/51/360_F_512645152_VJUHBFUzLXp0qApk5qf08m6CNmb49c3O.jpg",
    "https://www.southernliving.com/thmb/Rz-dYEhwq_82C5_Y9GLH2ZlEoYw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/gettyimages-837898820-1-4deae142d4d0403dbb6cb542bfc56934.jpg",
    "https://static.vecteezy.com/system/resources/previews/029/556/763/large_2x/colorful-beautiful-fish-in-the-sea-with-beautiful-corals-generative-ai-free-photo.jpg"
]

const [imageIndex, setImageIndex]=useState(0);

const handlePrevious =()=>{
    setImageIndex(
        !imageIndex ? imageData.length -1 : imageIndex -1
    )
    // if(imageIndex ===0){
    //     setImageIndex(imageData.length-1)
    // }else{
    // setImageIndex(imageIndex => imageIndex-1)
    // }
    }

const handleNext =()=>{
    if(imageIndex === imageData.length -1){
        setImageIndex(0)
    }else{
    setImageIndex(imageIndex =>imageIndex+1)
    }
}
useEffect(()=>{
    const timer = setTimeout(() => {
        handleNext();
    }, 5000);
    return () => clearTimeout(timer);
},[handleNext, imageIndex])

  return (
    <>
    <Sidebar />
    <div className='flex justify-center'>
        <button className='font-bold p-4 m-10' onClick={handlePrevious}>Previous</button>
        {
            imageData.map((url, index)=>{
              return  <img src={url} key={index}
              className={'w-[700px] h-[500px] object-contain ' + (imageIndex === index ? "block" : "hidden")}
              alt='nature' />
            })
        }
        <button className='font-bold p-4 m-10' onClick={handleNext}>Next</button>
    </div>
    </>
  )
}

export default Carousal