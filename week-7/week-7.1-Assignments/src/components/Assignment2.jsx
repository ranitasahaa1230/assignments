import React, { useState } from "react";

const Assignment2 = () => {
  const colors = [
    "Red",
    "Yellow",
    "Black",
    "Purple",
    "Green",
    "Blue",
    "Default",
  ];
  const [selectedColor, setSelectedColor] = useState("pink");

  const selectedColorHandler = (color) => {
    color === "Default" ? setSelectedColor("pink") : setSelectedColor(color);
  };

  return (
    <div>
      <div style={{ background: selectedColor }} className="colorName"></div>
      {colors.map((color) => (
        <button key={color} onClick={() => selectedColorHandler(color)}>
          {color}
        </button>
      ))}
    </div>
  );
};

export default Assignment2;
