import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { signIn } from 'next-auth/react'
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const router = useRouter();

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

    const result = await signIn('credentials', {
      redirect: false,
      email: enteredEmail,
      password: enteredPassword,
    });

    if (!result.error) {
      // set some auth state
      router.replace('/');
    } else {
      setIsError(true);
      setErrorMsg(result.error);
      console.log(result.error)
    }

  }

  return(
    <div>

      {isError && <div className="text-bold text-xl text-red-600 pb-10">{errorMsg}</div>}

      <form onSubmit={handleSubmit(onSubmit)}>
        <p className="pb-4">Login Form</p>

        <div className="pb-4">
          <label htmlFor='email' className="pr-6">Email</label>
          <input type='email' id='email' {...register("email", { required: {
            value: true,
            message: 'This field is required'
          }, pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "Please enter a valid email"
          } })}/>
        </div>

        <div className="pb-6">
          <label htmlFor='password' className="pr-6">Password</label>
          <input type='password' id='password' {...register("password", { required: {
            value: true,
            message: 'This field is required'
          }, minLength: {
            value: 7,
            message: 'Minimum length: 7 characters' 
          } })}/>
        </div>

        <div>
          <Link href='/signup' className='py-2 px-8 outline rounded-sm bg-slate-300 font-bold text-sm text-gray-800 cursor-pointer'>Create an account</Link>
        </div>

        <button type="submit" className='outline mt-6 px-4 py-6 bg-slate-700 disabled:bg-gray-400 text-[whitesmoke]' disabled={!isDirty || !isValid}>Login</button>

      </form>
    
    </div>
  )
};

export default LoginForm;