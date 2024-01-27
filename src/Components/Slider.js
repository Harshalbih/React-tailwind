import { useState } from "react";

function Slider() {
  const [age, setAge] = useState(20);

  const handleChange = (e) => {
    setAge(e.target.value);
  };

  return (
    <div className="ml-10 mt-40">
      <h2>Select Age: {age} </h2>
      <input
        type="range"
        min={0}
        max={100}
        value={age}
        onChange={handleChange}
      />
    </div>
  );
}

export default Slider;
