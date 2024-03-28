import React, { useState, useEffect } from 'react';

function Home() {
  // Define the color options from the palette
  const colorOptions = [
    { name: 'Blue', value: '#1B6284' },
    { name: 'Gray', value: '#404C5C' },
    { name: 'Slate', value: '#546682' },
    { name: 'Tan', value: '#B88683' },
    { name: 'Orange', value: '#DE6845' },
  ];

  // State to manage the selected color
  const [selectedColor, setSelectedColor] = useState(localStorage.getItem('selectedColor') || colorOptions[0].value);

  // Function to handle color change
  const handleColorChange = (colorValue) => {
    setSelectedColor(colorValue);
    localStorage.setItem('selectedColor', colorValue);
  };

  // Effect to apply color on initial render
  useEffect(() => {
    document.body.style.backgroundColor = selectedColor;
  }, [selectedColor]);

  return (
    <div className="container">
      <h1 className="mt-4 mb-4">Welcome to My App</h1>

      <div className="mb-3">
        <h3>Select Background Color:</h3>
        <div className="btn-group" role="group" aria-label="Color Buttons">
          {colorOptions.map((color, index) => (
            <button
              key={index}
              type="button"
              className="btn"
              style={{ backgroundColor: color.value, color: '#fff' }}
              onClick={() => handleColorChange(color.value)}
            >
              {color.name}
            </button>
          ))}
        </div>
      </div>

      <div className="card p-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend, ligula ac dapibus placerat, tellus massa dapibus lectus, non luctus sapien nisi nec justo.
        </p>
        <p>
          Etiam convallis nulla nec turpis efficitur, quis egestas ex efficitur. Proin ac libero ut elit rhoncus posuere.
        </p>
      </div>
    </div>
  );
}

export default Home;
