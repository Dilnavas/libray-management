import axios from 'axios'
import {
  BOOKS_DATA_FAIL,
  BOOKS_DATA_REQUEST,
  BOOKS_DATA_SUCCESS,
  BOOK_DETAILS_FAIL,
  BOOK_DETAILS_REQUEST,
  BOOK_DETAILS_SUCCESS,
} from './booksTypes'

export const getBooksData = () => async (dispatch) => {
  try {
    dispatch({
      type: BOOKS_DATA_REQUEST,
    })
    const { data } = await axios.get('/api/books')
    dispatch({
      type: BOOKS_DATA_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: BOOKS_DATA_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const getBookDetails = (isbn) => async (dispatch) => {
  try {
    dispatch({
      type: BOOK_DETAILS_REQUEST,
    })
    const { data } = await axios.get(`/api/books/${isbn}`)
    dispatch({
      type: BOOK_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: BOOK_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
