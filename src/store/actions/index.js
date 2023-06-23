export const ADD_ORDER = "ADD_ORDER";
export const DELETE_ORDER ='DELETE_ORDER'
export const INCREASE_QUANTITY = "INCREASE_QUANTITY";
export const DECREASE_QUANTITY = "DECREASE_QUANTITY";

export const delete_order = (orderId) => {
  return {
    type: 'DELETE_ORDER',
    payload: orderId
  };
};

export const add_order = (item) => ({
  type: ADD_ORDER,
  payload: item,
});
export const increase_quantity = (id) => ({
  type: INCREASE_QUANTITY,
  payload: id,
});

export const decrease_quantity = (id) => ({
  type: DECREASE_QUANTITY,
  payload: id,
});