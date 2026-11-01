import { Suspense } from "react";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default function ProductDetailsPage({ params }: Props) {
  return (
    <Suspense fallback={<div>Loading product...</div>}>
      <ProductContent params={params} />
    </Suspense>
  );
}

async function ProductContent({ params }: Props) {
  const { id } = await params;

  console.log("Product ID:", id);

  return (
    <div>
      Product Details: {id}
    </div>
  );
}