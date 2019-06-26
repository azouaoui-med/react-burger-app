import React from 'react';

import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
];

const buildControls = props => (
  <div className='card p-3 shadow-sm'>
    <p className='text-right'>
      Current Price : <strong>{props.price.toFixed(2)}</strong> $
    </p>
    {controls.map(control => (
      <BuildControl
        key={control.label}
        label={control.label}
        added={() => props.ingredientAdded(control.type)}
        removed={() => props.ingredientRemoved(control.type)}
        disabled={props.disabled[control.type]}
      />
    ))}
    <hr />
    <button
      className='btn btn-primary'
      disabled={!props.purchasable}
      onClick={props.clicked}
    >
      Order
    </button>
  </div>
);

export default buildControls;
