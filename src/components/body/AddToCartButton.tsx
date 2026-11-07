
// "use client";

// import { useDispatch, useSelector } from "react-redux";
// import { FiShoppingCart, FiPlus, FiMinus } from "react-icons/fi";
// import { toast } from "react-hot-toast";

// import { ProductType } from "../../../type";
// import { addToCart, updateQuantity } from "@/redux/ShofySlice";

// interface Props {
//   product: ProductType;
// }

// export default function AddToCartButton({ product }: Props) {
//   const dispatch = useDispatch();

//   const cartProduct = useSelector((state: any) =>
//     state.shofy.cart.find((item: ProductType) => item.id === product.id),
//   );

//   const quantity = cartProduct?.quantity || 0;

//   const handleAdd = () => {
//     dispatch(addToCart(product));
//     toast.success("Added to cart!");
//   };

//   const handleIncrease = () => {
//     dispatch(
//       updateQuantity({
//         id: product.id,
//         quantity: quantity + 1,
//       }),
//     );
//     toast.success("Quantity increased!");
//   };

//   const handleDecrease = () => {
//     dispatch(
//       updateQuantity({
//         id: product.id,
//         quantity: quantity - 1,
//       }),
//     );

     

//     if (quantity === 1) {
//       toast.success("Removed from cart!");
//     } else {
//       toast.success("Quantity decreased!");
//     }
//   };

//   // Product not in cart
//   if (quantity === 0) {
//     return (
//       <button
//         onClick={handleAdd}
//         className="mt-4 flex w-full items-center justify-center gap-2 rounded-full border border-blue-500 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-blue-500 hover:text-white"
//       >
//         <FiShoppingCart size={18} />
//         Add to Cart
//       </button>
//     );
//   }

//   // Product already in cart
//   return (
//     <div className="mt-4 flex w-full items-center justify-between rounded-full border border-blue-500 px-3 py-2">
//       <button
//         onClick={handleDecrease}
//         className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition hover:bg-red-500 hover:text-white"
//       >
//         <FiMinus size={15} />
//       </button>

//       <span className="text-sm font-semibold text-gray-800">{quantity}</span>

//       <button
//         onClick={handleIncrease}
//         className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-500 text-white transition hover:bg-blue-600"
//       >
//         <FiPlus size={15} />
//       </button>
//     </div>
//   );
// }




"use client";

import { useDispatch, useSelector } from "react-redux";
import { FiShoppingCart, FiPlus, FiMinus } from "react-icons/fi";
import { toast } from "react-hot-toast";

import { ProductType } from "../../../type";
import { addToCart, updateQuantity } from "@/redux/ShofySlice";
import { RootState, AppDispatch } from "@/redux/store";

interface Props {
  product: ProductType;
}

export default function AddToCartButton({ product }: Props) {
  const dispatch = useDispatch<AppDispatch>();

  // Active Product
  const activeProductTitle = useSelector(
    (state: RootState) => state.shofy.activeProductTitle
  );

  // Find Product in Cart
  const cartProduct = useSelector((state: RootState) =>
    state.shofy.cart.find((item) => item.id === product.id)
  );

  const quantity = cartProduct?.quantity || 0;

  const isActive = activeProductTitle === product.title;

  // Add to Cart
  const handleAdd = () => {
    dispatch(addToCart(product));
    toast.success("Added to cart!");
  };

  // Increase Quantity
  const handleIncrease = () => {
    dispatch(
      updateQuantity({
        id: product.id,
        quantity: quantity + 1,
      })
    );

    toast.success("Quantity increased!");
  };

  // Decrease Quantity
  const handleDecrease = () => {
    dispatch(
      updateQuantity({
        id: product.id,
        quantity: quantity - 1,
      })
    );

    if (quantity === 1) {
      toast.success("Removed from cart!");
    } else {
      toast.success("Quantity decreased!");
    }
  };

  // Show Add to Cart Button
  if (!isActive || quantity === 0) {
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

  // Show Quantity Controller
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