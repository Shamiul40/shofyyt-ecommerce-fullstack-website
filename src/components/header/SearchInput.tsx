
"use client";

import { useState } from "react";
import { IoSearch, IoClose } from "react-icons/io5";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  console.log(search)

  return (
    <div className="w-full ">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex h-8 w-full border-[2px] border-blue-600 transition-all duration-300 hover:border-blue-700 focus-within:border-blue-700 focus-within:shadow-[0_0_5px_rgba(37,99,235,0.4)]"
      >
        {/* Search Input */}
        <div className="flex min-w-0 flex-1 items-center">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products here..."
            className="h-full min-w-0 flex-1 bg-white px-4 text-sm text-gray-700 outline-none placeholder:text-gray-400"
          />

          {/* Clear Button */}
          {search.length > 0 && (
            <button
              type="button"
              onClick={() => setSearch("")}
              aria-label="Clear search"
              className="mr-2 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-gray-400 transition-all duration-200 hover:bg-gray-100 hover:text-gray-700"
            >
              <IoClose className="text-xl" />
            </button>
          )}
        </div>

        {/* Search Button */}
        <button
          type="submit"
          aria-label="Search products"
          className="group flex w-10 shrink-0 items-center justify-center border-l border-blue-600 bg-[#477fbd] text-white transition-all duration-300 hover:bg-blue-700 active:bg-blue-800"
        >
          <IoSearch className="text-lg transition-transform duration-300 group-hover:scale-110" />
        </button>
      </form>
    </div>
  );
}

