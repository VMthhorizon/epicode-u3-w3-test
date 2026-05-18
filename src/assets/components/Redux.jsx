import { Star } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_FAVORITES } from "../../types/actions";

const GetFavorites = (props) => {
  const dispatch = useDispatch();
  const favouritesCount = useSelector((state) => state.favourites.length);

  return (
    <Star
      onClick={() => {
        dispatch({
          type: ADD_TO_FAVORITES,
          payload: props.film,
        });
      }}
    >
      {favouritesCount} Add
    </Star>
  );
};

export default GetFavorites;
