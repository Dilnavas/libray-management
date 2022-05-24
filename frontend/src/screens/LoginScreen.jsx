import { useEffect, useState } from 'react'
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../redux/user/userActions'

const LoginScreen = ({ history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const redirect = history.location.state ? history.location.state.from : '/'

  const dispatch = useDispatch()
  const { userInfo, error, loading } = useSelector((state) => state.userLogin)

  useEffect(() => {
    if (userInfo) history.push(redirect, { to: '/' })
  }, [userInfo, redirect, history])

  const clickHandler = (e) => {
    e.preventDefault()
    dispatch(loginUser(email, password))
  }

  return (
    <main>
      <Container className='d-flex flex-column align-items-center'>
        <h1 className='py-3'>SIGN IN </h1>
        {error && <Alert variant='danger'>{error}</Alert>}
        {history.location.state && (
          <Alert variant='info'>Please login to view your cart items.</Alert>
        )}
        <Form>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              value={email}
              type='email'
              placeholder='Enter email'
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={password}
              type='password'
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button
            variant='dark'
            type='submit'
            style={{ width: '100%' }}
            onClick={clickHandler}
          >
            Submit
          </Button>
        </Form>
      </Container>
    </main>
  )
}

export default LoginScreen
