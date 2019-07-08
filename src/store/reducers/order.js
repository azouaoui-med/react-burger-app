import * as actionTypes from '../actions/actionTypes';

const intialState = {
  orders: [],
  loading: false
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ORDERS:
      let fetchedOrders = [];
      for (let [key, value] of Object.entries(action.ordersData.data)) {
        fetchedOrders.push({
          ...value,
          id: key
        });
      }
      return {
        ...state,
        orders: fetchedOrders
      };
    case actionTypes.PURCHASE_BURGER:
      return {
        ...state,
        loading: false
      };
    case actionTypes.START_PURCHASE_BURGER:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

export default reducer;
