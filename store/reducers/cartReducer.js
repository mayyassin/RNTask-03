import * as actionTypes from "../actions/types";

const initialState = {
  list: [],
  total: 0,
  newItemId: 1,
  num: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM":
      let choice = action.payload;
      let list;
      let item = state.list.find(
        item => item.drink === choice.drink && item.option === choice.option
      );
      state.num = state.num + 1;
      if (item) {
        item.quantity++;
        list = [...state.list];
      } else {
        list = state.list.concat(choice);
      }
      return {
        ...state,
        list: list,
        total: list.length
      };

    case "REMOVE_ITEM":
      state.num = state.num - 1;
      return {
        ...state,
        list: state.list.filter(item => item !== action.payload),
        total: state.list.length
      };
    case "CHECKOUT":
      state.num = 0;
      return {
        ...state,
        list: action.payload
      };
    default:
      return state;
  }
}
