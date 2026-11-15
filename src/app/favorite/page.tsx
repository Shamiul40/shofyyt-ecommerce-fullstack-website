"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { removeFromFavorite } from "@/redux/ShofySlice";

import Container from "@/components/header/Container";
import ProductCard from "@/components/body/ProductCard";

export default function FavoritePage() {

  const dispatch = useDispatch<AppDispatch>();

  const favorite = useSelector(
    (state: RootState) => state.shofy.favorite
  );

  return (
    <Container>
      <div className="py-10">

        <h1 className="mb-6 text-2xl font-bold">
          My Wishlist ({favorite.length})
        </h1>

        {favorite.length === 0 ? (
          <div className="py-20 text-center">
            <h2 className="text-xl font-semibold">
              Your Wishlist is Empty!
            </h2>

            <p className="mt-2 text-gray-500">
              You haven't added any products to your wishlist.
            </p>
          </div>
        ) : (

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">

            {favorite.map((item) => (
              <div key={item.id}>

                <ProductCard item={item} />

                <button
                  onClick={() => dispatch(removeFromFavorite(item.id))}
                  className="mt-2 w-full rounded-md bg-red-500 py-2 text-sm text-white transition hover:bg-red-600"
                >
                  Remove from Wishlist
                </button>

              </div>
            ))}

          </div>

        )}

      </div>
    </Container>
  );
}