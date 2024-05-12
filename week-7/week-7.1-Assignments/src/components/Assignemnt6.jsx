import React, { useState } from 'react'

const Assignemnt6 = () => {
  const [inputText,setInputText]=useState(0)
  return (
    <div>
      <p>Login via OTP</p>
      <input type='number' value={inputText} onChange={(e)=>setInputText(Number(e.target.value))}/>
      <button>Send OTP</button>
    </div>
  )
}

export default Assignemnt6