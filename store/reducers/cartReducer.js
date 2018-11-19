import * as actionTypes from "../actions/types";

const initialState = {
  list: [],
  newItemId: 1
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM":
      let choice = action.payload;
      let list;
      let item = state.list.find(
        item => item.drink === choice.drink && item.option === choice.option
      );
      if (item) {
        item.quantity++;
        list = [...state.list];
      } else {
        list = state.list.concat(choice);
      }
      return {
        ...state,
        list: list
      };

    case "DELETE_ITEM":
      return {
        ...state,
        list: state.list.filter(item => item !== action.payload)
      };
    case "CHECKOUT":
      return {
        ...state,
        list: action.payload
      };
    default:
      return state;
  }
}
