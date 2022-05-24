import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import { v4 as uuidv4 } from 'uuid'
import books from './data/books.js'
import connectDB from './config/db.js'
import users from './data/users.js'

dotenv.config()

// connectDB()

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('API Running......')
})

app.get('/api/books', (req, res) => {
  try {
    if (books) {
      res.status(200).json(books)
    } else res.status(401).json({ message: 'Books not found' })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

app.get('/api/books/:isbn', (req, res) => {
  try {
    const book = books.find((book) => book.isbn === req.params.isbn)
    if (book) {
      res.status(200).json(book)
    } else res.status(401).json({ message: 'Book is not found' })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

app.post('/api/users/login', (req, res) => {
  try {
    const user = req.body
    const loginedUser = users.find(
      (u) => u.email === user.email && u.password === user.password
    )
    if (loginedUser)
      res.status(200).json({
        message: 'User login successfully.',
        user: loginedUser,
      })
    else throw new Error('Invalid credentials !')
  } catch (error) {
    res.status(400).json({
      message: `${error.message}`,
    })
  }
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () =>
  console.log('Server started on port 5000'.blue.bold.underline)
)
