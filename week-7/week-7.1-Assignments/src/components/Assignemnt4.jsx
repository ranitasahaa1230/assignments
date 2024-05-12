import React, { useState } from "react";

const Assignemnt4 = () => {
  const [wordLength, setWordLength] = useState(0);
  const [paragraph, setParagraph] = useState("");

  const generateParagraph = () => {
    const words = [
      "Lorem", "ipsum", "dolor", "sit", "amet,", "consectetur", "adipiscing",
      "elit,", "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore",
      "et", "dolore", "magna", "aliqua.", "Ut", "enim", "ad", "minim",
      "veniam,", "quis", "nostrud", "exercitation", "ullamco", "laboris",
      "nisi", "ut", "aliquip", "ex", "ea", "commodo", "consequat.", "Duis",
      "aute", "irure", "dolor", "in", "reprehenderit", "in", "voluptate",
      "velit", "esse", "cillum", "dolore", "eu", "fugiat", "nulla",
      "pariatur.", "Excepteur", "sint", "occaecat", "cupidatat", "non",
      "proident,", "sunt", "in", "culpa", "qui", "officia", "deserunt",
      "mollit", "anim", "id", "est", "laborum."
    ];

    const filteredWords=words.filter((w)=>w.length===wordLength);
    setParagraph(filteredWords.join(" "))
  };

  return (
    <div>
      <h2>Paragraph Generator</h2>
      <label htmlFor="wordLengthInput">Enter word length:</label>
      <input
        id="wordLengthInput"
        type="number"
        value={wordLength}
        onChange={(e) => setWordLength(Number(e.target.value))}
      />
      <button onClick={generateParagraph}>Generate Paragraph</button>
      <div>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default Assignemnt4;
