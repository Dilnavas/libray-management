import { combineReducers } from 'redux'
import { bookDetailsReducer, booksListReducer } from './books/booksReducers'
import { cartReducer } from './cart/cartReducers'
import { userLoginReducer } from './user/userReducers'

const rootReducer = combineReducers({
  booksList: booksListReducer,
  bookDetails: bookDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
})

export default rootReducer
