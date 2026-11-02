import { ProductType } from "../../../type";
import { FiStar } from "react-icons/fi";

interface Props {
  product: ProductType;
}

export default function ProductReviews({ product }: Props) {

  return (

    <section className="border-t border-gray-200 py-10">

      <h2 className="mb-6 text-xl font-bold text-gray-900">
        Customer Reviews
      </h2>

      {/* Overall Rating */}

      <div className="mb-8 rounded-md bg-gray-50 p-5">

        <h3 className="text-3xl font-bold text-gray-900">
          {product.rating.toFixed(1)} / 5
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          Based on {product.reviews?.length || 0} reviews
        </p>

      </div>


      {/* Reviews List */}

      <div className="space-y-5 ">

        {product.reviews?.length ? (

          product.reviews.map((review, index) => (

            <div
              key={index}
              className="border-b border-gray-100 pb-5"
            >

              <h3 className="font-semibold text-gray-900">
                {review.reviewerName}
              </h3>


              {/* Rating */}

              <div className="my-2 flex items-center gap-1">

                {[1, 2, 3, 4, 5].map((star) => (

                  <FiStar
                    key={star}
                    size={15}
                    className={
                      star <= review.rating
                        ? "fill-orange-400 text-orange-400"
                        : "text-gray-300"
                    }
                  />

                ))}

              </div>


              {/* Comment */}

              <p className="text-sm leading-6 text-gray-600">
                {review.comment}
              </p>

            </div>

          ))

        ) : (

          <p className="text-sm text-gray-500">
            No reviews available for this product.
          </p>

        )}

      </div>

    </section>

  );

}