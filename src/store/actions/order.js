import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

const setOrders = orders => {
  return {
    type: actionTypes.SET_ORDERS,
    ordersData: orders
  };
};

export const fetchOrders = () => {
  return async dispatch => {
    try {
      const ordersData = await axios.get('orders.json');
      dispatch(setOrders(ordersData));
    } catch (err) {
      console.log(err);
    }
  };
};
