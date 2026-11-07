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

import { useDispatch, useSelector } from "react-redux";
import { FiShoppingCart, FiPlus, FiMinus } from "react-icons/fi";
import { toast } from "react-hot-toast";

import { ProductType } from "../../../type";
import { addToCart, updateQuantity } from "@/redux/ShofySlice";


interface Props {
  product: ProductType;
}

export default function AddToCartButton({ product }: Props) {
  const dispatch = useDispatch();

  const cartProduct = useSelector((state: any) =>
    state.shofy.cart.find(
      (item: ProductType) => item.id === product.id
    )
  );

  const quantity = cartProduct?.quantity || 0;

  const handleAdd = () => {
    dispatch(addToCart(product));
    toast.success("Added to cart!");
  };

  const handleIncrease = () => {
    dispatch(
      updateQuantity({
        id: product.id,
        quantity: quantity + 1,
      })
    );
  };

  const handleDecrease = () => {
    dispatch(
      updateQuantity({
        id: product.id,
        quantity: quantity - 1,
      })
    );

    if (quantity === 1) {
      toast.success("Removed from cart!");
    }
  };

  // Product not in cart
  if (quantity === 0) {
    return (
      <button
        onClick={handleAdd}
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-full border border-blue-500 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-blue-500 hover:text-white"
      >
        <FiShoppingCart size={18} />
        Add to Cart
      </button>
    );
  }

  // Product already in cart
  return (
    <div className="mt-4 flex w-full items-center justify-between rounded-full border border-blue-500 px-3 py-2">

      <button
        onClick={handleDecrease}
        className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition hover:bg-red-500 hover:text-white"
      >
        <FiMinus size={15} />
      </button>

      <span className="text-sm font-semibold text-gray-800">
        {quantity}
      </span>

      <button
        onClick={handleIncrease}
        className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-500 text-white transition hover:bg-blue-600"
      >
        <FiPlus size={15} />
      </button>

    </div>
  );
}