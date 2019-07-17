import React from 'react';

const order = props => {
  let ingredients = [];
  for (const [key, value] of Object.entries(props.ingredients)) {
    ingredients.push({ name: key, amount: value });
  }

  const ingredientsOutput = ingredients.map(ig => {
    return (
      <small key={ig.name} className='text-nowrap border p-1 mr-2 bg-white'>
        {ig.name} : <strong>{ig.amount}</strong>
      </small>
    );
  });

  return (
    <div className='card bg-light shadow-sm mb-3'>
      <div className='d-flex flex-wrap align-items-center p-2 border-bottom'>
        <span className='mr-2'>Ingredients : </span>
        {ingredientsOutput}
      </div>
      <div className='p-2 d-flex align-items-center justify-content-end'>
        <span className='mr-2'>Price : </span>
        <span className='mr-2 text-success'>
          <strong>{props.price.toFixed(2)} $</strong>
        </span>
      </div>
    </div>
  );
};

export default order;
