// cart actions
export const INCREASE_ITEM = "INCREASE_ITEM";
export const DECREASE_ITEM = "DECREASE_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";

export const ADD_TO_CART = "ADD_TO_CART";
export const DELETE_FROM_CART = "DELETE_FROM_CART";

export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";

export const USE_PROMO = "USE_PROMO";
export const CANCEL_PROMO = "CANCEL_PROMO";

export const MAKE_ORDER = "MAKE_ORDER";

// search
export const CHANGE_SEARCHFIELD = "CHANGE_SEARCHFIELD";

// export const CHANGE_SEARCHFIELD = "CHANGE_SEARCHFIELD";

export const SEARCH_PRODUCTS = "SEARCH_PRODUCTS";

export const TOGGLE_VISIBILITY = "TOGGLE_VISIBILITY";

// cart action generators (создание экшенов)
export const IncreaseItem = (text) => {
  return { type: INCREASE_ITEM, text };
};

export const AddToCart = (id, title, price, size, quantity) => {
  return { type: ADD_TO_CART, id, title, price, size, quantity };
};

// export const DeleteFromCart = (id, size) => {
//   return { type: DELETE_FROM_CART, id, size };
// };

export const DeleteItem = (index) => {
  return { type: DELETE_ITEM, index };
};
