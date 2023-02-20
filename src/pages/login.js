import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';

import { getSession } from 'next-auth/react';

import LoginForm from "@/components/users/LoginForm";

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        router.replace('/');
      } else {
        setIsLoading(false);
      }
    });
  }, [router]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  
  return(
    <section className="pt-20 text-center">
      <h1 className="pb-10">Login below</h1>
      <LoginForm />
    </section>
  )
};

export default LoginPage;