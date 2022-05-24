import { LinkContainer } from 'react-router-bootstrap'
import {
  Navbar,
  Nav,
  DropdownButton,
  Dropdown,
  Container,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { logOutUser } from '../redux/user/userActions'

const Header = (props) => {
  const cartItems = useSelector((state) => state.cart.cartItems)
  const userInfo = useSelector((state) => state.userLogin.userInfo)
  const dispatch = useDispatch()
  const cartItemsCount = cartItems.length
    ? cartItems.reduce((acc, item) => acc + item.qty, 0)
    : 0

  const logOutHandler = () => {
    dispatch(logOutUser())
  }
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <img
                style={{ marginRight: '10px' }}
                alt='book'
                src='/images/icons/open-book.png'
                width='30'
                height='30'
                className='d-inline-block align-top'
              />
              e Books
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <LinkContainer to='/cart'>
                <Nav.Link className='active'>
                  Cart <i className='fas fa-shopping-cart'></i>
                  {userInfo && (
                    <span
                      className='badge rounded-pill bg-danger mx-2 '
                      style={{ fontSize: '1rem' }}
                    >
                      {cartItemsCount}
                    </span>
                  )}
                </Nav.Link>
              </LinkContainer>

              {userInfo ? (
                <Nav.Link className='active'>
                  <Dropdown drop='down'>
                    <Dropdown.Toggle
                      variant=''
                      id='dropdown-basic'
                      className='outline'
                      style={{ color: '#ffff', padding: '0' }}
                    >
                      {userInfo.name}
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{ minWidth: '50px' }}>
                      <Dropdown.Item onClick={logOutHandler}>
                        <i className='fas fa-sign-out-alt'></i> Log Out
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Nav.Link>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link className='active'>
                    Sign In <i className='fas fa-user'></i>
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
