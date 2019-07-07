import * as actionTypes from '../actions/actionTypes';

const intialState = {
  orders: []
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

    default:
      return state;
  }
};

export default reducer;
