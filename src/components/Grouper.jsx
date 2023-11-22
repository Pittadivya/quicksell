import "./grouper.css"
import React, { useState } from 'react';

export default function Grouper({options_, setOption}) {

  const [selectedOption, setSelectedOption] = useState('status');
  const [isOpen, setIsopen] = useState(false)

  const handleRadioChange = (event) => {
      setSelectedOption(event.target.value);
      setOption(event.target.value)
      setIsopen(false)
  };

  return (
    <div className='grouper'>
        <div className='grouper-display' onClick={() => setIsopen(!isOpen)}>
            Display
        </div>
        <div className='grouper-options' onClick={() => setIsopen(true)}>
          {isOpen && options_.map((option_, index) => (
              <label key={index} className="label">
                  <input
                      type="radio"
                      name="options"
                      value={option_}
                      checked={selectedOption == option_}
                      onChange={handleRadioChange}
                      />
              {option_}
              </label>
          ))}
        </div>
    </div>
  );
}

