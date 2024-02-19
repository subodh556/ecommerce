import { Link } from "react-router-dom";
import HeartIcon from "./HeartIcon";

const Product = ({ product }) => {
  return (
    <div className="w-[30rem] ml-[1rem] p-2 relative">
      
      <div className="relative ">
        <img
          src={product.image}
          alt={product.name}
          className="w-[30rem] h-[18rem] rounded"
        />
        <HeartIcon product={product} />
      </div>
      <Link to={`/product/${product._id}`}>
      <div className="p-4">
        
          <h2 className="flex justify-between items-center">
            <div className="text-lg">{product.name}</div>
            <span className="bg-pink-100 text-pink-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300">
              $ {product.price}
            </span>
          </h2>
        
      </div>
      </Link>
    </div>
  );
};

export default Product;
