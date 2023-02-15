import React, { useState } from "react";

import AddForm from "@/components/admin/AddForm";

const AdminPage = () => {
  const [isLogged, setIsLogged] = useState(false);

  const adminLoginHandler = (event) => {
    setIsLogged(true);
  };

  const adminLogoutHandler = () => {
    setIsLogged(false)
  };

  return(
    <section className="pt-20">
      <h1 className="text-center font-bold text-2xl">Admin Page</h1>
     
      {!isLogged && <div className="pt-20">
        <button type="button" className="block mx-auto py-4 px-6 bg-gray-gradient font-medium text-[18px] text-[whitesmoke] outline-none rounded-[10px]" onClick={adminLoginHandler}>Login</button>
      </div>}

      {isLogged && <AddForm adminLogoutHandler={adminLogoutHandler} />}

    </section>
  )
};

export default AdminPage;