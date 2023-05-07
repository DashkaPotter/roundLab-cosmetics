import { useDispatch } from "react-redux";
import dataProducts from "../../data/dataProducts";
import { removeItemFromCart } from "../../redux/cartSlice";


const CartItem =({cartItem}) => {
    const products = dataProducts.find(item => item.id === cartItem.productId)
    const dispatch = useDispatch()
    
    console.log(products)
    return(
        <div >
            <div className="cart-wrap">
                <div className="cart-name">
                <p className="cart-par par-name">{products.name}</p>
                <p className="cart-par par-name">{products.beautyProduct}</p>
                </div>
                <div className="par">
                <p className="cart-par cart-quantity"> Quantity: {cartItem.quantity}</p>
            <p>Price:{products.price*cartItem.quantity}$</p>
            <span onClick={() => {dispatch(removeItemFromCart({cartItemId:cartItem.id}))}}>
            <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" width="20px"alt="remove-icon"/>
            </span>
                </div>
            </div>
        </div>
    )
}
export default CartItem;