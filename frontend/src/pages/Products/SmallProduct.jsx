import { Link } from "react-router-dom";
import HeartIcon from "./HeartIcon";

const SmallProduct = ({ product }) => {
  return (
   
    <div className="w-[18rem] ml-[2rem] mt-2">
       
      <div className="relative ">
      <Link to={`/product/${product._id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="h-auto  rounded-lg "
        />
        </Link>
        <HeartIcon product={product} />
      </div>
      <Link to={`/product/${product._id}`}>
      <div className="p-4 ">
        
          <h2 className="flex justify-between items-center">
            <div>{product.name}</div>
            <span className="bg-pink-100 text-pink-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300">
              ${product.price}
            </span>
          </h2>
        
      </div>
      </Link>
    </div>
    
  );
};

export default SmallProduct;
