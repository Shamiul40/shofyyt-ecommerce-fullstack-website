"use client";

import Image from "next/image";
import Link from "next/link";

import { useDispatch, useSelector } from "react-redux";

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from "@/redux/ShofySlice";

import { RootState } from "@/redux/store";

import Container from "@/components/header/Container";

import {
  FiMinus,
  FiPlus,
  FiTrash2,
  FiShoppingBag,
} from "react-icons/fi";

export default function CartPage() {
  const dispatch = useDispatch();

  const cart = useSelector(
    (state: RootState) => state.shofy.cart
  );

  const getDiscountPrice = (price: number, discount: number) => {
    return price - (price * discount) / 100;
  };

  const subtotal = cart.reduce((total, item) => {
    const price = getDiscountPrice(
      item.price,
      item.discountPercentage
    );

    return total + price * item.quantity;
  }, 0);

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Empty Cart
  if (cart.length === 0) {
    return (
      <Container>
        <div className="flex min-h-[65vh] flex-col items-center justify-center text-center">

          <div className="mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-gray-100">
            <FiShoppingBag className="text-5xl text-gray-400" />
          </div>

          <h2 className="text-2xl font-semibold text-gray-800">
            Your Cart is Empty!
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Looks like you haven't added anything to your cart yet.
          </p>

          <Link
            href="/products"
            className="mt-6 rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Continue Shopping
          </Link>

        </div>
      </Container>
    );
  }

  return (
    <Container>

      <div className="py-10">

        {/* Heading */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">

          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Shopping Cart
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              You have {totalItems} items in your cart.
            </p>
          </div>

          <button
            onClick={() => dispatch(clearCart())}
            className="flex items-center gap-2 text-sm font-medium text-red-500 hover:text-red-700"
          >
            <FiTrash2 />
            Clear Cart
          </button>

        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

          {/* Cart Products */}
          <div className="space-y-4 lg:col-span-2">

            {cart.map((item) => {

              const discountedPrice = getDiscountPrice(
                item.price,
                item.discountPercentage
              );

              return (
                <div
                  key={item.id}
                  className="flex flex-col gap-4 rounded-xl border border-gray-200 p-4 sm:flex-row sm:items-center"
                >

                  {/* Image */}
                  <div className="relative h-24 w-full shrink-0 overflow-hidden rounded-lg bg-gray-100 sm:w-24">

                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      fill
                      sizes="96px"
                      className="object-contain p-2"
                    />

                  </div>

                  {/* Product Info */}
                  <div className="flex flex-1 flex-col justify-between gap-3">

                    <div>
                      <Link
                        href={`/products/${item.id}`}
                        className="font-semibold text-gray-800 transition hover:text-blue-600"
                      >
                        {item.title}
                      </Link>

                      <p className="mt-1 text-sm text-gray-500">
                        {item.category}
                      </p>

                      <div className="mt-2 flex items-center gap-2">

                        <span className="font-semibold text-blue-600">
                          ${discountedPrice.toFixed(2)}
                        </span>

                        {item.discountPercentage > 0 && (
                          <span className="text-sm text-gray-400 line-through">
                            ${item.price.toFixed(2)}
                          </span>
                        )}

                      </div>
                    </div>

                    {/* Quantity and Remove */}
                    <div className="flex flex-wrap items-center justify-between gap-4">

                      <div className="flex items-center rounded-full border border-gray-200">

                        <button
                          onClick={() =>
                            dispatch(decreaseQuantity(item.id))
                          }
                          disabled={item.quantity <= 1}
                          className="p-2 text-gray-600 transition hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-30"
                          aria-label="Decrease quantity"
                        >
                          <FiMinus size={15} />
                        </button>

                        <span className="min-w-8 text-center text-sm font-semibold">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            dispatch(increaseQuantity(item.id))
                          }
                          className="p-2 text-gray-600 transition hover:text-blue-600"
                          aria-label="Increase quantity"
                        >
                          <FiPlus size={15} />
                        </button>

                      </div>

                      <button
                        onClick={() =>
                          dispatch(removeFromCart(item.id))
                        }
                        className="flex items-center gap-1 text-sm text-red-500 transition hover:text-red-700"
                      >
                        <FiTrash2 size={15} />
                        Remove
                      </button>

                    </div>

                  </div>

                  {/* Item Total */}
                  <div className="text-left sm:min-w-24 sm:text-right">

                    <p className="text-xs text-gray-400">
                      Total
                    </p>

                    <p className="font-bold text-gray-800">
                      ${(discountedPrice * item.quantity).toFixed(2)}
                    </p>

                  </div>

                </div>
              );
            })}

            <Link
              href="/products"
              className="inline-block pt-3 text-sm font-medium text-blue-600 hover:underline"
            >
              ← Continue Shopping
            </Link>

          </div>

          {/* Order Summary */}
          <div className="h-fit rounded-xl border border-gray-200 p-6">

            <h2 className="mb-6 text-xl font-bold text-gray-800">
              Order Summary
            </h2>

            <div className="space-y-4 border-b border-gray-200 pb-5">

              <div className="flex justify-between text-sm text-gray-600">
                <span>Subtotal ({totalItems} items)</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-sm text-gray-600">
                <span>Shipping</span>
                <span className="font-medium text-green-600">
                  Free
                </span>
              </div>

              <div className="flex justify-between text-sm text-gray-600">
                <span>Discount</span>
                <span className="text-green-600">
                  -$
                  {cart.reduce(
                    (total, item) =>
                      total +
                      ((item.price * item.discountPercentage) / 100) *
                        item.quantity,
                    0
                  ).toFixed(2)}
                </span>
              </div>

            </div>

            <div className="flex items-center justify-between py-5">

              <span className="font-semibold text-gray-800">
                Total
              </span>

              <span className="text-2xl font-bold text-blue-600">
                ${subtotal.toFixed(2)}
              </span>

            </div>

            <button
              disabled
              className="w-full cursor-not-allowed rounded-full bg-blue-600 py-3 font-semibold text-white opacity-60"
              title="Checkout will be available after checkout integration"
            >
              Proceed to Checkout
            </button>

            <p className="mt-4 text-center text-xs text-gray-400">
              Secure checkout coming soon.
            </p>

          </div>

        </div>

      </div>

    </Container>
  );
}