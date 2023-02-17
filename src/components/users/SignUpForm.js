import React from "react";

const SignUpForm = () => {
  return(
    <div>

      <form>
        <p className="pb-4">Sing Up Form</p>

        <div className="pb-4">
          <label>Email</label>
          <input type="email" required />
        </div>

        <div className="pb-4">
          <label>Password</label>
          <input type="password" required />
          <p className="text-sm">Minimum length: 7 characters</p>
        </div>

        <button type="button">Sign up</button>

      </form>
    
    </div>
  )
};

export default SignUpForm;