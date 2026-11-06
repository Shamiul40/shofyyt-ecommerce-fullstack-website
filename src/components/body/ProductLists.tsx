import { ProductType } from "../../../type";
import Container from "../header/Container";
import ProductCard from "./ProductCard";

interface Props {
  products: ProductType[];
}

export default function ProductLists({ products }: Props) {
  

  return (
    <Container>
      
      <div  className="grid grid-cols-2 gap-4 py-8 md:grid-cols-3 lg:grid-cols-4">
        {products.map((item) => (
        <ProductCard key={item?.id} item={item}></ProductCard>
      ))}
      </div>
    </Container>
  );
}
