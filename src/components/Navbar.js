import React, { useState } from "react";
import Link from "next/link";

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  const openNavHandler = () => {
    setOpenNav((current) => !current);
    console.log(openNav)
  };

  return(
    <section className='fixed left-0 top-0 w-full z-20 ease-in duration-300'>
      <div className="flex p-4 pl-10">
        <div onClick={openNavHandler} className='cursor-pointer z-10'>
          {openNav ? <AiOutlineClose size={30} style={{color: 'whitesmoke'}}/> : <AiOutlineMenu size={30}/>}
        </div>
        <Link href='/'><h1 className='pl-10 font-bold text-4xl text-fuchsia-600'>Crafty Shop</h1></Link>
      </div>

      {/* Menu */}
      <div className={openNav ? 'absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
              : 'absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'}>
        <ul>
          <li className='p-4 text-4xl text-[whitesmoke] hover:text-gray-500' onClick={openNavHandler}><Link href='/'>Home</Link></li>
          <li className='p-4 text-4xl text-[whitesmoke] hover:text-gray-500' onClick={openNavHandler}><Link href='/#products'>Products</Link></li>
          <li className='p-4 text-4xl text-[whitesmoke] hover:text-gray-500' onClick={openNavHandler}><Link href='/about'>About</Link></li>
          <li className='p-4 text-4xl text-[whitesmoke] hover:text-gray-500' onClick={openNavHandler}><Link href='/contact'>Contact</Link></li>
        </ul>
      </div>
     
    </section>
  )
};

export default Navbar;