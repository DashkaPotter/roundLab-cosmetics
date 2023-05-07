import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";
import ChangeQuantity from "../Cart/ChangeQuantity";


const Product = ({product}) => {

    const dispatch = useDispatch();
    const [quantity,setQuantity]= useState(1);

    return(<div className="card">
        <img src={`${product.img}.jpg`} className='img-product' width="200px" alt="beauty-products"/>
        <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <h3 className="beautyProduct">{product.beautyProduct}</h3>
        <div className="price">
            <p className="price-style">Price: ${product.price}</p>
        </div>
        </div>
            
        <div className="quantity"><ChangeQuantity quantity={quantity} setQuantity={setQuantity}/></div>
        
        <div>
        <button className="addCart" onClick={() => {dispatch(addItemToCart({product,quantity}))}}>Add To Cart</button>
        </div>
        
    </div>)
}
export default Product;