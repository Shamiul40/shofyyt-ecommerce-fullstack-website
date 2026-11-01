// interface Props {
//   price: number;
//   discount: number;
// }

// export default function ProductPrice({ price, discount }: Props) {

//   const discountedPrice = price - (price * discount) / 100;

//   return (
//     <div className="mt-1 flex items-center gap-2">

//       <del className="text-xs text-gray-400">
//         ${price.toFixed(2)}
//       </del>

//       <span className="text-sm font-semibold text-blue-500">
//         ${discountedPrice.toFixed(2)}
//       </span>

//     </div>
//   );
// }





interface Props {
  price: number;
  discount: number;
  showSaving?: boolean;
}

export default function ProductPrice({
  price,
  discount,
  showSaving = false,
}: Props) {

  const discountedPrice = price - (price * discount) / 100;
  const savings = price - discountedPrice;

  return (
    <div>

      <div className="flex items-center gap-2">

        <del className="text-xs text-gray-400">
          ${price.toFixed(2)}
        </del>

        <span className="text-sm font-semibold text-blue-500">
          ${discountedPrice.toFixed(2)}
        </span>

      </div>

      {showSaving && (
        <p className="mt-3 text-sm text-gray-600">
          You are saving{" "}
          <span className="font-semibold text-green-600">
            ${savings.toFixed(2)}
          </span>{" "}
          upon purchase
        </p>
      )}

    </div>
  );
}