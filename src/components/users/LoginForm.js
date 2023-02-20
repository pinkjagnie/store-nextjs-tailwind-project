import React from "react";
import Link from "next/link";

const LoginForm = () => {

  return(
    <div>

      <form>
        <p className="pb-4">Login Form</p>

        <div className="pb-4">
          <label htmlFor='email' className="pr-6">Email</label>
          <input type='email' id='email' />
        </div>

        <div className="pb-6">
          <label htmlFor='password' className="pr-6">Password</label>
          <input type='password' id='password' />
        </div>

        <div>
          <Link href='/signup' className='py-2 px-8 outline rounded-sm bg-slate-300 font-bold text-sm text-gray-800 cursor-pointer'>Create an account</Link>
        </div>

        <button type="submit" className='outline mt-6 px-4 py-6 bg-slate-700 disabled:bg-gray-400 text-[whitesmoke]'>Login</button>

      </form>
    
    </div>
  )
};

export default LoginForm;