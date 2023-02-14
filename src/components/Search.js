import React, { useState } from "react";

import { SiSnapcraft } from 'react-icons/si';
import { SlMagnifier } from 'react-icons/sl';

const Search = () => {
  const [search, setSearch] = useState("");

  const searchHandler = (event) => {
    event.preventDefault();
    console.log(search)
    setSearch("")
  };

  return(
    <section className="h-[70vh]">
      <div className="pt-28">
        <h1 className="font-bold text-2xl text-center">Are you looking for something?</h1>
        <h2 className="font-bold text-xl text-center"><SiSnapcraft size={20} style={{display: 'inline'}} /> Just search</h2>
      </div>

      {/* Search bar */}
      <div className="w-[80%] h-[25vh] mt-10 mx-auto rounded-md bg-fuchsia-800 flex items-center justify-center">
        <input type="search" name="search" placeholder="Search" value={search} className="bg-gray-100 text-gray-700 w-[80%] h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none" onChange={event => {setSearch(event.target.value)}} />
        <button type="submit" className="-ml-12" onClick={searchHandler}>
           <SlMagnifier size={30} style={{color: 'rgb(134 25 143)'}} />
        </button>
      </div>

    </section>
  )
};

export default Search;