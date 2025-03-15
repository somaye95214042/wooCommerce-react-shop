import { useContext, useEffect, useState } from "react";
import { myContext } from "../Context/ThemeContext";
import { Link } from "react-router-dom";

const Header = () => {
  const [count, setCount] = useState(0);
  const { cart } = useContext(myContext);
  const [showCart, setShowCart] = useState(false);

  console.log(count);
  console.log(cart);

  useEffect(() => {
    const sum = cart.reduce((acc, item) => acc + item.quantity, 0);
    setCount(sum);
  }, [cart]);

  return (
    <header
      style={{ backgroundColor: "blue", height: "50px" }}
      onMouseEnter={() => setShowCart(true)}
      onMouseLeave={() => setShowCart(false)}
    >
      <h1>{count}</h1>
      <Link to="/cart">View Cart</Link>
      {showCart &&
        (cart.length === 0 ? (
          <h1>Cart is Empty</h1>
        ) : (
          cart.map((item) => (
            <div>
              <img src={item.images[0].src} />
              <div>{item.name}</div>
            </div>
          ))
        ))}
    </header>
  );
};

export default Header;
