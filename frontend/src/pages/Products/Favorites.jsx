import { useSelector } from "react-redux";
import { selectFavoriteProduct } from "../../redux/features/favorites/favoriteSlice";
import Product from "./Product";

const Favorites = () => {
  const favorites = useSelector(selectFavoriteProduct);

  return (
    <div className="ml-[4rem]">
      <h1 className="text-2xl font-bold ml-[6rem] mb-8 mt-[3rem]">
        Favorite Products
      </h1>

      <div className="flex flex-wrap ml-20 mt-0">
        {favorites.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
