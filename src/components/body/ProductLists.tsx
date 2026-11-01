
import Container from "../header/Container"
import ProductCard from "./ProductCard"

export default function ProductLists({products}) {
    console.log(products)

  return (
    
     <Container>
         productlist

         {
            products.map(item=>(
                <ProductCard key={item.id} item={item}></ProductCard>
            ))
         }
     </Container>
    
  )
}
