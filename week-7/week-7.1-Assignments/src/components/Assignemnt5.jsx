import React, { useEffect, useState } from "react";
import axios from "axios";

const Assignemnt5 = () => {
  const [inputText, setInputText] = useState("");
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // const handleFetch=()=>{
  //   setLoading(true);
  //   setError(null);

  //   fetch(`https://api.github.com/users/${inputText}`)
  //   .then((response)=>{
  //     if(!response.ok){
  //       throw new Error('Bad request');
  //     }
  //     return response.json();
  //   })
  //   .then((data)=>setData(data))
  //   .catch((error) => setError(error.message))
  //   .finally(()=>setLoading(false))
  // }

  const handleFetch = async() => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(`https://api.github.com/users/${inputText}`);
      setData(response.data);
    } catch (err) {
      setError(err.message);
    }finally{
      setLoading(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={handleFetch}>Fetch</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <div>
          <p>{data.bio}</p>
          <p>Followers: {data.followers} - Following: {data.following}</p>
        </div>
      )}
    </div>
  );
};

export default Assignemnt5;
