import React from "react";
import Image from "next/image";

const SingleProduct = ({ product }) => {
  return(
    <div>
      <Image src={product.image} alt={product.title} width={350} height={350}/>
    </div>
  )
};

export default SingleProduct;