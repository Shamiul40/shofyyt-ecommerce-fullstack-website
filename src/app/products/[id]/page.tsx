// import { getData } from "@/helpers";
// import { Suspense } from "react";
// import { ProductType } from "../../../../type";
// import Container from "@/components/header/Container";
// import ProductImages from "@/components/body/ProductImages";

// interface Props {
//   params: {
//     id: string;
//   };
// }

// export default async function ProductDetailsPage({ params }: Props) {
//   const {id} =await params
//   const endpoint = `https://dummyjson.com/products/${id}`
//   const product :ProductType = getData(endpoint)
//   return (
    
//       <Container>
//         <ProductImages  images={product?.images}></ProductImages>
//       </Container>
//   );
// }





import { Suspense } from "react";

import Container from "@/components/header/Container";


import { ProductType } from "../../../../type";

import { notFound } from "next/navigation";
import ProductDetails from "@/components/body/ProductDetails";
import ProductReviews from "@/components/body/ProductReviews";


interface Props {
  params: Promise<{
    id: string;
  }>;
}


// Main Page

export default function ProductDetailsPage({ params }: Props) {

  return (

    <Container>

      <Suspense
        fallback={
          <div className="py-20 text-center">
            Loading Product...
          </div>
        }
      >

        <ProductDetailsContent params={params} />

      </Suspense>

    </Container>

  );

}


// Product Data

async function ProductDetailsContent({ params }: Props) {

  const { id } = await params;

  const response = await fetch(
    `https://dummyjson.com/products/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    notFound();
  }

  const product: ProductType = await response.json();


  return (

    <div>

      {/* Product Details */}

      <ProductDetails product={product} />


      {/* Product Reviews */}

      <ProductReviews product={product} />

    </div>

  );

}