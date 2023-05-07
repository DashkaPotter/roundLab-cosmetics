import { useSelector } from "react-redux";
import dataProducts from "../../data/dataProducts";
import { getSelectedCategory } from "../../redux/producstSlice";
import AllCategories from "../Filter/AllCategories";
import Product from "./Product";


const Products = () => {
    const selectedCategory = useSelector(getSelectedCategory)
    return(
        <div>
            <AllCategories/>
            <div className="product-wrap">
            <div  className="product">
            {dataProducts
            .filter(product => {
                if(selectedCategory === "All") return true;
                return selectedCategory === product.category
            })
            .map(product => <Product product={product}/>)}
            </div>
            </div>
            
        </div>
    )
}
export default Products;