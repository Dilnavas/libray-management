import { Link } from 'react-router-dom'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'

const Book = ({
  book: { image, title, author, publisher, pages, isbn, price },
}) => {
  return (
    <Card border='dark' className='my-3 p-3 rounded card'>
      <Link
        style={{ color: 'inherit', textDecoration: 'inherit' }}
        to={`/books/${isbn}`}
      >
        <Card.Img variant='top' src={image} height='250' width='200' />
        <Card.Title style={{ padding: '10px' }}>{title}</Card.Title>
        <ListGroup>
          <ListGroupItem>Author : {author}</ListGroupItem>
          <ListGroupItem>Publisher : {publisher}</ListGroupItem>
          <ListGroupItem>Pages : {pages}</ListGroupItem>
          <ListGroupItem>Price : &#8377; {price}</ListGroupItem>
        </ListGroup>
      </Link>
    </Card>
  )
}

export default Book
