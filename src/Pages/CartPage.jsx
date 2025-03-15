import { useContext } from "react";
import { myContext } from "../Context/ThemeContext";

const CartPage = () => {
  const { cart } = useContext(myContext);
  console.log(cart);
  return (
    <div>
      <h1>Cart Page</h1>
      {cart.map((item) => (
        <div>
          <img src={item.images[0].src} style={{width:"200px", height:"200px"}}/>
          <h5>{item.name}</h5>
          <button>remove</button>
        </div>
      ))}
    </div>
  );
};

export default CartPage;
