import { useSelector } from "react-redux"
import { getCartItems, getTotalPrice } from "../../redux/cartSlice"
import CartItem from "./CartItem"


const Cart =() => {
    const totalPrice = useSelector(getTotalPrice);
    const cartItems = useSelector(getCartItems);
    const CheckOutAlert = () =>{
        alert('This Shop is not real)It was made only for educational purposes')
    }
    return(
        

        <div className="">
        {cartItems.length === 0 ? (
            <div className="cart-empty">
            <h3 className="CartHeading">Your cart is empty</h3>
            </div>
        ) : (
            <div className="cartItems">
            {cartItems.map((cartItem) => (
                <CartItem cartItem={cartItem} />
            ))}
            <div className="totalPrice">
            <h3 className="">TOTAL: ${totalPrice}</h3>
            <button className="checkout" onClick={CheckOutAlert}>CHECKOUT</button>
            </div>
            
        </div>
        )}
        </div>
    )
}
export default Cart
