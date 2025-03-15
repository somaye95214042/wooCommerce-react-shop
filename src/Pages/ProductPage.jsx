import { useParams } from "react-router-dom";
import { getProduct } from "../data/WooCommerce";
import { useContext, useEffect, useState } from "react";
import { myContext } from "../Context/ThemeContext";

const ProductPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const { addToCart, removeProduct, updateCart} = useContext(myContext);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProduct(id);
      setProduct(data);
      setLoading(false);
    };
    fetchProduct();
  }, [id]);

  const handelAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div>
      {loading && <h3>Loading ...</h3>}
      {!loading && product && (
        <div>
          <img
            alt={product.images[0].src}
            src={product.images[0].src}
            style={{ width: "200px", height: "200px" }}
          />
          <div> {product.name}</div>
          <div> {product.price}</div>
          <button onClick={() => handelAddToCart(product)}>Add to cart</button>
          <button onClick={()=> removeProduct(product)}>Remove</button>
          <button onClick={() => updateCart(product, 1)}>+</button>
          <button onClick={() => updateCart(product, -1)}>-1</button>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
