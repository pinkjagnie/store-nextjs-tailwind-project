import React, { useRef } from "react";
// import { useRouter } from 'next/router';

import { useForm } from "react-hook-form";

const SignUpForm = () => {
  // const emailInputRef = useRef();
  // const passwordInputRef = useRef();

  // const router = useRouter();

  const { register, handleSubmit, reset, formState: { errors, isDirty, isValid } } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  });

  async function onSubmit(data) {
    // event.preventDefault();

    const enteredEmail = data.email;
    const enteredPassword = data.password;

    console.log(enteredEmail)
    console.log(enteredPassword)

    data.email = "";
    data.password = ""

    reset()
    

    // console.log(emailInputRef.current.value);
    // console.log(passwordInputRef.current.value)

    // const enteredEmail = emailInputRef.current.value;
    // const enteredPassword = passwordInputRef.current.value;

    // console.log(enteredEmail);
    // console.log(enteredPassword);

    // if (!enteredEmail || enteredEmail.trim() === '' || !enteredEmail.includes('@') || !enteredPassword || enteredPassword.trim() === '' || enteredPassword.trim().length < 7) {
    //   alert('Invalid details');
    //   return;
    // }

    // const res = await fetch('/api/auth/signup', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     email: enteredEmail,
    //     password: enteredPassword,
    //   }),
    // });

    // const data = await res.json();
    // console.log(data);

    // emailInputRef.current.value = "";
    // passwordInputRef.current.value = ";"
  };

  return(
    <div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <p className="pb-4">Sing Up Form</p>

        <div className="pb-4">
          <label htmlFor='email' className="pr-6">Email</label>
          <input type='email' id='email' {...register("email", { required: {
            value: true,
            message: 'This field is required'
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