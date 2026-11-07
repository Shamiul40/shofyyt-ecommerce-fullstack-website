// "use client"

// import { FiShoppingCart } from "react-icons/fi";
// import { useDispatch } from "react-redux";
// import { ProductType } from "../../../type";
// import { addToCart } from "@/redux/ShofySlice";

// interface Props {
//   onClick?: () => void;
// }

// export default function AddToCartButton({product} :{product :ProductType}) {
//   const dispatch = useDispatch();

//   const handleAddToCart=()=>{
//   if(product){
//     dispatch(addToCart(product))
//   }
//   }

//   return (
//     <button
//       onClick={handleAddToCart}
//       className="mt-4 w-full flex justify-center items-center gap-2 rounded-full border border-blue-400 py-2 text-xs font-medium text-gray-700 transition-all duration-300 hover:border-blue-500 hover:bg-blue-500 hover:text-white"
//     >
//       <FiShoppingCart size={17} /> Add to cart
//     </button>
//   );
// }




"use client";

import { useState } from "react";
import { FiShoppingCart, FiCheck } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { ProductType } from "../../../type";
import { addToCart } from "@/redux/ShofySlice";
import toast from "react-hot-toast";

interface Props {
  product: ProductType;
}

export default function AddToCartButton({ product }: Props) {
  const dispatch = useDispatch();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart(product));

    toast.success(`${product.title} added to cart!`);


    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1500);
  };

  return (
    <button
      onClick={handleAddToCart}
      className={`mt-4 flex w-full items-center justify-center gap-2 rounded-full border py-2.5 text-sm font-medium transition-all duration-300 ${
        added
          ? "border-green-500 bg-green-500 text-white"
          : "border-blue-500 text-gray-700 hover:bg-blue-500 hover:text-white"
      }`}
    >
      {added ? (
        <>
          <FiCheck size={18} />
          Added to Cart
        </>
      ) : (
        <>
          <FiShoppingCart size={18} />
          Add to Cart
        </>
      )}
    </button>
  );
}