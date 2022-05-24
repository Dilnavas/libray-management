import {
  BOOKS_DATA_FAIL,
  BOOKS_DATA_REQUEST,
  BOOKS_DATA_SUCCESS,
  BOOK_DETAILS_FAIL,
  BOOK_DETAILS_REQUEST,
  BOOK_DETAILS_SUCCESS,
} from './booksTypes'

export const booksListReducer = (state = { books: [] }, action) => {
  switch (action.type) {
    case BOOKS_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case BOOKS_DATA_SUCCESS:
      return {
        books: action.payload,
        loading: false,
      }
    case BOOKS_DATA_FAIL:
      return {
        loading: false,
        error: action.payload,
      }

    default:
      return state
  }
}

export const bookDetailsReducer = (state = { book: {} }, action) => {
  switch (action.type) {
    case BOOK_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case BOOK_DETAILS_SUCCESS:
      return {
        book: action.payload,
        loading: false,
      }
    case BOOK_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
