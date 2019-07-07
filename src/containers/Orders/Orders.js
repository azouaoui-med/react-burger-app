import React, { Component } from 'react';
import { connect } from 'react-redux';

import Order from '../../components/Order/Order';
import * as actions from '../../store/actions/index';

class Orders extends Component {
  componentDidMount = async () => {
    this.props.onfetchOrders();
  };

  render() {
    let ingredientOutput = this.props.orders.map(order => {
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

const mapStateToProps = state => {
  return {
    orders: state.ord.orders
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onfetchOrders: () => {
      dispatch(actions.fetchOrders());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Orders);
