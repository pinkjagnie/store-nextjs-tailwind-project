import React from "react";

const AddForm = (props) => {
  return(
    <section>
      <h1>Add an item to the store</h1>

      <button type="button" className="block mx-auto py-4 px-6 bg-gray-gradient font-medium text-[18px] text-[whitesmoke] outline-none rounded-[10px]" onClick={() => props.adminLogoutHandler()}>Logout</button>
    </section>
  )
};

export default AddForm;