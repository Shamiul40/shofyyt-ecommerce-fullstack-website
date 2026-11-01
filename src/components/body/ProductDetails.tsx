import { ProductType } from "../../../type";



import { FiEye, FiStar } from "react-icons/fi";
import ProductPrice from "./ProductPrice";
import ProductImages from "./ProductImages";
import AddToCartButton from "./AddToCartButton";

interface Props {
  product: ProductType;
}

export default function ProductDetails({ product }: Props) {

  const averageRating = product.rating;

  return (

    <div className="grid grid-cols-1 gap-8 py-8 md:grid-cols-2">

      {/* LEFT SIDE - PRODUCT IMAGES */}

      <ProductImages
        images={
          product.images?.length
            ? product.images
            : [product.thumbnail]
        }
        title={product.title}
      />


      {/* RIGHT SIDE - PRODUCT DETAILS */}

      <div className="space-y-4">

        {/* Product Title */}

        <h1 className="text-2xl font-bold text-gray-900">
          {product.title}
        </h1>


        {/* Price & Rating */}

        <div className="flex flex-wrap items-center justify-between gap-3">

          <ProductPrice
            price={product.price}
            discount={product.discountPercentage}
            showSaving
          />

          <div className="flex items-center gap-1 text-sm">

            <FiStar className="fill-orange-400 text-orange-400" />

            <span className="font-semibold">
              {averageRating.toFixed(1)}
            </span>

            <span className="text-gray-500">
              ({product.reviews?.length || 0} reviews)
            </span>

          </div>

        </div>


        {/* People Viewing */}

        <p className="flex items-center gap-2 text-sm text-gray-700">

          <FiEye />

          <span className="font-semibold">
            250+
          </span>

          people are viewing this right now

        </p>


        {/* Description */}

        <p className="text-sm leading-6 text-gray-600">
          {product.description}
        </p>


        {/* Warranty */}

        <p className="text-sm text-gray-700">
          {product.warrantyInformation}
        </p>


        {/* Brand */}

        <p className="text-sm text-gray-700">
          Brand:{" "}
          <span className="font-semibold text-black">
            {product.brand}
          </span>
        </p>


        {/* Category */}

        <p className="text-sm text-gray-700">
          Category:{" "}
          <span className="font-semibold text-black">
            {product.category}
          </span>
        </p>


        {/* Tags */}

        <div className="flex flex-wrap items-center gap-2 text-sm">

          <span className="text-gray-700">
            Tags:
          </span>

          {product.tags?.map((tag) => (

            <span
              key={tag}
              className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-700"
            >
              {tag}
            </span>

          ))}

        </div>


        {/* Add To Cart */}

        <AddToCartButton />


        {/* Payment Methods */}

        <div className="rounded-md bg-gray-100 p-5 text-center">

          <div className="flex flex-wrap justify-center gap-3 text-sm font-bold">

            <span className="rounded bg-blue-700 px-2 py-1 text-white">
              AMEX
            </span>

            <span className="rounded bg-white px-2 py-1 text-gray-700">
              G Pay
            </span>

            <span className="rounded bg-white px-2 py-1 text-red-600">
              MasterCard
            </span>

            <span className="rounded bg-white px-2 py-1 text-blue-700">
              VISA
            </span>

          </div>

          <p className="mt-3 text-sm font-semibold text-gray-800">
            Guaranteed safe & secure checkout
          </p>

        </div>

      </div>

    </div>

  );
}