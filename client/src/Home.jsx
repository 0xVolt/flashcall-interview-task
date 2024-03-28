import React, { useState, useEffect } from 'react';

function Home() {
  // Define the color options from the palettes
  const colorOptions = [
    { name: 'Blue', value: '#1B6284', contrastColor: '#fff' },
    { name: 'Gray', value: '#404C5C', contrastColor: '#fff' },
    { name: 'Indigo', value: '#546682', contrastColor: '#fff' },
    { name: 'Tan', value: '#B88683', contrastColor: '#fff' },
    { name: 'Orange', value: '#DE6845', contrastColor: '#fff' },
    { name: 'Brick Red', value: '#A83441', contrastColor: '#fff' },
    { name: 'Taupe', value: '#564D49', contrastColor: '#fff' },
    { name: 'Light Brown', value: '#CFC3B0', contrastColor: '#000' },
    { name: 'Slate Gray', value: '#9D9783', contrastColor: '#000' },
    { name: 'Dark Khaki', value: '#9F864F', contrastColor: '#000' },
  ];

  // State to manage the selected color
  const [selectedColor, setSelectedColor] = useState(localStorage.getItem('selectedColor') || colorOptions[0].value);

  // Function to handle color change
  const handleColorChange = (colorValue) => {
    setSelectedColor(colorValue);
    localStorage.setItem('selectedColor', colorValue);
  };

  // Effect to apply color and text contrast on initial render
  useEffect(() => {
    document.body.style.backgroundColor = selectedColor;

    // Determine contrast color based on background color
    const selectedOption = colorOptions.find(option => option.value === selectedColor);
    document.body.style.color = selectedOption.contrastColor;
  }, [selectedColor]);

  return (
    <div className="container">
      <h1 className="mt-4 mb-4">Here's the Home Page</h1>

      <div className="mb-3">
        <h4>Select a colour you like:</h4>
        <div className="color-grid">
          {colorOptions.map((color, index) => (
            <button
              key={index}
              type="button"
              className="btn btn-outline-secondary color-button"
              style={{ backgroundColor: color.value, color: color.contrastColor }}
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
