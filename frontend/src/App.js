import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import BookScreen from './screens/BookScreen'
import CartScreen from './screens/CartScreen'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'

const App = () => {
  return (
    <Router>
      <Header />
      <Route path='/' component={HomeScreen} exact />
      <Route path='/books/:isbn' component={BookScreen} />
      <Route path='/cart' component={CartScreen} />
      <Route path='/login' component={LoginScreen} />
      <Footer />
    </Router>
  )
}

export default App
