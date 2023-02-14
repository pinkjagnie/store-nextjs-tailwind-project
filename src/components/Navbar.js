import React from "react";

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  return(
    <section className='fixed left-0 top-0 w-full flex p-4 z-10 ease-in duration-300'>
      <AiOutlineMenu size={30}/>
      <h1 className='pl-10 font-bold text-4xl text-fuchsia-600'>Crafty Shop</h1>
    </section>
  )
};

export default Navbar;