import "./navbar.css";
import CartIcon from "../../cart/CartIcon";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../../hooks/CartContext";
import{Link} from 'react-router-dom';
function Navbar() {
  const navigate = useNavigate();
  const { cart } = useCartContext();
  return (
    <nav className="navbar">
      <div className="shopping-cart container">
        <div onClick={() => navigate("/")}>CU Store</div>
        <div onClick={() => navigate("/checkout")}>
      

          <CartIcon
            itemCount={cart.length}
          />
        </div>

        {/* <div onClick={()=>navigate("/SignUp")}> Sign Up</div> */}
        <div onClick={()=>navigate("/ProductList")}> add Product</div>
        <div onClick={()=>navigate("/ProductShow")}>  Product Data</div>
       
        
      </div>
    </nav>
  );
}
export default Navbar;
