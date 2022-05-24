import { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Book from '../components/Book'
import { getBooksData } from '../redux/books/booksActions'

const HomeScreen = () => {
  const books = useSelector((state) => state.booksList.books)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getBooksData())
  }, [dispatch])

  return (
    <>
      <main>
        <Container>
          <h1>BOOKS DETAILS</h1>
          <Row>
            {books.map((book) => {
              return (
                <Col key={book.isbn} sm={12} lg={4} xl={3} md={6}>
                  <Book book={book} />
                </Col>
              )
            })}
          </Row>
        </Container>
      </main>
    </>
  )
}

export default HomeScreen
