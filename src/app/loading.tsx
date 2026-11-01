import React from "react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center bg-white">

      <div className="flex flex-col items-center gap-4">

        {/* Spinner */}
        <div className="relative h-14 w-14">

          <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>

          <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-red-500"></div>

        </div>

        {/* Loading Text */}
        <div className="text-center">
          <h2 className="text-lg font-semibold text-gray-800">
            Loading...
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Please wait while we load your content.
          </p>
        </div>

      </div>

    </div>
  );
}