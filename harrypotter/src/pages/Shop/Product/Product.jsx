import { useParams } from "react-router-dom";
import "./Product.scss";
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../../contexts/ShopContext";
import { ProductCard } from "../../../components/ProductCard/ProductCard";
export const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { products} = useContext(ShopContext);
  useEffect(() => {
    const currentProduct = products.find((product) => product.id == id);
    console.log(currentProduct);
    setProduct(currentProduct);
   
  }, [products]);

  return( product ? (
    <div className="product-page">
    <ProductCard product={product}></ProductCard>
    </div>
  ) : (
    <h1 style={{paddingTop:'12rem', textAlign:'center'}}> Product not found</h1>
  )
)};
