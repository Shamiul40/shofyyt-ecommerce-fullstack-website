import { ProductType } from "../../../type";
import Container from "../header/Container";
import ProductCard from "./ProductCard";

interface Props {
  products: ProductType[];
}

export default function ProductLists({ products }: Props) {
  console.log(products);

  return (
    <Container>
      productlist
      {products.map((item) => (
        <ProductCard key={item?.id} product={item}></ProductCard>
      ))}
    </Container>
  );
}
