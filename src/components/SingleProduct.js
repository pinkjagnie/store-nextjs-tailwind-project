import React from "react";
import Image from "next/image";

const SingleProduct = ({ product }) => {
  return(
    <div className="mx-auto">
      <Image src={product.image} alt={product.title} width={350} height={250} style={{objectFit: "cover"}} />
    </div>
  )
};

export default SingleProduct;