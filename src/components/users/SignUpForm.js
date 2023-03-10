import React, { useState } from "react";
// import { useRouter } from 'next/router';

import { useForm } from "react-hook-form";

const SignUpForm = () => {
  const [isCreated, setIsCreated] = useState(false);
  const [msgCreated, setMsgCreated] = useState("");

  // const router = useRouter();

  const { register, handleSubmit, reset, formState: { errors, isDirty, isValid } } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  });

  async function onSubmit(data) {
    const enteredEmail = data.email;
    const enteredPassword = data.password;

    console.log(enteredEmail)
    console.log(enteredPassword)

    reset()
    
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

    setIsCreated(true);

    const response = await res.json();
    console.log(response);

    setMsgCreated(response.message)
  };

  return(
    <div>

      {isCreated && <div className="text-bold text-xl text-red-600 pb-10">{msgCreated}</div>}

      <form onSubmit={handleSubmit(onSubmit)}>
        <p className="pb-4">Sing Up Form</p>

        <div className="pb-4">
          <label htmlFor='email' className="pr-6">Email</label>
          <input type='email' id='email' {...register("email", { required: {
            value: true,
            message: 'This field is required'
          }, pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "Please enter a valid email"
          } })} />
          {errors.email && <p className="text-red-600">{errors.email.message}</p>}
        </div>

        <div className="pb-6">
          <label htmlFor='password' className="pr-6">Password</label>
          <input type='password' id='password' {...register("password", { required: {
            value: true,
            message: 'This field is required'
          }, minLength: {
            value: 7,
            message: 'Minimum length: 7 characters' 
          } })} />
          <p className="text-sm">Minimum length: 7 characters</p>
          {errors.password && <p className="text-red-600">{errors.password.message}</p>}
        </div>

        <button type="submit" className={`outline px-4 py-6 bg-slate-700 disabled:bg-gray-400 text-[whitesmoke]`} disabled={!isDirty || !isValid}>Sign up</button>

      </form>
    
    </div>
  )
};

export default SignUpForm;