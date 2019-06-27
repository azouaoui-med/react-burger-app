import React from 'react';

import {
  BreadBottom,
  BreadTop,
  Seeds1,
  Seeds2,
  Meat,
  Cheese,
  Salad,
  Tomato
} from './StyledIngredient';

const burgerIngredient = props => {
  let ingredient = null;
  switch (props.type) {
    case 'bread-bottom':
      ingredient = <BreadBottom />;
      break;

    case 'bread-top':
      ingredient = (
        <BreadTop>
          <Seeds1 />
          <Seeds2 />
        </BreadTop>
      );
      break;

    case 'meat':
      ingredient = <Meat />;
      break;

    case 'cheese':
      ingredient = <Cheese />;
      break;

    case 'salad':
      ingredient = <Salad />;
      break;

    case 'tomato':
      ingredient = <Tomato />;
      break;

    default:
      ingredient = null;
      break;
  }

  return ingredient;
};

export default burgerIngredient;
