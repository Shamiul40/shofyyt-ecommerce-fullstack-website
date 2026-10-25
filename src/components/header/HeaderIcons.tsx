"use client";

import Link from "next/link";
import { FaRegHeart, FaShoppingBag } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";

export default function HeaderIcons() {
  const wishlistCount = 0;
  const cartCount = 0;

  return (
    <div className="flex items-center justify-center gap-3">
      {/* Wishlist Icon */}
      <button
        type="button"
        aria-label="Wishlist"
        className="group relative flex h-8 w-8 items-center justify-center"
      >
        <Link href="/favorite">
          <FaRegHeart className="text-2xl text-black transition-colors duration-200 group-hover:text-blue-600" />
        </Link>

        <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-blue-600 px-1 text-[10px] font-semibold leading-none text-white">
          {wishlistCount}
        </span>
      </button>

      {/* Shopping Bag Icon */}
      <button
        type="button"
        aria-label="Shopping bag"
        className="group relative flex h-8 w-8 items-center justify-center"
      >
        <Link href="/cart">
          <HiOutlineShoppingBag className="text-3xl text-black transition-colors duration-200 group-hover:text-blue-600" />
        </Link>

        <span className="absolute -right-1 -top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-blue-600 px-1 text-[10px] font-semibold leading-none text-white">
          {cartCount}
        </span>
      </button>
    </div>
  );
}
