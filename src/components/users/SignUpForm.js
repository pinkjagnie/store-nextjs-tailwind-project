import React, { useRef, useState } from "react";

import { useRouter } from 'next/router';


const SignUpForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const router = useRouter();

  async function submitHandler(event) {
    event.preventDefault();

    console.log("idzie fetch")

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    console.log(enteredEmail);
    console.log(enteredPassword);

    if (!enteredEmail || !enteredEmail.includes('@') || !enteredPassword || enteredPassword.length < 7) {
      alert('Invalid details');
      return;
    }

    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
      }),
    });

    const data = await res.json();
    console.log(data);
  };

  return(
    <div>

      <form onSubmit={submitHandler}>
        <p className="pb-4">Sing Up Form</p>

        <div className="pb-4">
          <label htmlFor='email' className="pr-6">Email</label>
          <input type='email' id='email' required ref={emailInputRef} />
        </div>

        <div className="pb-4">
          <label htmlFor='password' className="pr-6">Password</label>
          <input type='password' id='password' required ref={passwordInputRef} />
          <p className="text-sm">Minimum length: 7 characters</p>
        </div>

        <button type="submit">Sign up</button>

      </form>
    
    </div>
  )
};

export default SignUpForm;