import { useEffect, useState } from 'react'
import {
  Alert,
  Button,
  Col,
  Container,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getBookDetails } from '../redux/books/booksActions'
import { addToCart } from '../redux/cart/cartActions'

const BookScreen = ({ match, history }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getBookDetails(match.params.isbn))
  }, [dispatch, match.params.isbn])

  const [isAdded, setIsAdded] = useState(0)
  const bookDetails = useSelector((state) => state.bookDetails.book)
  const userInfo = useSelector((state) => state.userLogin.userInfo)

  const clickHandler = () => {
    if (userInfo) {
      setIsAdded(1)
      dispatch(addToCart({ ...bookDetails, qty: 1 }))
      setTimeout(() => setIsAdded(0), 1500)
    }
  }

  return (
    <>
      <main>
        <Container>
          <Button
            className='mt-3'
            variant='dark'
            onClick={() => history.goBack()}
          >
            {' '}
            Back{' '}
          </Button>
          {isAdded === 1 && (
            <Alert variant='success' className='mt-2 mb-0'>
              {bookDetails.title} is added to cart .
            </Alert>
          )}
          {userInfo === null && (
            <Alert variant='warning' className='mt-2 mb-0'>
              Please login to add book to cart .
            </Alert>
          )}
          <Row>
            <Col lg={6}>
              <Image
                src={`${bookDetails.image}`}
                style={{ paddingTop: '50px', width: '100%', height: '100%' }}
              />
            </Col>
            <Col lg={6}>
              <h1 style={{ paddingTop: '50px' }}>{bookDetails.title}</h1>
              <ListGroup style={{ paddingTop: '20px' }}>
                <ListGroupItem>{bookDetails.description}</ListGroupItem>
                <ListGroupItem>Author : {bookDetails.author}</ListGroupItem>
                <ListGroupItem>
                  Publisher : {bookDetails.publisher}
                </ListGroupItem>
                <ListGroupItem>Pages : {bookDetails.pages}</ListGroupItem>
                <ListGroupItem>
                  Price : &#8377; {bookDetails.price}
                </ListGroupItem>
              </ListGroup>
              <Button
                className='mt-3 my-5'
                variant='dark'
                onClick={clickHandler}
              >
                {' '}
                Add to cart <i className='fas fa-shopping-cart'></i>{' '}
              </Button>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  )
}

export default BookScreen
