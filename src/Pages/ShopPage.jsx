import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { getProducts } from "../data/WooCommerce";
import { myContext } from "../Context/ThemeContext";

const ShopPage = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState(null);
  const{addToCart} = useContext(myContext);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  const handelAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div>
      {loading && <h3>Loading ...</h3>}
      {!loading && products && (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <Link to={`/product/${product.id}`}>
                <img
                  alt={product.images[0].src}
                  src={product.images[0].src}
                  style={{ width: "200px", height: "200px" }}
                />
              </Link>
              <div>{product.name}</div>
              <div>{product.price}</div>
              <button onClick={() => handelAddToCart(product)}>
                Add to cart
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ShopPage;
