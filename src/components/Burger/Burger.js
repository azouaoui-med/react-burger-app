import React from 'react';
import styled from 'styled-components';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = styled.div`
  height: 300px;
  max-width: 400px;
`;

const burger = props => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, index) => {
        return <BurgerIngredient key={igKey + index} type={igKey} />;
      });
    })
    .reduce((acc, curr) => {
      return acc.concat(curr);
    }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = (
      <p className='text-danger text-center'>Please start adding ingredients</p>
    );
  }
  return (
    <Burger className='d-flex flex-column align-items-center mr-auto ml-auto justify-content-center'>
      <BurgerIngredient type='bread-top' />
      {transformedIngredients}
      <BurgerIngredient type='bread-bottom' />
    </Burger>
  );
};

export default burger;
