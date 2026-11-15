"use client";

import { useDispatch, useSelector } from "react-redux";
import { FiEye, FiHeart, FiShoppingCart } from "react-icons/fi";
import { toast } from "react-hot-toast";

import { ProductType } from "../../../type";
import { toggleFavorite } from "@/redux/ShofySlice";
import { RootState, AppDispatch } from "@/redux/store";

interface Props {
  product: ProductType;
}

export default function ProductCardSidebar({ product }: Props) {
  const dispatch = useDispatch<AppDispatch>();

  // Get Favorite Products
  const favorite = useSelector(
    (state: RootState) => state.shofy.favorite
  );

  // Check Product Is Favorite
  const isFavorite = favorite.some(
    (item) => item.id === product.id
  );

  // Toggle Favorite
  const handleFavorite = () => {
    dispatch(toggleFavorite(product));

    if (isFavorite) {
      toast.success("Removed from wishlist!");
    } else {
      toast.success("Added to wishlist!");
    }
  };

  return (
    <div className="absolute right-3 top-1/2 flex -translate-y-1/2 translate-x-12 flex-col gap-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">

      {/* Add To Cart */}
      <button
        aria-label="Add to cart"
        className="flex h-9 w-9 items-center justify-center rounded-sm bg-blue-500 text-white transition hover:bg-black"
      >
        <FiShoppingCart size={17} />
      </button>

      {/* Favorite Button */}
      <button
        onClick={handleFavorite}
        aria-label={
          isFavorite ? "Remove from wishlist" : "Add to wishlist"
        }
        aria-pressed={isFavorite}
        className={`flex h-9 w-9 items-center justify-center rounded-sm shadow transition ${
          isFavorite
            ? "bg-red-500 text-white"
            : "bg-white text-gray-800 hover:bg-blue-500 hover:text-white"
        }`}
      >
        <FiHeart
          size={17}
          className={isFavorite ? "fill-current" : ""}
        />
      </button>

      {/* Quick View */}
      <button
        aria-label="Quick view"
        className="flex h-9 w-9 items-center justify-center rounded-sm bg-white text-gray-800 shadow transition hover:bg-blue-500 hover:text-white"
      >
        <FiEye size={17} />
      </button>

    </div>
  );
}