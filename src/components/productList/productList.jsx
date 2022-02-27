import "./productList.css"
import Product from "../products/product"
import {products} from "../../data";

const ProductList=()=>{
    return (
        <div className="p1">
            <div className="p1-texts">
                <h1 className="p1-title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </h1>
                <p className="p1-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                </p>
            </div>
            <div className="p1-list">
                {products.map((item)=>(
                    <Product key={item.id} img={item.img} />
                ))}
            </div>
        </div>
    )
}

export default ProductList