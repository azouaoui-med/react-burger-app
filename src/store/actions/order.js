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

export const setPurchasing = status => {
  return {
    type: actionTypes.SET_PURCHASING,
    purchasing: status
  };
};

export const setPurchaseOrder = () => {
  return {
    type: actionTypes.PURCHASE_BURGER
  };
};
export const startPurchaseOrder = () => {
  return {
    type: actionTypes.START_PURCHASE_BURGER
  };
};
export const setInitBurger = () => {
  return {
    type: actionTypes.INIT_BURGER
  };
};

export const purchaseOrder = orderData => {
  return async dispatch => {
    try {
      dispatch(startPurchaseOrder());
      await axios.post('/orders.json', orderData);
      dispatch(setPurchaseOrder());
      dispatch(setPurchasing(false));
      dispatch(setInitBurger());
    } catch (err) {
      console.log(err);
    }
  };
};
