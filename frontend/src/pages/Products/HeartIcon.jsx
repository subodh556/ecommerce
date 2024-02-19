import { useEffect } from "react";
import { FaHeart, FaRegHeart} from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addToFavorites,
  removeFromFavorites,
  setFavorites,
} from "../../redux/features/favorites/favoriteSlice";

import {
  addFavoriteToLocalStorage,
  getFavoritesFromLocalStorage,
  removeFavoriteFromLocalStorage,
} from "../../Utils/localStorage";

const HeartIcon = ({ product }) => {
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites) || [];
  const isFavorite = favorites.some((p) => p._id === product._id);
  const { userInfo } = useSelector((state) => state.auth);
  useEffect(() => {
    const favoritesFromLocalStorage = getFavoritesFromLocalStorage();
    dispatch(setFavorites(favoritesFromLocalStorage));
  },[] );

  const toggleFavorites = () => {
    if(userInfo){
      if (isFavorite) {
        dispatch(removeFromFavorites(product));
        // remove the product from the localStorage as well
        removeFavoriteFromLocalStorage(product._id);
      } else {
        dispatch(addToFavorites(product));
        // add the product to localStorage as well
        addFavoriteToLocalStorage(product);
      }
    }else{
      navigate("/login")
    }
    
  };

  return (
    <div
      className="absolute top-2 right-5 cursor-pointer"
      onClick={toggleFavorites}
    >
      {(isFavorite && userInfo) ? (
        <FaHeart className="text-pink-500" />
      ) : (
        <FaRegHeart className="text-white" />
      )}
    </div>
  );
};

export default HeartIcon;
