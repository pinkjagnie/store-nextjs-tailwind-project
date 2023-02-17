import React from "react";

import SignUpForm from "@/components/users/SignUpForm";

const SignUpPage = () => {
  return(
    <section className="pt-20 text-center">
      <h1 className="pb-10">Sign Up below</h1>
      <SignUpForm />
    </section>
  )
};

export default SignUpPage;