import { ADD_ORDER, DELETE_ORDER } from "../actions";


const defaultState = {
  orders: [],
  totalPrice: 0,
  totalCount: 0,
};

export const rootReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      let ch = state.orders.findIndex(
        (item) => item.title === action.payload.title
      );
      if (ch !== -1) {
        let arr = [...state.orders];
        arr[ch].count = arr[ch].count + 1;
        arr[ch].sum = arr[ch].sum + action.payload.price;
        return {
          ...state,
          orders: arr,
        };
      } else {
        return {
          ...state,
          orders: [
            ...state.orders,
            {
              title: action.payload.title,
              price: action.payload.price,
              count: 1,
              sum: action.payload.price,
            },
          ],
        };
      }
    case DELETE_ORDER:
      const updatedOrders = state.orders.filter(
        (order, index) => index !== action.payload
      );
      return {
        ...state,
        orders: updatedOrders,
      };
    default:
      return state;
  }
};
