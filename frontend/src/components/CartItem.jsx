import { Button, Image } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart, removeFromCart } from '../redux/cart/cartActions'

const CartItem = ({ item }) => {
  const dispatch = useDispatch()
  const changeHandler = (e) => {
    const qty = Number(e.target.value)
    console.log({ ...item, qty })
    dispatch(addToCart({ ...item, qty }))
  }
  const clickHandler = () => {
    dispatch(removeFromCart(item))
  }
  return (
    <tr>
      <td>
        <Link to={`/books/${item.isbn}`}>
          <Image src={item.image} width='60' height='60' />
        </Link>
      </td>
      <td>{item.title}</td>
      <td> &#8377;{item.price}</td>
      <td>
        <select className='form-control' onChange={changeHandler}>
          <option defaultValue>{item.qty}</option>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
            <option key={num} value={`${num}`}>
              {' '}
              {num}{' '}
            </option>
          ))}
        </select>
      </td>
      <td>
        <Button variant='dark' onClick={clickHandler}>
          <i className='fas fa-trash'></i>
        </Button>
      </td>
    </tr>
  )
}

export default CartItem
