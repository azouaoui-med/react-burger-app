import React, { Component } from 'react';
import { connect } from 'react-redux';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from '../../axios-orders';
import * as actions from '../../store/actions/index';

class BurgerBuilder extends Component {
  state = {
    purchasable: false,
    purchasing: false,
    loading: false
  };

  orderHandler = async () => {
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice
    };
    try {
      await axios.post('/orders.json', order);
      this.setState({ loading: false, purchasing: false });
    } catch (error) {
      console.log(error);
      this.setState({ loading: false, purchasing: false });
    }
  };
  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };
  cancelPurchaseHandler = e => {
    // if (e.target !== e.currentTarget) return;
    e.stopPropagation();
    this.setState({ purchasing: false });
  };
  updatePurchaseState() {
    const sum = Object.keys(this.props.ingredients)
      .map(igKey => {
        return this.props.ingredients[igKey];
      })
      .reduce((acc, curr) => {
        return acc + curr;
      }, 0);

    return sum > 0;
  }

  render() {
    const disabledInfo = {
      ...this.props.ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    let orderSummary = (
      <OrderSummary
        ingredients={this.props.ingredients}
        totalPrice={this.props.totalPrice}
      />
    );
    if (this.state.loading) {
      orderSummary = <Spinner />;
    }
    return (
      <React.Fragment>
        <Modal
          show={this.state.purchasing}
          closeModal={this.cancelPurchaseHandler}
          order={this.orderHandler}
          title='Order Summary'
        >
          {orderSummary}
        </Modal>
        <Burger ingredients={this.props.ingredients} />
        <BuildControls
          ingredientAdded={type => this.props.onAddIngredient(type)}
          ingredientRemoved={type => this.props.onRemoveIngredient(type)}
          disabled={disabledInfo}
          price={this.props.totalPrice}
          purchasable={this.updatePurchaseState()}
          clicked={this.purchaseHandler}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    ingredients: state.burger.ingredients,
    totalPrice: state.burger.totalPrice
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onAddIngredient: type => {
      dispatch(actions.addIngredient(type));
    },
    onRemoveIngredient: type => {
      dispatch(actions.removeIngredient(type));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BurgerBuilder);
