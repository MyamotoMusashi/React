import React from 'react'
import { Route } from 'react-router-dom';
import './App.css';
import AddBook from './components/AddBook';
import Header from './components/Headers/Header';
import ListBooks from './components/ListBooks';
import ListOrders from './components/ListOrders';
import Login from './components/Login';
import Logout from './components/Logout';
import Register from './components/Register'

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
    <div className="App">
      <Header username={username} />
      <main>
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
        <Route path="/register" component={Register}/>
      </main>
    </div>
  );
}

export default App;
