import { useEffect } from 'react'
import {
  Alert,
  Button,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
  Table,
} from 'react-bootstrap'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem'

const CartScreen = ({ history }) => {
  const cartItems = useSelector((state) => state.cart.cartItems)
  const total = cartItems.reduce((acc, item) => acc + item.qty * item.price, 0)
  const cartItemsCount = cartItems.reduce((acc, item) => acc + item.qty, 0)
  const userInfo = useSelector((state) => state.userLogin.userInfo)

  useEffect(() => {
    if (!userInfo) {
      history.push('/login', { from: '/cart' })
    }
  }, [history, userInfo])

  const goBackHandler = () => {
    if (history.location.state) history.push(history.location.state.to)
    else history.goBack()
  }

  return (
    <main>
      <Container>
        <Button className='mt-3' variant='dark' onClick={goBackHandler}>
          {' '}
          Back{' '}
        </Button>
        <Row>
          <Col lg={6} md={6} xl={6} className='my-3'>
            <h3 className='mt-2'>CART ITEMS</h3>
            {cartItemsCount === 0 ? (
              <Alert variant='warning'>Cart is empty !</Alert>
            ) : (
              <Table>
                <tbody>
                  {cartItems.map((item) => (
                    <CartItem key={item.isbn} item={item} />
                  ))}
                </tbody>
              </Table>
            )}
          </Col>
          <Col lg={6} md={6} xl={6}>
            <h3 className='mt-4'>SUBTOTAL</h3>
            <ListGroup>
              <ListGroupItem>TOTAL : &#8377; {total}</ListGroupItem>
              <ListGroupItem>QUANTITY : {cartItemsCount}</ListGroupItem>
              <ListGroupItem>
                <Button variant='dark'>PLACE ORDER</Button>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </main>
  )
}

export default CartScreen
