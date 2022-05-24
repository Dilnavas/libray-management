import { ADD_TO_CART, REMOVE_FROM_CART } from './cartTypes'

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        cartItems: state.cartItems.find(
          (item) => item.isbn === action.payload.isbn
        )
          ? [
              ...state.cartItems.map((item) =>
                item.isbn === action.payload.isbn ? action.payload : item
              ),
            ]
          : [...state.cartItems, action.payload],
      }
    case REMOVE_FROM_CART:
      return {
        cartItems: state.cartItems.filter(
          (item) => item.isbn !== action.payload.isbn
        ),
      }

    default:
      return state
  }
}
