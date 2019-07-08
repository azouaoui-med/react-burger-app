import * as actionTypes from '../actions/actionTypes';

const INGREDIENT_PRICES = {
  salad: 0.5,
  tomato: 0.2,
  cheese: 1,
  meat: 1.5
};

const intialState = {
  ingredients: { salad: 0, tomato: 0, cheese: 0, meat: 0 },
  totalPrice: 4,
  purchasing: false
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
      };

    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
      };
    case actionTypes.SET_PURCHASING:
      return {
        ...state,
        purchasing: action.purchasing
      };
    case actionTypes.INIT_BURGER:
      return {
        ...state,
        ingredients: { salad: 0, tomato: 0, cheese: 0, meat: 0 },
        totalPrice: 4
      };

    default:
      return state;
  }
};

export default reducer;
