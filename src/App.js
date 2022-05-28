import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import AddBook from './components/AddBook'
import Header from './components/Headers/Header'
import ListBooks from './components/ListBooks'
import ListOrders from './components/ListOrders'
import Login from './components/Login'
import Logout from './components/Logout'
import Register from './components/Register'
import ShoppingCart from './components/ShoppingCart'
import ListUsers from './components/ListUsers'
import AddUser from './components/AddUser'
import AddCategory from './components/AddCategory'

import UserService from './services/UserService';

function App() {

  let [username, setUsername] = React.useState("")

  React.useEffect(() => {
    function getUsername() {
      const username = UserService.getCurrentUser();
      console.log(username)
      setUsername(username)
    }
    getUsername()
  }, [])

  function onLogin() {
    setUsername(UserService.getCurrentUser())
  }

  function onLogout() {
    setUsername(null)
    UserService.setCurrentUser(null)
  }

  return (
    <>
      <Header username={username} /> 
      <main>
       <div id="templatemo_content_left">
          <div class="templatemo_content_left_section">
            <h1>Categories</h1>
            <ul>
              <li key="1"><a href="subpage.html">Donec accumsan urna</a></li>
              <li key="2"><a href="subpage.html">Proin vulputate justo</a></li>
              <li key="3"><a href="#">In sed risus ac feli</a></li>
              <li><a href="#">Aliquam tristique dolor</a></li>
              <li><a href="#">Maece nas metus</a></li>
              <li><a href="#">Sed pellentesque placerat</a></li>
              <li><a href="#">Suspen disse</a></li>
              <li><a href="#">Maece nas metus</a></li>
              <li><a href="#">In sed risus ac feli</a></li>
            </ul>
          </div>
          <div class="templatemo_content_left_section">
            <h1>Bestsellers</h1>
            <ul>
              <li><a href="#">Vestibulum ullamcorper</a></li>
              <li><a href="#">Maece nas metus</a></li>
              <li><a href="#">In sed risus ac feli</a></li>
              <li><a href="#">Praesent mattis varius</a></li>
              <li><a href="#">Maece nas metus</a></li>
              <li><a href="#">In sed risus ac feli</a></li>
              <li><a href="#">Flash Templates</a></li>
              <li><a href="#">CSS Templates</a></li>
              <li><a href="#">Web Design</a></li>
              <li><a href="http://www.photovaco.com" target="_parent">Free Photos</a></li>
            </ul>
          </div>
        </div>
        <Route path="/" exact strict component={ListBooks} />
        <Route path="/login">
          <Login onLogin={onLogin} />
        </Route>
        <Route path="/list-books" exact strict component={ListBooks} />
        <Route path="/add-book" component={AddBook} />
        <Route path="/orders" component={ListOrders} />
        <Route path="/logout">
          <Logout onLogout={onLogout} />
        </Route>
        <Route path="/register" component={Register} />
        <Route path="/shopping-cart" component={ShoppingCart}/>
        <Route path="/users" component={ListUsers}></Route>
        <Route path="/add-user" component={AddUser}></Route>
        <Route path="/add-category" component={AddCategory}></Route>
      </main>
      <footer>

        <a href="subpage.html">Home</a> | <a href="subpage.html">Search</a> | <a href="subpage.html">Books</a> | <a href="#">New Releases</a> | <a href="#">FAQs</a> | <a href="#">Contact Us</a><br />
        Copyright © 2024 <a href="#"><strong>Your Company Name</strong></a>
      </footer>
    </>
  );
}

export default App;
