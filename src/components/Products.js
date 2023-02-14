import React from "react";

import SingleProduct from "./SingleProduct";
import { productsData } from "@/assets/index";

const Products = () => {
  return(
    <section id="products" className="max-w-[1240px] mx-auto pb-12 text-center">
      <h1 className="font-bold text-2xl text-center pb-8">Our latest products</h1>
      
      <div className="grid gap-4 grid-cols-3 grid-rows-2">
        {productsData.map((product, index) => {
          return(
            <SingleProduct key={index} product={product} />
          )
        })}
      </div>
    
    </section>
  )
};

export default Products;