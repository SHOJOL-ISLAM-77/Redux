const { createStore, combineReducers } = require("redux");
// Products Constants

const ADD_PRODUCT = "ADD_PRODUCT";
const GET_PRODUCTS = "GET_PRODUCTS";
// Carts Constants

const ADD_CART = "ADD_CART";
const GET_CART = "GET_CART";

// Product Reducer

const initialProductState = {
  products: ["sugar", "salt"],
  productCount: 2,
};

const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

const getProduct = () => {
  return {
    type: GET_PRODUCTS,
  };
};

const productsReducer = (state = initialProductState, action) => {
 
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };
    case ADD_PRODUCT:
      return {
        products: [...state.products, action.payload],
        productCount: state.productCount + 1,
      };

    default:
      return state;
  }
};

// Cart Reducer

const initialCartState = {
  cart: ["sugar", "pen"],
  cartsCount: 2,
};

const addCart = (cart) => {
  return {
    type: ADD_CART,
    payload: cart,
  };
};

const getCart = () => {
  return {
    type: GET_CART,
  };
};

const cartsReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case GET_CART:
      return {
        ...state,
      };
    case ADD_CART:
      return {
        products: [...state.cart, action.payload],
        productCount: state.cartsCount + 1,
      };

    default:
      return state;
  }
};

// combineReducers

const rootReducer = combineReducers({
  cartR: cartsReducer,
  productsR: productsReducer,
});
// store

const store = createStore(rootReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addProduct("pen"));

store.dispatch(addCart("salt"));

