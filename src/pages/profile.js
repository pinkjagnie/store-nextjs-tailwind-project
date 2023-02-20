import React from "react";

import { getSession } from 'next-auth/react';

import UserProfile from "@/components/users/profile/UserProfile";

const ProfilePage = () => {
  return(
    <section className="pt-40 text-center">
      <div>Welcome to your profile page</div>
      <UserProfile />
    </section>
  )
};

export default ProfilePage;

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}