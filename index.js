const { createStore, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");

//constant
const GET_PRODUCT = 'GET_PRODUCT';
const ADD_PRODUCT = 'ADD_PRODUCT';
//state
const initialProductState = {
  products: ['mango'],
  numberOfProduct: 1,
}
//action
const getProductAction = () => {
  return {
    type: GET_PRODUCT,
  }
}
const addProductAction = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  }
}
//reducer 
const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state
      }

    case ADD_PRODUCT:
      return {
        products: [...state.products, action.payload],
        numberOfProduct: state.numberOfProduct + 1,
      }

    default:
      return state;
  }
}
//store
const store = createStore(productReducer, applyMiddleware(logger));
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getProductAction())
store.dispatch(addProductAction('banana'))
store.dispatch(addProductAction('tomato'))