import React, { useState } from "react";

const AddForm = (props) => {
  const [productName, setProductName] = useState();
  const [productPrice, setProductPrice] = useState();
  const [productImage, setProductImage] = useState()

  const formSubmitHandler = (event) => {
    event.preventDefault();

    console.log("Name: " + productName);
    console.log("Price: " + productPrice + "$");
    console.log(productImage);

    setProductName();
    setProductPrice();
    setProductImage()
  };

  return(
    <section className="pb-20">
      <h1 className="py-10 text-center font-bold">Add an item to the store</h1>

      <form className="w-[60%] p-6 pb-8 my-0 mx-[auto] border border-slate-500 rounded-xl bg-slate-800">

        <div className="pb-6">
          <label htmlFor="name" className="font-medium pl-10 text-[whitesmoke]">Product name</label>
          <input type="text" id="name" required className="block w-[95%] my-2 mx-[auto] p-2 border border-gray-400 rounded-md" onChange={event => setProductName(event.target.value)}/>
        </div>

        <div className="pb-6">
          <label htmlFor="price" className="font-medium pl-10 text-[whitesmoke]">Price</label>
          <input type="number" id="price" required className="block w-[95%] my-2 mx-[auto] p-2 border border-gray-400 rounded-md" onChange={event => setProductPrice(event.target.value)}/>
        </div>

        <div className="pb-6">
          <label htmlFor="picture" className="font-medium pl-10 text-[whitesmoke]">Product picture</label>
          <input type="file" id="picture" required className="block w-[95%] my-2 mx-[auto] p-2 border border-gray-400 rounded-md" onChange={event => setProductImage(event.target.files[0])}/>
        </div>

        <button type="button" className="block mx-auto py-4 px-6 font-medium text-[12px] text-[whitesmoke] bg-gray-500 outline-none rounded-md hover:bg-gray-300 hover:text-gray-800" onClick={formSubmitHandler}>Submit</button>

      </form>

      {/* Logout */}
      <div className="pt-10">
        <button type="button" className="block mx-auto py-4 px-6 bg-gray-gradient font-medium text-[18px] text-[whitesmoke] outline-none rounded-[10px]" onClick={() => props.adminLogoutHandler()}>Logout</button>
      </div>

    </section>
  )
};

export default AddForm;