import { FiShoppingCart } from "react-icons/fi";

interface Props {
  onClick?: () => void;
}

export default function AddToCartButton({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="mt-4 w-full flex justify-center items-center gap-2 rounded-full border border-blue-400 py-2 text-xs font-medium text-gray-700 transition-all duration-300 hover:border-blue-500 hover:bg-blue-500 hover:text-white"
    >
      <FiShoppingCart size={17} /> Add to cart
    </button>
  );
}
