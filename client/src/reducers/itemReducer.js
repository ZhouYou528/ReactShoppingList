import {
  ADD_ITEM,
  DELETE_ITEM,
  GET_ITEMS,
  ITEMS_LOADING,
  ITEM_ADDED
} from '../actions/types';

const initialState = {
  items: [],
  loading: false,
  added: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
        loading: false
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item._id !== action.payload)
      };
    case ADD_ITEM:
      return {
        ...state,
        items: [action.payload, ...state.items],
        added: true
      };
    case ITEMS_LOADING:
      return {
        ...state,
        loading: true
      };
    case ITEM_ADDED:
      return {
        ...state,
        added: false
      };
    default:
      return state;
  }
}
