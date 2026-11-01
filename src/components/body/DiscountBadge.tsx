interface Props {
  discount: number;
}

export default function DiscountBadge({ discount }: Props) {
  return (
    <span className="absolute right-3 top-3 z-10 rounded-md bg-orange-600 px-2 py-1 text-[10px] font-semibold text-white">
      {discount.toFixed(2)}%
    </span>
  );
}