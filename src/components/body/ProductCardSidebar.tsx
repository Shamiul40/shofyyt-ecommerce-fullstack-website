import { FiEye, FiHeart, FiShoppingCart } from "react-icons/fi";


export default function ProductCardSidebar() {
  return (
    <div className="absolute right-3 top-1/2 flex -translate-y-1/2 translate-x-12 flex-col gap-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">

      <button className="flex h-9 w-9 items-center justify-center rounded-sm bg-blue-500 text-white transition hover:bg-black">
        <FiShoppingCart size={17} />
      </button>

      {/* <button className="flex h-9 w-9 items-center justify-center rounded-sm bg-white text-gray-800 shadow transition hover:bg-blue-500 hover:text-white">
        <FiGitCompare size={17} />
      </button> */}

      <button className="flex h-9 w-9 items-center justify-center rounded-sm bg-white text-gray-800 shadow transition hover:bg-blue-500 hover:text-white">
        <FiHeart size={17} />
      </button>

      <button className="flex h-9 w-9 items-center justify-center rounded-sm bg-white text-gray-800 shadow transition hover:bg-blue-500 hover:text-white">
        <FiEye size={17} />
      </button>

    </div>
  );
}