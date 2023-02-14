import React from "react";
import Image from "next/image";

const SingleProduct = ({ product }) => {
  return(
    <div className="mx-auto relative">
      <div>
        <Image src={product.image} alt={product.title} width={350} height={250} style={{objectFit: "cover"}} className="rounded-t-md" />
        <div className="bg-fuchsia-200 w-full h-[100px] rounded-b-md">
          <p className="pt-2 pl-6 font-bold">{product.title}</p>
          <p className="pl-6">Price: {product.price} $</p>
          <div className="relative">
            <button type="button" className="block py-2 px-4 rounded-sm absolute right-2 -bottom-8 bg-fuchsia-900 text-[whitesmoke] hover:bg-gray-100 hover:text-fuchsia-900">More</button>
          </div>
        </div>
      </div>

  
    </div>
  )
};

export default SingleProduct;