import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

interface ShopButtonProps {
  href: string;
  text?: string;
}

export default function ShopButton({
  href,
  text = "Shop Now",
}: ShopButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3
      text-sm font-semibold text-black transition-all duration-300
      hover:bg-yellow-400 hover:gap-3"
    >
      {text}
      <FiArrowRight size={18} />
    </Link>
  );
}
