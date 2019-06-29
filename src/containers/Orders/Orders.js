import React, { Component } from 'react';

import axios from '../../axios-orders';
import Order from '../../components/Order/Order';

class Orders extends Component {
  state = {
    orders: []
  };
  componentDidMount = async () => {
    try {
      const ordersData = await axios.get('orders.json');
      let fetchedOrders = [];
      for (let [key, value] of Object.entries(ordersData.data)) {
        fetchedOrders.push({
          ...value,
          id: key
        });
      }
      this.setState({ orders: fetchedOrders, loading: false });
    } catch (err) {
      console.log(err);
      this.setState({ loading: false });
    }
  };

  render() {
    let ingredientOutput = this.state.orders.map(order => {
      return (
        <Order
          key={order.id}
          ingredients={order.ingredients}
          price={order.price}
        />
      );
    });

    return (
      <React.Fragment>
        <h3 className='mb-3 mt-2 text-primary'>Orders List</h3>
        {ingredientOutput}
      </React.Fragment>
    );
  }
}

export default Orders;
