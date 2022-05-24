const cartItemsFromStorage = JSON.parse(localStorage.getItem('cartItems'))
const userInfoFromStorage = JSON.parse(localStorage.getItem('user'))

const initialState = {
  userLogin: {
    userInfo: userInfoFromStorage ? userInfoFromStorage : null,
  },
  cart: {
    cartItems: cartItemsFromStorage ? cartItemsFromStorage : [],
  },
}

export default initialState
