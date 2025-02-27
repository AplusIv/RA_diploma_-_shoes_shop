import { MAKE_ORDER } from "../constants/actions";

const initialState = {
  // order: {
  //   owner: {
  //     phone: "",
  //     address: "",
  //   },
  //   items: [
  //     // {
  //     //   id: 1,
  //     //   price: 34000,
  //     //   count: 1,
  //     // },
  //   ],
  // },
  orderStatus: {
    owner: {
      phone: "",
      address: "",
    },
    items: [
      // {
      //   id: 1,
      //   price: 34000,
      //   count: 1,
      // },
    ],
  },
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAKE_ORDER:
      const stateProducts = action.products.map((product) => {
        return {
          id: product.id,
          price: product.price,
          count: product.quantity,
        };
      });
      return {
        ...state,
        orderStatus: {
          owner: { ...action.owner },
          items: stateProducts,
        },
      };

    default:
      return state;
  }
};
