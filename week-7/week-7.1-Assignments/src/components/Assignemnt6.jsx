import React, { useState } from 'react'

const Assignemnt6 = () => {
  const [inputText,setInputText]=useState("");
  const [otpInput,setOtpInput]=useState("");
  const [otp,setOtp]=useState(false);

  const clickHandler=()=>{
    if(inputText.length<10){
      alert('Enter 10 digits phone number');
      return;
    }
    setOtp(true);
  }

  const loginHandler = () => {
    console.log('Login with OTP:', otpInput);
  }

  return (
    <div>
      <p>Login via OTP</p>
      {otp ? (
        <>
        <input
            type='number'
            value={otpInput}
            onChange={(e) => setOtpInput(e.target.value)}
            placeholder="Enter OTP"
          />
          <button onClick={loginHandler}>Login</button>
        </>
      ) : (
        <>
        <input type='text' value={inputText} onChange={(e)=>setInputText(e.target.value)}
                      placeholder="Enter 10-digit phone number"
        />
      <button onClick={clickHandler}>Send OTP</button>
        </>
      )
      }
    </div>
  )
}

export default Assignemnt6