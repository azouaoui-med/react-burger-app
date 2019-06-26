import React from 'react';

const OrderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li className='list-group-item' key={igKey}>
        <span>{igKey}</span> : <span>{props.ingredients[igKey]}</span>
      </li>
    );
  });
  return (
    <ul className='list-group'>
      {ingredientSummary}
      <li className='list-group-item'>
        <span>Total Price</span> : <span>{props.totalPrice} $</span>
      </li>
    </ul>
  );
};

export default OrderSummary;
