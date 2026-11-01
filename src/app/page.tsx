import Banner from "@/components/body/Banner";
import ProductLists from "@/components/body/ProductLists";
import Footer from "@/components/footer/Footer";
import { getData } from "@/helpers";




export default async function Home() {

  
  const {products} = await getData("https://dummyjson.com/products")


  return (
   <main>
  <Banner></Banner>
    <ProductLists products={products}></ProductLists>
  <Footer></Footer>
   </main>
  );
}
