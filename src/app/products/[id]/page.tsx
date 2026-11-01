import { getData } from "@/helpers";
import { Suspense } from "react";
import { ProductType } from "../../../../type";
import Container from "@/components/header/Container";
import ProductImages from "@/components/body/ProductImages";

interface Props {
  params: {
    id: string;
  };
}

export default async function ProductDetailsPage({ params }: Props) {
  const {id} =await params
  const endpoint = `https://dummyjson.com/products/${id}`
  const product :ProductType = getData(endpoint)
  return (
    
      <Container>
        <ProductImages  images={product?.images}></ProductImages>
      </Container>
  );
}

