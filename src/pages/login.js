import React from "react";

import LoginForm from "@/components/users/LoginForm";

const LoginPage = () => {
  return(
    <section className="pt-20 text-center">
      <h1 className="pb-10">Login below</h1>
      <LoginForm />
    </section>
  )
};

export default LoginPage;