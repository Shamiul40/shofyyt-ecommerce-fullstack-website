// 






"use client";

import Link from "next/link";

import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";

import { useSelector } from "react-redux";

import { RootState } from "@/redux/store";

export default function HeaderIcons() {
  const cart = useSelector(
    (state: RootState) => state.shofy.cart
  );

  const favorite = useSelector(
    (state: RootState) => state.shofy.favorite
  );

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const wishlistCount = favorite.length;

  return (
    <div className="flex items-center justify-center gap-4">

      {/* Wishlist */}
      <Link
        href="/favorite"
        aria-label="Wishlist"
        className="group relative flex h-9 w-9 items-center justify-center"
      >
        <FaRegHeart className="text-2xl text-black transition-colors group-hover:text-blue-600" />

        {wishlistCount > 0 && (
          <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-blue-600 px-1 text-[10px] font-semibold text-white">
            {wishlistCount}
          </span>
        )}
      </Link>

      {/* Shopping Cart */}
      <Link
        href="/cart"
        aria-label="Shopping Cart"
        className="group relative flex h-9 w-9 items-center justify-center"
      >
        <HiOutlineShoppingBag className="text-3xl text-black transition-colors group-hover:text-blue-600" />

        {cartCount > 0 && (
          <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-blue-600 px-1 text-[10px] font-semibold text-white">
            {cartCount}
          </span>
        )}
      </Link>

    </div>
  );
}