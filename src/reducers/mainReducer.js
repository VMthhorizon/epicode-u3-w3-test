import { ADD_TO_FAVORITES } from "../types/actions";

const initialState = {
  favorites: [],
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
  }
};

export default mainReducer;
