import Image from "next/image";
import { ProductType } from "../../../type";
import DiscountBadge from "./DiscountBadge";
import ProductCardSidebar from "./ProductCardSidebar";
import ProductPrice from "./ProductPrice";
import AddToCartButton from "./AddToCartButton";
import Link from "next/link";

interface Props {
  item: ProductType;
}

export default function ProductCard({ item }: Props) {
 

  return (
    <div className="group relative overflow-hidden rounded-md border border-gray-200 bg-white transition-all duration-300 hover:shadow-lg">
      {/* Product Image */}
      <div className="relative flex h-[220px] items-center justify-center overflow-hidden bg-white p-5">
        {/* Discount Badge */}
        <DiscountBadge discount={item.discountPercentage} />

        {/* Image */}
        <div className="relative h-full w-full">
          <Link href={`/products/${item?.id}`} >
          <Image
            src={item.thumbnail}
            alt={item.title}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-contain transition-transform duration-500 group-hover:scale-105"
          />
          </Link>
        </div>

        {/* Sidebar */}
        <ProductCardSidebar />
      </div>

      {/* Product Details */}
      <div className="border-t border-gray-100 p-3">
        {/* Category */}
        <p className="mb-1 text-xs text-gray-500">{item.category}</p>

        {/* Title */}
        <h3 className="line-clamp-1 text-sm font-semibold text-gray-800 transition hover:text-blue-500">
          {item.title}
        </h3>

        {/* Price */}
        <ProductPrice price={item.price} discount={item.discountPercentage} />

        {/* Add To Cart */}
        <AddToCartButton />
      </div>
    </div>
  );
}
