import Link from "next/link";
import { FiArrowLeft, FiShoppingBag } from "react-icons/fi";
import { HiOutlineExclamationCircle } from "react-icons/hi2";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-gray-50 px-4 py-16">
      <div className="mx-auto w-full max-w-2xl text-center">
        {/* 404 Illustration */}
        <div className="relative mb-6 flex items-center justify-center">
          <h1 className="select-none text-[140px] font-extrabold leading-none tracking-tight text-gray-200 sm:text-[200px]">
            404
          </h1>

          <div className="absolute flex h-20 w-20 items-center justify-center rounded-full bg-[#155563] text-white shadow-lg sm:h-24 sm:w-24">
            <HiOutlineExclamationCircle className="text-5xl sm:text-6xl" />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#155563]">
            Page Not Found
          </p>

          <h2 className="text-2xl font-bold text-gray-900 sm:text-4xl">
            Oops! Something went wrong.
          </h2>

          <p className="mx-auto max-w-md text-sm leading-7 text-gray-500 sm:text-base">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#155563] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-[#10434e] sm:w-auto"
          >
            <FiArrowLeft size={18} />
            Back to Home
          </Link>

          <Link
            href="/products"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3.5 text-sm font-semibold text-gray-700 transition duration-300 hover:border-[#155563] hover:text-[#155563] sm:w-auto"
          >
            <FiShoppingBag size={18} />
            Explore Products
          </Link>
        </div>

        {/* Footer Text */}
        <p className="mt-12 text-sm text-gray-400">
          Error Code: <span className="font-semibold text-gray-600">404</span>
        </p>
      </div>
    </main>
  );
}
