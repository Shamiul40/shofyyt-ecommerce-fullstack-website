interface Props {
  price: number;
  discount: number;
}

export default function ProductPrice({ price, discount }: Props) {

  const discountedPrice = price - (price * discount) / 100;

  return (
    <div className="mt-1 flex items-center gap-2">

      <del className="text-xs text-gray-400">
        ${price.toFixed(2)}
      </del>

      <span className="text-sm font-semibold text-blue-500">
        ${discountedPrice.toFixed(2)}
      </span>

    </div>
  );
}