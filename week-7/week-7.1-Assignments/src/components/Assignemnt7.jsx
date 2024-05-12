import React, { useState } from 'react';

const Assignemnt7 = () => {
  const [name, setName] = useState('');
  const [wishes, setWishes] = useState([]);

  const handleWish = () => {
    const newWishes = [
      `Happy Birthday, ${name}! Wishing you a fantastic day and a wonderful year ahead.`,
      `Wishing you a birthday filled with joy, laughter, and unforgettable moments, ${name}!`,
      `May this special day bring you endless happiness and countless blessings, ${name}!`
    ];
    setWishes(newWishes);
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <button onClick={handleWish}>Done</button>
      
      {wishes.map((wish) => (
        <div key={wish} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
          <p>{wish}</p>
        </div>
      ))}
    </div>
  );
};

export default Assignemnt7;
