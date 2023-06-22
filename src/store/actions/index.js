export const ADD_ORDER = "ADD_ORDER";
export const DELETE_ORDER ='DELETE_ORDER'

// export const add_order = () => {
//   return {
//     type: ADD_ORDER,
//   };
// };
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
