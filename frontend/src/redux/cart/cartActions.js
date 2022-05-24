import { ADD_TO_CART, REMOVE_FROM_CART } from './cartTypes'

export const addToCart = (item) => (dispatch, getState) => {
  dispatch({
    type: ADD_TO_CART,
    payload: item,
  })
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (item) => (dispatch, getState) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: item,
  })
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}
